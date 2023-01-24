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
const Theme_1 = require("../Theme");
const Utils_1 = require("../Utils");
const clsx_1 = __importDefault(require("clsx"));
const react_1 = __importStar(require("react"));
const Input_styles_1 = require("./Input.styles");
const Input = react_1.default.forwardRef((_a, ref) => {
    var { label, className = '', disabled = false, size = 'md', variant = 'solid', as, css, focusColor = 'primary', maxWidth = false, placeholder, required = false, helperText = '', value, initialValue = '', onChange, onFocus, onBlur, pill = false } = _a, props = __rest(_a, ["label", "className", "disabled", "size", "variant", "as", "css", "focusColor", "maxWidth", "placeholder", "required", "helperText", "value", "initialValue", "onChange", "onFocus", "onBlur", "pill"]);
    const [selfValue, setSelfValue] = (0, react_1.useState)(initialValue);
    const [focused, setFocused] = (0, react_1.useState)(false);
    const isControlledComponent = (0, react_1.useMemo)(() => value !== undefined, [value]);
    const changeHandler = (e) => {
        if (disabled)
            return;
        if (!isControlledComponent) {
            setSelfValue(e.target.value);
        }
        onChange && onChange(e);
    };
    const focusHandler = (e) => {
        if (disabled)
            return;
        setFocused(true);
        onFocus && onFocus(e);
    };
    const blurHandler = (e) => {
        if (disabled)
            return;
        setFocused(false);
        onBlur && onBlur(e);
    };
    const getState = (0, react_1.useMemo)(() => {
        return focused
            ? 'focused'
            : disabled
                ? 'isDisabled'
                : selfValue || value
                    ? 'value'
                    : 'default';
    }, [focused, disabled, selfValue, value]);
    const inputId = (0, Utils_1.uuid)('input');
    const preClass = 'decaInput';
    const { dark } = react_1.default.useContext(Theme_1.ThemeContext);
    return (react_1.default.createElement(Input_styles_1.StyledInputMainContainer, { className: (0, clsx_1.default)(className, `${preClass}-root`), css: css, size: size, maxWidth: maxWidth },
        label && (react_1.default.createElement(Input_styles_1.StyledInputLabel, { size: size, state: getState, className: `${preClass}-label`, variant: variant, focusColor: focusColor, htmlFor: inputId, pill: pill, isDark: dark }, label)),
        react_1.default.createElement(Input_styles_1.StyledInputContainer, { size: size, state: getState, className: `${preClass}-wrap`, variant: variant, focusColor: focusColor, maxWidth: maxWidth, pill: pill, isDark: dark },
            react_1.default.createElement(Input_styles_1.StyledInput, Object.assign({ onFocus: focusHandler, onBlur: blurHandler, onChange: changeHandler, className: `${preClass}-input`, ref: ref, variant: variant, state: getState, as: as, size: size, value: isControlledComponent ? value : selfValue, required: required, disabled: disabled, placeholder: placeholder, id: inputId, pill: pill, isDark: dark }, props))),
        helperText && (react_1.default.createElement(Input_styles_1.StyledInputHelperText, { size: size, state: getState, className: `${preClass}-helperText`, pill: pill, isDark: dark }, helperText))));
});
if (Utils_1.__DEV__) {
    Input.displayName = 'DecaUI.Input';
}
exports.default = Input;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL0lucHV0L0lucHV0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFFMUMsc0NBTW9CO0FBQ3BCLGdEQUF3QjtBQUN4QiwrQ0FBaUQ7QUFFakQsaURBTXdCO0FBMEd4QixNQUFNLEtBQUssR0FBbUIsZUFBSyxDQUFDLFVBQVUsQ0FDNUMsQ0FDRSxFQW9CZ0IsRUFDaEIsR0FBdUIsRUFDdkIsRUFBRTtRQXRCRixFQUNFLEtBQUssRUFDTCxTQUFTLEdBQUcsRUFBRSxFQUNkLFFBQVEsR0FBRyxLQUFLLEVBQ2hCLElBQUksR0FBRyxJQUFJLEVBQ1gsT0FBTyxHQUFHLE9BQU8sRUFDakIsRUFBRSxFQUNGLEdBQUcsRUFDSCxVQUFVLEdBQUcsU0FBUyxFQUN0QixRQUFRLEdBQUcsS0FBSyxFQUNoQixXQUFXLEVBQ1gsUUFBUSxHQUFHLEtBQUssRUFDaEIsVUFBVSxHQUFHLEVBQUUsRUFDZixLQUFLLEVBQ0wsWUFBWSxHQUFHLEVBQUUsRUFDakIsUUFBUSxFQUNSLE9BQU8sRUFDUCxNQUFNLEVBQ04sSUFBSSxHQUFHLEtBQUssT0FFRSxFQURYLEtBQUssY0FuQlYsdU1Bb0JDLENBRFM7SUFJVixNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxHQUFHLElBQUEsZ0JBQVEsRUFBUyxZQUFZLENBQUMsQ0FBQztJQUNqRSxNQUFNLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxHQUFHLElBQUEsZ0JBQVEsRUFBVSxLQUFLLENBQUMsQ0FBQztJQUV2RCxNQUFNLHFCQUFxQixHQUFHLElBQUEsZUFBTyxFQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRTFFLE1BQU0sYUFBYSxHQUFHLENBQUMsQ0FBaUMs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