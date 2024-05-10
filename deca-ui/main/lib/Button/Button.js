"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.Button = void 0;
const Theme_1 = require("../Theme");
const Utils_1 = require("../Utils");
const clsx_1 = __importDefault(require("clsx"));
const react_1 = __importStar(require("react"));
const Button_styles_1 = __importDefault(require("./Button.styles"));
const ButtonIcon_1 = __importDefault(require("./ButtonIcon"));
exports.Button = react_1.default.forwardRef((_a, ref) => {
    var { role = 'button', as, css, icon, iconRight, iconLeftCss, iconRightCss, onClick, color = 'primary', disabled = false, variant = 'solid', size = 'md', maxWidth = false, className = '', children, pill = false } = _a, btnProps = __rest(_a, ["role", "as", "css", "icon", "iconRight", "iconLeftCss", "iconRightCss", "onClick", "color", "disabled", "variant", "size", "maxWidth", "className", "children", "pill"]);
    const hasText = (0, react_1.useMemo)(() => react_1.default.Children.count(children) !== 0, [children]);
    // ensures only icon or only iconRight is present
    const singleIcon = (0, react_1.useMemo)(() => (!hasText && !iconRight && icon) || (!hasText && !icon && iconRight)
        ? true
        : false, [children, iconRight, icon]);
    if (disabled) {
        onClick = undefined;
    }
    const preClass = 'decaButton';
    const { dark } = react_1.default.useContext(Theme_1.ThemeContext);
    return (react_1.default.createElement(Button_styles_1.default, Object.assign({ role: role, as: as, css: css, onClick: onClick, color: color, disabled: disabled, isDisabled: disabled, variant: variant, size: size, maxWidth: maxWidth, className: (0, clsx_1.default)(className, `${preClass}-root`), ref: ref, singleIcon: singleIcon, pill: pill, isDark: dark }, btnProps),
        (icon && hasText) || (icon && iconRight) ? (react_1.default.createElement(ButtonIcon_1.default, { size: size, isSingle: false, side: "left", css: iconLeftCss, className: `${preClass}-leftIcon` }, icon)) : (icon && (react_1.default.createElement(ButtonIcon_1.default, { size: size, isSingle: true, side: "left", css: iconLeftCss, className: `${preClass}-leftIcon` }, icon))),
        hasText && children,
        (iconRight && hasText) || (icon && iconRight) ? (react_1.default.createElement(ButtonIcon_1.default, { size: size, isSingle: false, side: "right", css: iconRightCss, className: `${preClass}-rightIcon` }, iconRight)) : (iconRight && (react_1.default.createElement(ButtonIcon_1.default, { size: size, isSingle: true, side: "right", css: iconRightCss, className: `${preClass}-rightIcon` }, iconRight)))));
});
if (Utils_1.__DEV__) {
    exports.Button.displayName = 'DecaUI.Button';
}
exports.default = exports.Button;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9CdXR0b24vQnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBRTFDLHNDQUlvQjtBQUNwQixnREFBd0I7QUFDeEIsK0NBQXVDO0FBRXZDLG9FQUEyQztBQUMzQyw4REFBc0M7QUFpRnpCLFFBQUEsTUFBTSxHQUFvQixlQUFLLENBQUMsVUFBVSxDQUNyRCxDQUNFLEVBa0JpQixFQUNqQixHQUF1QixFQUN2QixFQUFFO1FBcEJGLEVBQ0UsSUFBSSxHQUFHLFFBQVEsRUFDZixFQUFFLEVBQ0YsR0FBRyxFQUNILElBQUksRUFDSixTQUFTLEVBQ1QsV0FBVyxFQUNYLFlBQVksRUFDWixPQUFPLEVBQ1AsS0FBSyxHQUFHLFNBQVMsRUFDakIsUUFBUSxHQUFHLEtBQUssRUFDaEIsT0FBTyxHQUFHLE9BQU8sRUFDakIsSUFBSSxHQUFHLElBQUksRUFDWCxRQUFRLEdBQUcsS0FBSyxFQUNoQixTQUFTLEdBQUcsRUFBRSxFQUNkLFFBQVEsRUFDUixJQUFJLEdBQUcsS0FBSyxPQUVHLEVBRFosUUFBUSxjQWpCYix5S0FrQkMsQ0FEWTtJQUliLE1BQU0sT0FBTyxHQUFHLElBQUEsZUFBTyxFQUNyQixHQUFHLEVBQUUsQ0FBQyxlQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQzFDLENBQUMsUUFBUSxDQUFDLENBQ1gsQ0FBQztJQUVGLGlEQUFpRDtJQUNqRCxNQUFNLFVBQVUsR0FBRyxJQUFBLGVBQU8sRUFDeEIsR0FBRyxFQUFFLENBQ0gsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQztRQUNsRSxD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