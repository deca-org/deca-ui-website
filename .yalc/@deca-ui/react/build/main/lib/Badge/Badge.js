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
const Badge_styles_1 = require("./Badge.styles");
const Badge = react_1.default.forwardRef((_a, ref) => {
    var { children, className, color = 'primary', size = 'md', as, css, pill = false } = _a, props = __rest(_a, ["children", "className", "color", "size", "as", "css", "pill"]);
    const preClass = 'decaBadge';
    return (react_1.default.createElement(Badge_styles_1.StyledBadge, Object.assign({ ref: ref, size: size, as: as, css: css, color: color, className: (0, clsx_1.default)(className, `${preClass}-root`), pill: pill }, props), children));
});
if (Utils_1.__DEV__) {
    Badge.displayName = 'DecaUI.Badge';
}
exports.default = Badge;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFkZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL0JhZGdlL0JhZGdlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esc0NBSW9CO0FBQ3BCLGdEQUF3QjtBQUN4QixrREFBMEI7QUFFMUIsaURBQTZDO0FBMEM3QyxNQUFNLEtBQUssR0FBbUIsZUFBSyxDQUFDLFVBQVUsQ0FDNUMsQ0FDRSxFQVNnQixFQUNoQixHQUF1QixFQUN2QixFQUFFO1FBWEYsRUFDRSxRQUFRLEVBQ1IsU0FBUyxFQUNULEtBQUssR0FBRyxTQUFTLEVBQ2pCLElBQUksR0FBRyxJQUFJLEVBQ1gsRUFBRSxFQUNGLEdBQUcsRUFDSCxJQUFJLEdBQUcsS0FBSyxPQUVFLEVBRFgsS0FBSyxjQVJWLCtEQVNDLENBRFM7SUFJVixNQUFNLFFBQVEsR0FBRyxXQUFXLENBQUM7SUFFN0IsT0FBTyxDQUNMLDhCQUFDLDBCQUFXLGtCQUNWLEdBQUcsRUFBRSxHQUFHLEVBQ1IsSUFBSSxFQUFFLElBQUksRUFDVixFQUFFLEVBQUUsRUFBRSxFQUNOLEdBQUcsRUFBRSxHQUFHLEVBQ1IsS0FBSyxFQUFFLEtBQUssRUFDWixTQUFTLEVBQUUsSUFBQSxjQUFJLEVBQUMsU0FBUyxFQUFFLEdBQUcsUUFBUSxPQUFPLENBQUMsRUFDOUMsSUFBSSxFQUFFLElBQUksSUFDTixLQUFLLEdBRVIsUUFBUSxDQUNHLENBQ2YsQ0FBQztBQUNKLENBQUMsQ0FDRixDQUFDO0FBRUYsSUFBSSxlQUFPLEVBQUU7SUFDWCxLQUFLLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQztDQUNwQztBQUVELGtCQUFlLEtBQUssQ0FBQyJ9