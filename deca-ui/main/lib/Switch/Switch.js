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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Theme_1 = require("../Theme");
const Utils_1 = require("../Utils");
const clsx_1 = __importDefault(require("clsx"));
const react_1 = __importStar(require("react"));
const Switch_styles_1 = require("./Switch.styles");
const Switch = react_1.default.forwardRef(({ size = 'md', label, className, disabled = false, as, css, color = 'primary', required = false, toggled, initialToggle = false, onChange, name, value, }, ref) => {
    const [selfToggled, setSelfToggled] = (0, react_1.useState)(initialToggle);
    const switchId = (0, Utils_1.uuid)('switch');
    const isControlledComponent = (0, react_1.useMemo)(() => toggled !== undefined, [toggled]);
    const changeHandler = (e) => {
        if (disabled)
            return;
        if (!isControlledComponent) {
            setSelfToggled(e.target.checked);
        }
        onChange && onChange(e);
    };
    const preClass = 'decaSwitch';
    const { dark } = react_1.default.useContext(Theme_1.ThemeContext);
    return (react_1.default.createElement(Switch_styles_1.StyledSwitchWrapper, { className: (0, clsx_1.default)(className, `${preClass}-root`) },
        react_1.default.createElement(Switch_styles_1.StyledSwitchInput, { id: switchId, type: "checkbox", onChange: changeHandler, checked: isControlledComponent ? toggled : selfToggled, ref: ref, isDisabled: disabled, name: name, size: size, className: `${preClass}-input`, disabled: disabled, color: color, required: required, value: value, isDark: dark }),
        react_1.default.createElement(Switch_styles_1.StyledSwitchLabel, { htmlFor: switchId, css: css, size: size, as: as, color: color, isDisabled: disabled, hasLabel: label ? true : false, isDark: dark }, label && label)));
});
if (Utils_1.__DEV__) {
    Switch.displayName = 'DecaUI.Switch';
}
exports.default = Switch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3dpdGNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9Td2l0Y2gvU3dpdGNoLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBRTFDLHNDQU1vQjtBQUNwQixnREFBd0I7QUFDeEIsK0NBQWlEO0FBRWpELG1EQUl5QjtBQWlGekIsTUFBTSxNQUFNLEdBQW9CLGVBQUssQ0FBQyxVQUFVLENBQzlDLENBQ0UsRUFDRSxJQUFJLEdBQUcsSUFBSSxFQUNYLEtBQUssRUFDTCxTQUFTLEVBQ1QsUUFBUSxHQUFHLEtBQUssRUFDaEIsRUFBRSxFQUNGLEdBQUcsRUFDSCxLQUFLLEdBQUcsU0FBUyxFQUNqQixRQUFRLEdBQUcsS0FBSyxFQUNoQixPQUFPLEVBQ1AsYUFBYSxHQUFHLEtBQUssRUFDckIsUUFBUSxFQUNSLElBQUksRUFDSixLQUFLLEdBQ1UsRUFDakIsR0FBdUIsRUFDdkIsRUFBRTtJQUNGLE1BQU0sQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFVLGFBQWEsQ0FBQyxDQUFDO0lBRXZFLE1BQU0sUUFBUSxHQUFHLElBQUEsWUFBSSxFQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRWhDLE1BQU0scUJBQXFCLEdBQUcsSUFBQSxlQUFPLEVBQ25DLEdBQUcsRUFBRSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQzNCLENBQUMsT0FBTyxDQUFDLENBQ1YsQ0FBQztJQUVGLE1BQU0sYUFBYSxHQUFHLENBQUMsQ0FBc0MsRUFBRSxFQUFFO1FBQy9ELElBQUksUUFBUTtZQUFFLE9BQU87UUFDckIsSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzFCLGNBQWMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsUUFBUSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUM7SUFFRixNQUFNLFFBQVEsR0FBRyxZQUFZLENBQUM7SUFFOUIsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLGVBQUssQ0FBQyxVQUFVLENBQUMsb0JBQVksQ0FBQyxDQUFDO0lBRWhELE9BQU8sQ0FDTCw4QkFBQyxtQ0FBbUIsSUFBQyxTQUFTLEVBQUUsSUFBQSxjQUFJLEVBQUMsU0FBUyxFQUFFLEdBQUcsUUFBUSxPQUFPLENBQUM7UUFDakUsOEJBQUMsaUNBQWlCLElBQ2hCLEVBQUUsRUFBRSxRQUFRLEVBQ1osSUFBSSxFQUFDLFVBQVUsRUFDZixRQUFRLEVBQUUsYUFBYSxFQUN2QixPQUFPLEVBQUUscUJBQXFCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUN0RCxHQUFHLEVBQUUsR0FBRyxFQUNSLFVBQVUsRUFBRSxRQUFRLEVBQ3BCLElBQUksRUFBRSxJQUFJLEVBQ1YsSUFBSSxFQUFFLElBQUksRUFDVixTQUFTLEVBQUUsR0FBRyxRQUFRLFFBQVEsRUFDOUIsUUFBUSxFQUFFLFFBQVEsRUFDbEIsS0FBSyxFQUFFLEtBQUssRUFDWixRQUFRLEVBQUUsUUFBUSxFQUNsQixLQUFLLEVBQUUsS0FBSyxFQUNaLE1BQU0sRUFBRSxJQUFJLEdBQ1o7UUFDRiw4QkFBQyxpQ0FBaUIsSUFDaEIsT0FBTyxFQUFFLFFBQVEsRUFDakIsR0FBRyxFQUFFLEdBQUcsRUFDUixJQUFJLEVBQUUsSUFBSSxFQUNWLEVBQUUsRUFBRSxFQUFTLEVBQ2IsS0FBSyxFQUFFLEtBQUssRUFDWixVQUFVLEVBQUUsUUFBUSxFQUNwQixRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDOUIsTUFBTSxFQUFFLElBQUksSUFFWCxLQUFLLElBQUksS0FBSyxDQUNHLENBQ0EsQ0FDdkIsQ0FBQztBQUNKLENBQUMsQ0FDRixDQUFDO0FBRUYsSUFBSSxlQUFPLEVBQUU7SUFDWCxNQUFNLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQztDQUN0QztBQUVELGtCQUFlLE1BQU0sQ0FBQyJ9