"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lintRunner_1 = require("./lintRunner");
var rule = 'advanced-ordered-imports';
describe('Advanced ordered imports rule', function () {
    it('should fail if common/ imports are not sorted #1', function () {
        var src = "\n            import * as _ from 'lodash';\n\n            import Link from 'common/Link';\n            import Img from 'common/Img';\n        ";
        var output = src;
        var result = lintRunner_1.helper({ src: src, rule: rule });
        expect(result.errorCount).toBe(1);
        expect(lintRunner_1.getFixedResult({ src: src, rule: rule })).toEqual(output);
    });
    it('should fail if common/ imports are not sorted #2', function () {
        var src = "\n            import BaseComponent from 'common/BaseComponent';\n            import Img from 'common/Img';\n            import Button from 'common/Button';\n        ";
        var output = src;
        var result = lintRunner_1.helper({ src: src, rule: rule });
        expect(result.errorCount).toBe(1);
        expect(lintRunner_1.getFixedResult({ src: src, rule: rule })).toEqual(output);
    });
    it('should fail if relative import is before absolute import', function () {
        var src = "\n            import * as React from 'react';\n            import * as _ from 'lodash';\n\n            import './styles.css';\n            import BaseComponent from 'common/BaseComponent';\n        ";
        var output = src;
        var result = lintRunner_1.helper({ src: src, rule: rule });
        expect(result.errorCount).toBe(2);
        expect(lintRunner_1.getFixedResult({ src: src, rule: rule })).toEqual(output);
    });
    it('should fail if external import is before internal import', function () {
        var src = "\n            import * as React from 'react';\n            import * as _ from 'lodash';\n\n            import './styles.css';\n            import BaseComponent from 'common/BaseComponent';\n        ";
        var output = src;
        var result = lintRunner_1.helper({ src: src, rule: rule });
        expect(result.errorCount).toBe(2);
        expect(lintRunner_1.getFixedResult({ src: src, rule: rule })).toEqual(output);
    });
    it('react import should always come first', function () {
        var src = "\n            import * as React from 'react';\n            \n            import BaseComponent from 'common/BaseComponent';\n            import * as _ from 'lodash';\n        ";
        var output = src;
        var result = lintRunner_1.helper({ src: src, rule: rule });
        expect(result.errorCount).toBe(1);
        expect(lintRunner_1.getFixedResult({ src: src, rule: rule })).toEqual(output);
    });
    it('should fail if react import is not first', function () {
        var src = "\n            import * as _ from 'lodash';\n            import * as React from 'react';\n        \n            import BaseComponent from 'common/BaseComponent';\n        ";
        var output = src;
        var result = lintRunner_1.helper({ src: src, rule: rule });
        expect(result.errorCount).toBe(1);
        expect(lintRunner_1.getFixedResult({ src: src, rule: rule })).toEqual(output);
    });
    it('should fail if there is no empty line between external and internal imports', function () {
        var src = "\n            import * as React from 'react';\n            import * as _ from 'lodash';\n            import BaseComponent from 'common/BaseComponent';\n        ";
        var output = src;
        var result = lintRunner_1.helper({ src: src, rule: rule });
        expect(result.errorCount).toBe(1);
        expect(lintRunner_1.getFixedResult({ src: src, rule: rule })).toEqual(output);
    });
    it('should not fail if there is one empty line between external and internal imports', function () {
        var src = "\n            import * as React from 'react';\n            import * as _ from 'lodash';\n\n            import BaseComponent from 'common/BaseComponent';\n        ";
        var output = src;
        var result = lintRunner_1.helper({ src: src, rule: rule });
        expect(result.errorCount).toBe(0);
    });
});
//# sourceMappingURL=advancedOrderedImportsRule.spec.js.map