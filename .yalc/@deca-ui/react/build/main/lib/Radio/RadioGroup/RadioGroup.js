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
const RadioGroup_styles_1 = require("./RadioGroup.styles");
const RadioGroup = react_1.default.forwardRef((_a, ref) => {
    var { children, defaultValue, className = '', name, onChange, value, disabled = false, color, size, as, css } = _a, props = __rest(_a, ["children", "defaultValue", "className", "name", "onChange", "value", "disabled", "color", "size", "as", "css"]);
    const presetId = (0, Utils_1.uuid)('radio');
    const getName = (0, react_1.useMemo)(() => {
        if (name) {
            return name;
        }
        return presetId;
    }, [name]);
    const preClass = 'decaRadioGroup';
    return (react_1.default.createElement(RadioGroup_styles_1.StyledRadioGroupWrapper, Object.assign({ ref: ref, className: (0, clsx_1.default)(className, `${preClass}-root`), as: as, css: css }, props), react_1.default.Children.map(children, (child) => {
        return react_1.default.cloneElement(child, Object.assign({ name: getName, onChange, initialSelect: child.props.value === defaultValue, selected: value ? child.props.value === value : undefined, disabled: disabled ? disabled : child.props.disabled, color,
            size }, child.props));
    })));
});
if (Utils_1.__DEV__) {
    RadioGroup.displayName = 'DecaUI.RadioGroup';
}
exports.default = RadioGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFkaW9Hcm91cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvUmFkaW8vUmFkaW9Hcm91cC9SYWRpb0dyb3VwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxzQ0FLb0I7QUFDcEIsZ0RBQXdCO0FBQ3hCLCtDQUF1QztBQUV2QywyREFBOEQ7QUEyRDlELE1BQU0sVUFBVSxHQUF3QixlQUFLLENBQUMsVUFBVSxDQUN0RCxDQUNFLEVBYXFCLEVBQ3JCLEdBQXVCLEVBQ3ZCLEVBQUU7UUFmRixFQUNFLFFBQVEsRUFDUixZQUFZLEVBQ1osU0FBUyxHQUFHLEVBQUUsRUFDZCxJQUFJLEVBQ0osUUFBUSxFQUNSLEtBQUssRUFDTCxRQUFRLEdBQUcsS0FBSyxFQUNoQixLQUFLLEVBQ0wsSUFBSSxFQUNKLEVBQUUsRUFDRixHQUFHLE9BRWdCLEVBRGhCLEtBQUssY0FaVixnSEFhQyxDQURTO0lBSVYsTUFBTSxRQUFRLEdBQUcsSUFBQSxZQUFJLEVBQUMsT0FBTyxDQUFDLENBQUM7SUFFL0IsTUFBTSxPQUFPLEdBQUcsSUFBQSxlQUFPLEVBQUMsR0FBRyxFQUFFO1FBQzNCLElBQUksSUFBSSxFQUFFO1lBQ1IsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFWCxNQUFNLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztJQUVsQyxPQUFPLENBQ0wsOEJBQUMsMkNBQXVCLGtCQUN0QixHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLGNBQUksRUFBQyxTQUFTLEVBQUUsR0FBRyxRQUFRLE9BQU8sQ0FBQyxFQUM5QyxFQUFFLEVBQUUsRUFBRSxFQUNOLEdBQUcsRUFBRSxHQUFHLElBQ0osS0FBSyxHQUVSLGVBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUNqQixRQUE2RCxFQUM3RCxDQUFDLEtBQXdELEVBQUUsRUFBRTtRQUMzRCxPQUFPLGVBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxrQkFDN0IsSUFBSSxFQUFFLE9BQU8sRUFDYixRQUFRLEVBQ1IsYUFBYSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLFlBQVksRUFDakQsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQ3pELFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQ3BELEtBQUs7WUFDTCxJQUFJLElBQ0QsS0FBSyxDQUFDLEtBQUssRUFDZCxDQUFDO0lBQ0wsQ0FBQyxDQUNGLENBQ3VCLENBQzNCLENBQUM7QUFDSixDQUFDLENBQ0YsQ0FBQztBQUVGLElBQUksZUFBTyxFQUFFO0lBQ1gsVUFBVSxDQUFDLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQztDQUM5QztBQUVELGtCQUFlLFVBQVUsQ0FBQyJ9