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
const Container_styles_1 = require("./Container.styles");
const Container = react_1.default.forwardRef((_a, ref) => {
    var { as, css, className = '', children, px = 'sm', responsive = true, fluid = false } = _a, containerProps = __rest(_a, ["as", "css", "className", "children", "px", "responsive", "fluid"]);
    const preClass = 'decaContainer';
    return (react_1.default.createElement(Container_styles_1.StyledContainer, Object.assign({ as: as, css: css, className: (0, clsx_1.default)(className, `${preClass}-root`), px: px, responsive: responsive, fluid: fluid, ref: ref }, containerProps), children));
});
if (Utils_1.__DEV__) {
    Container.displayName = 'DecaUI.Container';
}
exports.default = Container;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9Db250YWluZXIvQ29udGFpbmVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esc0NBSW9CO0FBQ3BCLGdEQUF3QjtBQUN4QixrREFBMEI7QUFFMUIseURBQXFEO0FBMENyRCxNQUFNLFNBQVMsR0FBdUIsZUFBSyxDQUFDLFVBQVUsQ0FDcEQsQ0FDRSxFQVNvQixFQUNwQixHQUF1QixFQUN2QixFQUFFO1FBWEYsRUFDRSxFQUFFLEVBQ0YsR0FBRyxFQUNILFNBQVMsR0FBRyxFQUFFLEVBQ2QsUUFBUSxFQUNSLEVBQUUsR0FBRyxJQUFJLEVBQ1QsVUFBVSxHQUFHLElBQUksRUFDakIsS0FBSyxHQUFHLEtBQUssT0FFSyxFQURmLGNBQWMsY0FSbkIsbUVBU0MsQ0FEa0I7SUFJbkIsTUFBTSxRQUFRLEdBQUcsZUFBZSxDQUFDO0lBRWpDLE9BQU8sQ0FDTCw4QkFBQyxrQ0FBZSxrQkFDZCxFQUFFLEVBQUUsRUFBRSxFQUNOLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsY0FBSSxFQUFDLFNBQVMsRUFBRSxHQUFHLFFBQVEsT0FBTyxDQUFDLEVBQzlDLEVBQUUsRUFBRSxFQUFFLEVBQ04sVUFBVSxFQUFFLFVBQVUsRUFDdEIsS0FBSyxFQUFFLEtBQUssRUFDWixHQUFHLEVBQUUsR0FBRyxJQUNKLGNBQWMsR0FFakIsUUFBUSxDQUNPLENBQ25CLENBQUM7QUFDSixDQUFDLENBQ0YsQ0FBQztBQUVGLElBQUksZUFBTyxFQUFFO0lBQ1gsU0FBUyxDQUFDLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQztDQUM1QztBQUVELGtCQUFlLFNBQVMsQ0FBQyJ9