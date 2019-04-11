"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Lint = require("tslint");
var ts = require("typescript");
var tsutils = require("tsutils");
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new RuleWalker(sourceFile, this.getOptions()));
    };
    Rule.metadata = {
        ruleName: 'advanced-ordered-imports',
        description: 'QWE',
        rationale: 'Helps maintain a readable style in your codebase.',
        optionsDescription: '',
        options: null,
        type: 'typescript',
        typescriptOnly: false,
        hasFix: false
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var projectFolders = ['common', 'components', 'config', 'state', 'types', 'utils'];
var whitelist = ['routes'];
var RuleWalker = /** @class */ (function (_super) {
    __extends(RuleWalker, _super);
    function RuleWalker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.firstImport = null;
        return _this;
    }
    RuleWalker.prototype.visitImportDeclaration = function (node) {
        this.check(node);
    };
    RuleWalker.prototype.isMarked = function (source) {
        return whitelist.some(function (keyword) { return source === keyword; }) ||
            projectFolders.some(function (folder) { return source === folder || source.startsWith(folder + "/"); });
    };
    RuleWalker.prototype.check = function (node) {
        var source = this.getModuleName(node);
        var nextNode = tsutils.getNextStatement(node);
        var previousNode = tsutils.getPreviousStatement(node);
        if (this.firstImport !== null && source === 'react') {
            this.addFailureAt(node.getStart(), node.getEnd() - node.getStart(), 'React import should come first');
        }
        else {
            this.firstImport = node;
        }
        if (!nextNode || !ts.isImportDeclaration(nextNode))
            return;
        var nextSource = this.getModuleName(nextNode);
        var isMarked = this.isMarked(source);
        var isNextMarked = this.isMarked(nextSource);
        if (previousNode && ts.isImportDeclaration(previousNode)) {
            var previousSource = this.getModuleName(previousNode);
            var isPreviousMarked = this.isMarked(previousSource);
        }
        if (isMarked && !isNextMarked && !nextSource.startsWith("./")) {
            this.addFailureAt(nextNode.getStart(), nextNode.getEnd() - nextNode.getStart(), 'External imports should come first');
        }
        if (isMarked && isNextMarked) {
            if (source > nextSource) {
                this.addFailureAt(nextNode.getStart(), nextNode.getEnd() - nextNode.getStart(), 'Should be sorted alphabetically');
            }
        }
        if (source.startsWith("./") && isNextMarked) {
            this.addFailureAt(node.getStart(), node.getEnd() - node.getStart(), 'Relative imports should come after absolute imports');
        }
        if (!isMarked && !source.startsWith("./") && (isNextMarked || nextSource.startsWith("./"))) {
            this.checkEmptyLine(node);
        }
        if (source.startsWith("./") && !nextSource.startsWith("./")) {
            this.addFailureAt(nextNode.getStart(), nextNode.getEnd() - nextNode.getStart(), 'Absolute imports should come before relative imports');
        }
    };
    RuleWalker.prototype.getModuleName = function (node) {
        if (node.kind === ts.SyntaxKind.ImportDeclaration) {
            return this.removeQuotes(node.moduleSpecifier.getText());
        }
        if (node.moduleReference.kind === ts.SyntaxKind.ExternalModuleReference) {
            var moduleRef = node.moduleReference;
            if (moduleRef.expression.kind === ts.SyntaxKind.StringLiteral) {
                return this.removeQuotes(moduleRef.expression.text);
            }
        }
        return this.removeQuotes(node.moduleReference.getText());
    };
    RuleWalker.prototype.removeQuotes = function (value) {
        if (value && value.length > 1 && (value[0] === "'" || value[0] === "\"")) {
            value = value.substr(1, value.length - 2);
        }
        return value;
    };
    RuleWalker.prototype.fix = function (node) {
        return new Lint.Replacement(node.pos, node.end, '');
    };
    RuleWalker.prototype.checkEmptyLine = function (node) {
        var nodeLine = ts
            .getLineAndCharacterOfPosition(this.getSourceFile(), node.getEnd())
            .line;
        var nextNode = tsutils.getNextStatement(node);
        var nextNodeLine = ts
            .getLineAndCharacterOfPosition(this.getSourceFile(), nextNode.getStart(this.getSourceFile()))
            .line;
        var totalLinesCountBetweenNodes = nextNodeLine - nodeLine - 1;
        var blankLinesCount = totalLinesCountBetweenNodes - this.getNodeLeadingCommentedLinesCount(nextNode);
        if (blankLinesCount !== 1) {
            this.addFailureAt(node.getStart(), node.getEnd() - node.getStart(), 'One blank line required between node_modules import and custom import');
        }
    };
    RuleWalker.prototype.getNodeLeadingCommentedLinesCount = function (node) {
        var _this = this;
        var comments = ts.getLeadingCommentRanges(this.getSourceFile().text, node.pos);
        if (!comments)
            return 0;
        return comments
            .reduce(function (count, comment) {
            var startLine = ts.getLineAndCharacterOfPosition(_this.getSourceFile(), comment.pos).line;
            var endLine = ts.getLineAndCharacterOfPosition(_this.getSourceFile(), comment.end).line;
            return count + (endLine - startLine + 1);
        }, 0);
    };
    return RuleWalker;
}(Lint.RuleWalker));
//# sourceMappingURL=advancedOrderedImportsRule.js.map