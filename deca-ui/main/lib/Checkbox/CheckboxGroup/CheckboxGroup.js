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
const Utils_1 = require("../../Utils");
const clsx_1 = __importDefault(require("clsx"));
const react_1 = __importStar(require("react"));
const CheckboxGroup_styles_1 = require("./CheckboxGroup.styles");
const CheckboxGroup = react_1.default.forwardRef((_a, ref) => {
    var { children, defaultValue, className = '', name, onChange, value, disabled = false, as, css, color, size } = _a, props = __rest(_a, ["children", "defaultValue", "className", "name", "onChange", "value", "disabled", "as", "css", "color", "size"]);
    const presetId = (0, Utils_1.uuid)('checkbox');
    const getName = (0, react_1.useMemo)(() => {
        if (name) {
            return name;
        }
        return presetId;
    }, [name]);
    const preClass = 'decaCheckboxGroup';
    return (react_1.default.createElement(CheckboxGroup_styles_1.StyledCheckboxGroupWrapper, Object.assign({ ref: ref, className: (0, clsx_1.default)(className, `${preClass}-root`), as: as, css: css }, props), react_1.default.Children.map(children, (child) => {
        return react_1.default.cloneElement(child, {
            name: getName,
            onChange,
            initialCheck: defaultValue &&
                defaultValue.includes(child.props.value),
            checked: value && value.includes(child.props.value),
            disabled: disabled ? disabled : child.props.disabled,
            color,
            size,
        });
    })));
});
if (Utils_1.__DEV__) {
    CheckboxGroup.displayName = 'DecaUI.CheckboxGroup';
}
exports.default = CheckboxGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tib3hHcm91cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvQ2hlY2tib3gvQ2hlY2tib3hHcm91cC9DaGVja2JveEdyb3VwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxzQ0FLb0I7QUFDcEIsZ0RBQXdCO0FBQ3hCLCtDQUF1QztBQUN2QyxpRUFBb0U7QUEyRHBFLE1BQU0sYUFBYSxHQUEyQixlQUFLLENBQUMsVUFBVSxDQUM1RCxDQUNFLEVBYXdCLEVBQ3hCLEdBQXVCLEVBQ3ZCLEVBQUU7UUFmRixFQUNFLFFBQVEsRUFDUixZQUFZLEVBQ1osU0FBUyxHQUFHLEVBQUUsRUFDZCxJQUFJLEVBQ0osUUFBUSxFQUNSLEtBQUssRUFDTCxRQUFRLEdBQUcsS0FBSyxFQUNoQixFQUFFLEVBQ0YsR0FBRyxFQUNILEtBQUssRUFDTCxJQUFJLE9BRWtCLEVBRG5CLEtBQUssY0FaVixnSEFhQyxDQURTO0lBSVYsTUFBTSxRQUFRLEdBQUcsSUFBQSxZQUFJLEVBQUMsVUFBVSxDQUFDLENBQUM7SUFFbEMsTUFBTSxPQUFPLEdBQUcsSUFBQSxlQUFPLEVBQUMsR0FBRyxFQUFFO1FBQzNCLElBQUksSUFBSSxFQUFFO1lBQ1IsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFWCxNQUFNLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQztJQUVyQyxPQUFPLENBQ0wsOEJBQUMsaURBQTBCLGtCQUN6QixHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLGNBQUksRUFBQyxTQUFTLEVBQUUsR0FBRyxRQUFRLE9BQU8sQ0FBQyxFQUM5QyxFQUFFLEVBQUUsRUFBRSxFQUNOLEdBQUcsRUFBRSxHQUFHLElBQ0osS0FBSyxHQUVSLGVBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUNqQixRQUFnRSxFQUNoRSxDQUFDLEtBQTJELEVBQUUsRUFBRTtRQUM5RCxPQUFPLGVBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFO1lBQy9CLElBQUksRUFBRSxPQUFPO1lBQ2IsUUFBUTtZQUNSLFlBQVksRUFDVixZQUFZO2dCQUNaLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFlLENBQUM7WUFDcEQsT0FBTyxFQUFFLEtBQUssSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBZSxDQUFDO1lBQzdELFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRO1lBQ3BELEtBQUs7WUFDTCxJQUFJO1NBQ0wsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUNGLENBQzBCLENBQzlCLENBQUM7QUFDSixDQUFDLENBQ0YsQ0FBQztBQUVGLElBQUksZUFBTyxFQUFFO0lBQ1gsYUFBYSxDQUFDLFdBQVcsR0FBRyxzQkFBc0IsQ0FBQztDQUNwRDtBQUVELGtCQUFlLGFBQWEsQ0FBQyJ9