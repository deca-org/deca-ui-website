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
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("../Utils");
const react_1 = __importStar(require("react"));
const Popover_1 = require("./Popover");
const PopoverTrigger = ({ children }) => {
    const context = (0, react_1.useContext)(Popover_1.PopoverContext);
    // enforce single child
    const child = react_1.default.Children.only(children);
    if (context.action === 'click') {
        const extendedOnClick = () => {
            context.setOpen && context.setOpen((prevState) => !prevState);
            child.props.onClick && child.props.onClick();
        };
        return react_1.default.cloneElement(child, Object.assign(Object.assign({}, child.props), { onClick: extendedOnClick, ref: (0, Utils_1.mergeRefs)(context.reference, child.ref, context.triggerRef) }));
    }
    else {
        const extendedOnMouseEnter = () => {
            context.setOpen && context.setOpen(true);
            child.props.onMouseEnter && child.props.onMouseEnter();
        };
        const extendedOnMouseLeave = () => {
            context.setOpen && context.setOpen(false);
            child.props.onMouseLeave && child.props.onMouseLeave();
        };
        return react_1.default.cloneElement(child, Object.assign(Object.assign({}, child.props), { onMouseEnter: extendedOnMouseEnter, onMouseLeave: extendedOnMouseLeave, ref: (0, Utils_1.mergeRefs)(context.reference, child.ref, context.triggerRef) }));
    }
};
if (Utils_1.__DEV__) {
    PopoverTrigger.displayName = 'DecaUI.PopoverTrigger';
}
exports.default = PopoverTrigger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9wb3ZlclRyaWdnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL1BvcG92ZXIvUG9wb3ZlclRyaWdnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBZ0Q7QUFDaEQsK0NBQTBDO0FBRTFDLHVDQUE0RDtBQWE1RCxNQUFNLGNBQWMsR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFTLEVBQUUsRUFBRTtJQUM3QyxNQUFNLE9BQU8sR0FBRyxJQUFBLGtCQUFVLEVBQUMsd0JBQWMsQ0FBb0IsQ0FBQztJQUU5RCx1QkFBdUI7SUFDdkIsTUFBTSxLQUFLLEdBQVEsZUFBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFakQsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLE9BQU8sRUFBRTtRQUM5QixNQUFNLGVBQWUsR0FBRyxHQUFHLEVBQUU7WUFDM0IsT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzlELEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDL0MsQ0FBQyxDQUFDO1FBRUYsT0FBTyxlQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssa0NBQzFCLEtBQUssQ0FBQyxLQUFLLEtBQ2QsT0FBTyxFQUFFLGVBQWUsRUFDeEIsR0FBRyxFQUFFLElBQUEsaUJBQVMsRUFBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUNoRSxDQUFDO0tBQ0o7U0FBTTtRQUNMLE1BQU0sb0JBQW9CLEdBQUcsR0FBRyxFQUFFO1lBQ2hDLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3pELENBQUMsQ0FBQztRQUVGLE1BQU0sb0JBQW9CLEdBQUcsR0FBRyxFQUFFO1lBQ2hDLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQyxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3pELENBQUMsQ0FBQztRQUVGLE9BQU8sZUFBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLGtDQUMxQixLQUFLLENBQUMsS0FBSyxLQUNkLFlBQVksRUFBRSxvQkFBb0IsRUFDbEMsWUFBWSxFQUFFLG9CQUFvQixFQUNsQyxHQUFHLEVBQUUsSUFBQSxpQkFBUyxFQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLElBQ2hFLENBQUM7S0FDSjtBQUNILENBQUMsQ0FBQztBQUVGLElBQUksZUFBTyxFQUFFO0lBQ1gsY0FBYyxDQUFDLFdBQVcsR0FBRyx1QkFBdUIsQ0FBQztDQUN0RDtBQUVELGtCQUFlLGNBQWMsQ0FBQyJ9