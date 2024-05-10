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
const Theme_1 = require("../Theme");
const Utils_1 = require("../Utils");
const react_1 = __importDefault(require("react"));
const Text_styles_1 = __importDefault(require("./Text.styles"));
const Text = react_1.default.forwardRef((_a, ref) => {
    var { as, css, children, weight, size, lineHeight, center, mono = false } = _a, textProps = __rest(_a, ["as", "css", "children", "weight", "size", "lineHeight", "center", "mono"]);
    const preClass = 'decaText';
    const { dark } = react_1.default.useContext(Theme_1.ThemeContext);
    return (react_1.default.createElement(Text_styles_1.default, Object.assign({ as: as, css: css, className: `${preClass}-root`, ref: ref, weight: weight, center: center, size: size, isDark: dark, lineHeight: lineHeight, mono: mono }, textProps), children));
});
if (Utils_1.__DEV__) {
    Text.displayName = 'DecaUI.Text';
}
exports.default = Text;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvVGV4dC9UZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBRTFDLHNDQUtvQjtBQUNwQixrREFBMEI7QUFFMUIsZ0VBQXVDO0FBMEZ2QyxNQUFNLElBQUksR0FBa0IsZUFBSyxDQUFDLFVBQVUsQ0FDMUMsQ0FDRSxFQVVlLEVBQ2YsR0FBdUIsRUFDdkIsRUFBRTtRQVpGLEVBQ0UsRUFBRSxFQUNGLEdBQUcsRUFDSCxRQUFRLEVBQ1IsTUFBTSxFQUNOLElBQUksRUFDSixVQUFVLEVBQ1YsTUFBTSxFQUNOLElBQUksR0FBRyxLQUFLLE9BRUMsRUFEVixTQUFTLGNBVGQsMkVBVUMsQ0FEYTtJQUlkLE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUU1QixNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsZUFBSyxDQUFDLFVBQVUsQ0FBQyxvQkFBWSxDQUFDLENBQUM7SUFFaEQsT0FBTyxDQUNMLDhCQUFDLHFCQUFVLGtCQUNULEVBQUUsRUFBRSxFQUFFLEVBQ04sR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsR0FBRyxRQUFRLE9BQU8sRUFDN0IsR0FBRyxFQUFFLEdBQUcsRUFDUixNQUFNLEVBQUUsTUFBTSxFQUNkLE1BQU0sRUFBRSxNQUFNLEVBQ2QsSUFBSSxFQUFFLElBQUksRUFDVixNQUFNLEVBQUUsSUFBSSxFQUNaLFVBQVUsRUFBRSxVQUFVLEVBQ3RCLElBQUksRUFBRSxJQUFJLElBQ04sU0FBUyxHQUVaLFFBQVEsQ0FDRSxDQUNkLENBQUM7QUFDSixDQUFDLENBQ0YsQ0FBQztBQUVGLElBQUksZUFBTyxFQUFFO0lBQ1gsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUM7Q0FDbEM7QUFFRCxrQkFBZSxJQUFJLENBQUMifQ==