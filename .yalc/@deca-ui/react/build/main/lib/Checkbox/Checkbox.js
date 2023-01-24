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
const Checkbox_styles_1 = require("./Checkbox.styles");
const Check = () => (react_1.default.createElement("svg", { viewBox: "0 0 512 512", "aria-hidden": "true", focusable: "false", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg" },
    react_1.default.createElement("path", { fill: "currentColor", d: "m173.898 439.404-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" })));
const Checkbox = react_1.default.forwardRef((_a, ref) => {
    var { size = 'md', label, className, name, disabled = false, as, css, color = 'primary', required = false, checked, initialCheck = false, onChange, value } = _a, props = __rest(_a, ["size", "label", "className", "name", "disabled", "as", "css", "color", "required", "checked", "initialCheck", "onChange", "value"]);
    const [selfChecked, setSelfChecked] = (0, react_1.useState)(initialCheck);
    const checkboxId = (0, react_1.useMemo)(() => {
        if (props.id) {
            return props.id;
        }
        else {
            return (0, Utils_1.uuid)();
        }
    }, [props.id]);
    const isControlledComponent = (0, react_1.useMemo)(() => checked !== undefined, [checked]);
    const changeHandler = (e) => {
        if (disabled)
            return;
        if (!isControlledComponent) {
            setSelfChecked(e.target.checked);
        }
        onChange && onChange(e);
    };
    const preClass = 'decaCheckbox';
    const { dark } = react_1.default.useContext(Theme_1.ThemeContext);
    return (react_1.default.createElement(Checkbox_styles_1.StyledCheckboxWrapper, { className: (0, clsx_1.default)(className, `${preClass}-root`) },
        react_1.default.createElement(Checkbox_styles_1.StyledCheckbox, Object.assign({ id: checkboxId, type: "checkbox", onChange: changeHandler, checked: isControlledComponent ? checked : selfChecked, ref: ref, required: required, className: `${preClass}-input`, name: name, size: size, color: color, disabled: disabled, isDisabled: disabled, value: value, isDark: dark }, props)),
        react_1.default.createElement(Checkbox_styles_1.StyledCheckboxLabel, { htmlFor: checkboxId, css: css, size: size, as: as, color: color, isDisabled: disabled, hasLabel: label ? true : false, isDark: dark },
            react_1.default.createElement(Check, null),
            label && label)));
});
if (Utils_1.__DEV__) {
    Checkbox.displayName = 'DecaUI.Checkbox';
}
exports.default = Checkbox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL0NoZWNrYm94L0NoZWNrYm94LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFFMUMsc0NBT29CO0FBQ3BCLGdEQUF3QjtBQUN4QiwrQ0FBaUQ7QUFHakQsdURBSTJCO0FBMkUzQixNQUFNLEtBQUssR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUNsQix1Q0FDRSxPQUFPLEVBQUMsYUFBYSxpQkFDVCxNQUFNLEVBQ2xCLFNBQVMsRUFBQyxPQUFPLEVBQ2pCLElBQUksRUFBQyxjQUFjLEVBQ25CLEtBQUssRUFBQyw0QkFBNEI7SUFFbEMsd0NBQ0UsSUFBSSxFQUFDLGNBQWMsRUFDbkIsQ0FBQyxFQUFDLG1SQUFtUixHQUMvUSxDQUNKLENBQ1AsQ0FBQztBQVNGLE1BQU0sUUFBUSxHQUFzQixlQUFLLENBQUMsVUFBVSxDQUNsRCxDQUNFLEVBZW1CLEVBQ25CLEdBQXVCLEVBQ3ZCLEVBQUU7UUFqQkYsRUFDRSxJQUFJLEdBQUcsSUFBSSxFQUNYLEtBQUssRUFDTCxTQUFTLEVBQ1QsSUFBSSxFQUNKLFFBQVEsR0FBRyxLQUFLLEVBQ2hCLEVBQUUsRUFDRixHQUFHLEVBQ0gsS0FBSyxHQUFHLFNBQVMsRUFDakIsUUFBUSxHQUFHLEtBQUssRUFDaEIsT0FBTyxFQUNQLFlBQVksR0FBRyxLQUFLLEVBQ3BCLFFBQVEsRUFDUixLQUFLLE9BRVksRUFEZCxLQUFLLGNBZFYsb0lBZUMsQ0FEUztJQUlWLE1BQU0sQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFVLFlBQVksQ0FBQyxDQUFDO0lBRXRFLE1BQU0sVUFBVSxHQUFHLElBQUEsZUFBTyxFQUFDLEdBQUcsRUFBRTtRQUM5QixJQUFJLEtBQUssQ0FBQyxFQUFFLEVBQUU7WUFDWixPQUFPLEtBQUssQ0FBQyxFQUFFLENBQUM7U0FDakI7YUFBTTtZQUNMLE9BQU8sSUFBQSxZQUFJLEdBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFZixNQUFNLHFCQUFxQixHQUFHLElBQUEsZUFBTyxFQUNuQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUMzQixDQUFDLE9BQU8sQ0FBQyxDQUNWLENBQUM7SUFFRixNQUFNLGFBQWEsR0FBRyxDQUFDLENBQXNDLEVBQUUsRUFBRTtRQUMvRCxJQUFJLFFBQVE7WUFBRSxPQUFPO1FBQ3JCLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUMxQixjQUFjLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsQztRQUNELFFBQVEsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsQ0FBQyxDQUFDO0lBRUYsTUFBTSxRQUFRLEdBQUcsY0FBYyxDQUFDO0lBRWhDLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxlQUFLLENBQUMsVUFBVSxDQUFDLG9CQUFZLENBQUMsQ0FBQztJQUVoRCxPQUFPLENBQ0wsOEJBQUMsdUNBQXFCLElBQUMsU0FBUyxFQUFFLElBQUEsY0FBSSxFQUFDLFNBQVMsRUFBRSxHQUFHLFFBQVEsT0FBTyxDQUFDO1FBQ25FLDhCQUFDLGdDQUFjLGtCQUNiLEVBQUUsRUFBRSxVQUFVLEVBQ2QsSUFBSSxFQUFDLFVBQVUsRUFDZixRQUFRLEVBQUUsYUFBYSxFQUN2QixPQUFPLEVBQUUscUJBQXFCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUN0RCxHQUFHLEVBQUUsR0FBRyxFQUNSLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLFNBQVMsRUFBRSxHQUFHLFFBQVEsUUFBUSxFQUM5QixJQUFJLEVBQUUsSUFBSSxFQUNWLElBQUksRUFBRSxJQUFJLEVBQ1YsS0FBSyxFQUFFLEtBQUssRUFDWixRQUFRLEVBQUUsUUFBUSxFQUNsQixVQUFVLEVBQUUsUUFBUSxFQUNwQixLQUFLLEVBQUUsS0FBSyxFQUNaLE1BQU0sRUFBRSxJQUFJLElBQ1IsS0FBSyxFQUNUO1FBQ0YsOEJBQUMscUNBQW1CLElBQ2xCLE9BQU8sRUFBRSxVQUFVLEVBQ25CLEdBQUcsRUFBRSxHQUFHLEVBQ1IsSUFBSSxFQUFFLElBQUksRUFDVixFQUFFLEVBQUUsRUFBUyxFQUNiLEtBQUssRUFBRSxLQUFLLEVBQ1osVUFBVSxFQUFFLFFBQVEsRUFDcEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQzlCLE1BQU0sRUFBRSxJQUFJO1lBRVosOEJBQUMsS0FBSyxPQUFHO1lBQ1IsS0FBSyxJQUFJLEtBQUssQ0FDSyxDQUNBLENBQ3pCLENBQUM7QUFDSixDQUFDLENBQ0YsQ0FBQztBQUVGLElBQUksZUFBTyxFQUFFO0lBQ1gsUUFBUSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQztDQUMxQztBQUVELGtCQUFlLFFBSWQsQ0FBQyJ9