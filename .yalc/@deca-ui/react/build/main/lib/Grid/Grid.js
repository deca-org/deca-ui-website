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
const Grid_styles_1 = require("./Grid.styles");
const Grid = react_1.default.forwardRef((_a, ref) => {
    var { as, css, className = '', children, n, xs, sm, md, lg, xl } = _a, gridProps = __rest(_a, ["as", "css", "className", "children", "n", "xs", "sm", "md", "lg", "xl"]);
    const preClass = 'decaGrid';
    const genGridItemCss = (breakpoint, bp) => {
        if (bp) {
            return Object.assign({ flexBasis: `calc((${breakpoint} / 12) * 100%)`, maxWidth: `calc((${breakpoint} / 12) * 100%)` }, bp);
        }
        return {
            flexBasis: `calc((${breakpoint} / 12) * 100%)`,
            maxWidth: `calc((${breakpoint} / 12) * 100%)`,
        };
    };
    const _b = css || {}, { '@n': cssN, '@xs': cssXs, '@sm': cssSm, '@md': cssMd, '@lg': cssLg, '@xl': cssXl } = _b, otherCss = __rest(_b, ['@n', '@xs', '@sm', '@md', '@lg', '@xl']);
    const getCss = Object.assign({ flexGrow: 0, '@n': genGridItemCss(n, cssN), '@xs': genGridItemCss(xs, cssXs), '@sm': genGridItemCss(sm, cssSm), '@md': genGridItemCss(md, cssMd), '@lg': genGridItemCss(lg, cssLg), '@xl': genGridItemCss(xl, cssXl) }, otherCss);
    return (react_1.default.createElement(Grid_styles_1.StyledGridItem, Object.assign({ as: as, css: getCss, className: (0, clsx_1.default)(className, `${preClass}-root`), ref: ref }, gridProps), children));
});
if (Utils_1.__DEV__) {
    Grid.displayName = 'DecaUI.Grid';
}
exports.default = Grid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JpZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvR3JpZC9HcmlkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esc0NBS29CO0FBQ3BCLGdEQUF3QjtBQUN4QixrREFBMEI7QUFFMUIsK0NBQStDO0FBdUQvQyxNQUFNLElBQUksR0FBa0IsZUFBSyxDQUFDLFVBQVUsQ0FDMUMsQ0FDRSxFQVllLEVBQ2YsR0FBdUIsRUFDdkIsRUFBRTtRQWRGLEVBQ0UsRUFBRSxFQUNGLEdBQUcsRUFDSCxTQUFTLEdBQUcsRUFBRSxFQUNkLFFBQVEsRUFDUixDQUFDLEVBQ0QsRUFBRSxFQUNGLEVBQUUsRUFDRixFQUFFLEVBQ0YsRUFBRSxFQUNGLEVBQUUsT0FFVyxFQURWLFNBQVMsY0FYZCx5RUFZQyxDQURhO0lBSWQsTUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBRTVCLE1BQU0sY0FBYyxHQUFHLENBQUMsVUFBaUIsRUFBRSxFQUFRLEVBQUUsRUFBRTtRQUNyRCxJQUFJLEVBQUUsRUFBRTtZQUNOLHVCQUNFLFNBQVMsRUFBRSxTQUFTLFVBQVUsZ0JBQWdCLEVBQzlDLFFBQVEsRUFBRSxTQUFTLFVBQVUsZ0JBQWdCLElBQzFDLEVBQUUsRUFDTDtTQUNIO1FBQ0QsT0FBTztZQUNMLFNBQVMsRUFBRSxTQUFTLFVBQVUsZ0JBQWdCO1lBQzlDLFFBQVEsRUFBRSxTQUFTLFVBQVUsZ0JBQWdCO1NBQzlDLENBQUM7SUFDSixDQUFDLENBQUM7SUFFRixNQUFNLEtBUUQsR0FBVyxJQUFJLEVBQUUsRUFSaEIsRUFDSixJQUFJLEVBQUUsSUFBSSxFQUNWLEtBQUssRUFBRSxLQUFLLEVBQ1osS0FBSyxFQUFFLEtBQUssRUFDWixLQUFLLEVBQUUsS0FBSyxFQUNaLEtBQUssRUFBRSxLQUFLLEVBQ1osS0FBSyxFQUFFLEtBQUssT0FFUSxFQURqQixRQUFRLGNBUFAseUNBUUwsQ0FBcUIsQ0FBQztJQUV2QixNQUFNLE1BQU0sbUJBQ1YsUUFBUSxFQUFFLENBQUMsRUFDWCxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFDN0IsS0FBSyxFQUFFLGNBQWMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQ2hDLEtBQUssRUFBRSxjQUFjLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUNoQyxLQUFLLEVBQUUsY0FBYyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFDaEMsS0FBSyxFQUFFLGNBQWMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQ2hDLEtBQUssRUFBRSxjQUFjLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxJQUM3QixRQUFRLENBQ1osQ0FBQztJQUVGLE9BQU8sQ0FDTCw4QkFBQyw0QkFBYyxrQkFDYixFQUFFLEVBQUUsRUFBRSxFQUNOLEdBQUcsRUFBRSxNQUFNLEVBQ1gsU0FBUyxFQUFFLElBQUEsY0FBSSxFQUFDLFNBQVMsRUFBRSxHQUFHLFFBQVEsT0FBTyxDQUFDLEVBQzlDLEdBQUcsRUFBRSxHQUFHLElBQ0osU0FBUyxHQUVaLFFBQVEsQ0FDTSxDQUNsQixDQUFDO0FBQ0osQ0FBQyxDQUNGLENBQUM7QUFFRixJQUFJLGVBQU8sRUFBRTtJQUNYLElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDO0NBQ2xDO0FBRUQsa0JBQWUsSUFJZCxDQUFDIn0=