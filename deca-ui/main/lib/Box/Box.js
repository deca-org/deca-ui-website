"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("../Utils");
const clsx_1 = __importDefault(require("clsx"));
const react_1 = __importDefault(require("react"));
const Box_styles_1 = require("./Box.styles");
const Box = react_1.default.forwardRef((_a, ref) => {
    var { as, css, children, className = '' } = _a, boxProps = __rest(_a, ["as", "css", "children", "className"]);
    const preClass = 'decaBox';
    return (react_1.default.createElement(Box_styles_1.StyledBox, Object.assign({ as: as, css: css, className: (0, clsx_1.default)(className, `${preClass}-root`), ref: ref }, boxProps), children));
});
if (Utils_1.__DEV__) {
    Box.displayName = 'DecaUI.Box';
}
exports.default = Box;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm94LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9Cb3gvQm94LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esc0NBSW9CO0FBQ3BCLGdEQUF3QjtBQUN4QixrREFBMEI7QUFFMUIsNkNBQXlDO0FBNEJ6QyxNQUFNLEdBQUcsR0FBaUIsZUFBSyxDQUFDLFVBQVUsQ0FDeEMsQ0FDRSxFQUErRCxFQUMvRCxHQUF1QixFQUN2QixFQUFFO1FBRkYsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEdBQUcsRUFBRSxPQUE0QixFQUF2QixRQUFRLGNBQWhELHNDQUFrRCxDQUFGO0lBR2hELE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUUzQixPQUFPLENBQ0wsOEJBQUMsc0JBQVMsa0JBQ1IsRUFBRSxFQUFFLEVBQUUsRUFDTixHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLGNBQUksRUFBQyxTQUFTLEVBQUUsR0FBRyxRQUFRLE9BQU8sQ0FBQyxFQUM5QyxHQUFHLEVBQUUsR0FBRyxJQUNKLFFBQVEsR0FFWCxRQUFRLENBQ0MsQ0FDYixDQUFDO0FBQ0osQ0FBQyxDQUNGLENBQUM7QUFFRixJQUFJLGVBQU8sRUFBRTtJQUNYLEdBQUcsQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDO0NBQ2hDO0FBRUQsa0JBQWUsR0FBRyxDQUFDIn0=