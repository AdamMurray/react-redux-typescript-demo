"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslint_1 = require("tslint");
exports.helper = function (_a) {
    var src = _a.src, rule = _a.rule;
    var _b;
    var linter = new tslint_1.Linter({ fix: false });
    linter.lint('', src, tslint_1.Configuration.parseConfigFile({
        rules: (_b = {},
            _b[rule.name || rule] = [true].concat(rule.options),
            _b),
        rulesDirectory: 'src'
    }));
    return linter.getResult();
};
exports.getFixedResult = function (_a) {
    var src = _a.src, rule = _a.rule;
    var result = exports.helper({ src: src, rule: rule });
    return tslint_1.Replacement.applyFixes(src, [result.failures[0].getFix()]);
};
//# sourceMappingURL=lintRunner.js.map