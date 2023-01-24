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
const Radio_styles_1 = require("./Radio.styles");
const Radio = react_1.default.forwardRef((_a, ref) => {
    var { size = 'md', label, className, disabled = false, as, css, color = 'primary', value, name, onChange, onFocus, initialSelect, selected } = _a, props = __rest(_a, ["size", "label", "className", "disabled", "as", "css", "color", "value", "name", "onChange", "onFocus", "initialSelect", "selected"]);
    const radioId = (0, react_1.useMemo)(() => {
        if (props.id) {
            return props.id;
        }
        else {
            return (0, Utils_1.uuid)();
        }
    }, [props.id]);
    const preClass = 'decaRadio';
    const changeHandler = (e) => {
        if (disabled)
            return;
        onChange && onChange(e);
    };
    const focusHandler = (e) => {
        if (disabled)
            return;
        onFocus && onFocus(e);
    };
    const { dark } = react_1.default.useContext(Theme_1.ThemeContext);
    return (react_1.default.createElement(Radio_styles_1.StyledRadioWrapper, { className: (0, clsx_1.default)(className, `${preClass}-root`) },
        react_1.default.createElement(Radio_styles_1.StyledRadio, Object.assign({ id: radioId, type: "radio", ref: ref, className: `${preClass}-input`, size: size, color: color, disabled: disabled, isDisabled: disabled, value: value, name: name, onChange: changeHandler, onFocus: focusHandler, isDark: dark }, (initialSelect && { defaultChecked: initialSelect }), (!initialSelect && { checked: selected }), props)),
        react_1.default.createElement(Radio_styles_1.StyledRadioLabel, { htmlFor: radioId, css: css, size: size, as: as, color: color, isDisabled: disabled, hasLabel: label ? true : false, isDark: dark },
            react_1.default.createElement("div", { className: `${preClass}-circle` }),
            label && label)));
});
if (Utils_1.__DEV__) {
    Radio.displayName = 'DecaUI.Radio';
}
exports.default = Radio;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFkaW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL1JhZGlvL1JhZGlvLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFFMUMsc0NBT29CO0FBQ3BCLGdEQUF3QjtBQUN4QiwrQ0FBdUM7QUFFdkMsaURBSXdCO0FBK0V4QixNQUFNLEtBQUssR0FBbUIsZUFBSyxDQUFDLFVBQVUsQ0FDNUMsQ0FDRSxFQWVnQixFQUNoQixHQUF1QixFQUN2QixFQUFFO1FBakJGLEVBQ0UsSUFBSSxHQUFHLElBQUksRUFDWCxLQUFLLEVBQ0wsU0FBUyxFQUNULFFBQVEsR0FBRyxLQUFLLEVBQ2hCLEVBQUUsRUFDRixHQUFHLEVBQ0gsS0FBSyxHQUFHLFNBQVMsRUFDakIsS0FBSyxFQUNMLElBQUksRUFDSixRQUFRLEVBQ1IsT0FBTyxFQUNQLGFBQWEsRUFDYixRQUFRLE9BRU0sRUFEWCxLQUFLLGNBZFYscUlBZUMsQ0FEUztJQUlWLE1BQU0sT0FBTyxHQUFHLElBQUEsZUFBTyxFQUFDLEdBQUcsRUFBRTtRQUMzQixJQUFJLEtBQUssQ0FBQyxFQUFFLEVBQUU7WUFDWixPQUFPLEtBQUssQ0FBQyxFQUFFLENBQUM7U0FDakI7YUFBTTtZQUNMLE9BQU8sSUFBQSxZQUFJLEdBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFZixNQUFNLFFBQVEsR0FBRyxXQUFXLENBQUM7SUFFN0IsTUFBTSxhQUFhLEdBQUcsQ0FBQyxDQUFzQyxFQUFFLEVBQUU7UUFDL0QsSUFBSSxRQUFRO1lBQUUsT0FBTztRQUNyQixRQUFRLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQztJQUVGLE1BQU0sWUFBWSxHQUFHLENBQUMsQ0FBc0MsRUFBRSxFQUFFO1FBQzlELElBQUksUUFBUTtZQUFFLE9BQU87UUFDckIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDLENBQUM7SUFFRixNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsZUFBSyxDQUFDLFVBQVUsQ0FBQyxvQkFBWSxDQUFDLENBQUM7SUFFaEQsT0FBTyxDQUNMLDhCQUFDLGlDQUFrQixJQUFDLFNBQVMsRUFBRSxJQUFBLGNBQUksRUFBQyxTQUFTLEVBQUUsR0FBRyxRQUFRLE9BQU8sQ0FBQztRQUNoRSw4QkFBQywwQkFBVyxrQkFDVixFQUFFLEVBQUUsT0FBTyxFQUNYLElBQUksRUFBQyxPQUFPLEVBQ1osR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsR0FBRyxRQUFRLFFBQVEsRUFDOUIsSUFBSSxFQUFFLElBQUksRUFDVixLQUFLLEVBQUUsS0FBSyxFQUNaLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLFVBQVUsRUFBRSxRQUFRLEVBQ3BCLEtBQUssRUFBRSxLQUFLLEVBQ1osSUFBSSxFQUFFLElBQUksRUFDVixRQUFRLEVBQUUsYUFBYSxFQUN2QixPQUFPLEVBQUUsWUFBWSxFQUNyQixNQUFNLEVBQUUsSUFBSSxJQUNSLENBQUMsYUFBYSxJQUFJLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxDQUFDLEVBQ3BELENBQUMsQ0FBQyxhQUFhLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFDekMsS0FBSyxFQUNUO1FBQ0YsOEJBQUMsK0JBQWdCLElBQ2YsT0FBTyxFQUFFLE9BQU8sRUFDaEIsR0FBRyxFQUFFLEdBQUcsRUFDUixJQUFJLEVBQUUsSUFBSSxFQUNWLEVBQUUsRUFBRSxFQUFTLEVBQ2IsS0FBSyxFQUFFLEtBQUssRUFDWixVQUFVLEVBQUUsUUFBUSxFQUNwQixRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDOUIsTUFBTSxFQUFFLElBQUk7WUFFWix1Q0FBSyxTQUFTLEVBQUUsR0FBRyxRQUFRLFNBQVMsR0FBSTtZQUN2QyxLQUFLLElBQUksS0FBSyxDQUNFLENBQ0EsQ0FDdEIsQ0FBQztBQUNKLENBQUMsQ0FDRixDQUFDO0FBRUYsSUFBSSxlQUFPLEVBQUU7SUFDWCxLQUFLLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQztDQUNwQztBQUVELGtCQUFlLEtBTWQsQ0FBQyJ9