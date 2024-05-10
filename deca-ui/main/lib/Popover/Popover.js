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
exports.PopoverContext = void 0;
const react_dom_1 = require("@floating-ui/react-dom");
const Utils_1 = require("../Utils");
const react_1 = __importStar(require("react"));
exports.PopoverContext = react_1.default.createContext(null);
const Popover = react_1.default.forwardRef(({ children, open, setOpen, placement = 'bottom', action = 'click', offset = 10, }, ref) => {
    const floatingProps = (0, react_dom_1.useFloating)({
        placement: placement,
        whileElementsMounted: react_dom_1.autoUpdate,
        strategy: 'absolute',
        middleware: [(0, react_dom_1.offset)(offset), (0, react_dom_1.flip)(), (0, react_dom_1.shift)()],
    });
    const [selfOpen, setSelfOpen] = (0, react_1.useState)(false);
    const [scrollPos, setScrollPos] = (0, react_1.useState)(0);
    const isControlledComponent = (0, react_1.useMemo)(() => open !== undefined, [open]);
    const isScrolling = () => {
        if (window.scrollY !== scrollPos) {
            isControlledComponent ? setOpen && setOpen(false) : setSelfOpen(false);
            setScrollPos(window.scrollY);
        }
    };
    const handleEsc = (e) => {
        if (e.key === 'Escape') {
            isControlledComponent ? setOpen && setOpen(false) : setSelfOpen(false);
        }
    };
    (0, react_1.useEffect)(() => {
        window.addEventListener('scroll', isScrolling);
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('scroll', isScrolling);
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);
    const [trigger, content] = react_1.default.Children.toArray(children);
    const triggerRef = react_1.default.useRef();
    return (react_1.default.createElement(exports.PopoverContext.Provider, { value: Object.assign(Object.assign({}, floatingProps), { triggerRef: triggerRef, open: isControlledComponent ? open : selfOpen, setOpen: isControlledComponent ? setOpen : setSelfOpen, mainComponentRef: ref, action }) },
        trigger,
        content));
});
if (Utils_1.__DEV__) {
    Popover.displayName = 'DecaUI.Popover';
}
exports.default = Popover;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9wb3Zlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvUG9wb3Zlci9Qb3BvdmVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQVFnQztBQUNoQyxzQ0FLb0I7QUFDcEIsK0NBTWU7QUE4Q0YsUUFBQSxjQUFjLEdBQUcsZUFBSyxDQUFDLGFBQWEsQ0FBeUIsSUFBSSxDQUFDLENBQUM7QUFTaEYsTUFBTSxPQUFPLEdBQXFCLGVBQUssQ0FBQyxVQUFVLENBQ2hELENBQ0UsRUFDRSxRQUFRLEVBQ1IsSUFBSSxFQUNKLE9BQU8sRUFDUCxTQUFTLEdBQUcsUUFBUSxFQUNwQixNQUFNLEdBQUcsT0FBTyxFQUNoQixNQUFNLEdBQUcsRUFBRSxHQUNLLEVBQ2xCLEdBQXVCLEVBQ3ZCLEVBQUU7SUFDRixNQUFNLGFBQWEsR0FBRyxJQUFBLHVCQUFXLEVBQUM7UUFDaEMsU0FBUyxFQUFFLFNBQVM7UUFDcEIsb0JBQW9CLEVBQUUsc0JBQVU7UUFDaEMsUUFBUSxFQUFFLFVBQVU7UUFDcEIsVUFBVSxFQUFFLENBQUMsSUFBQSxrQkFBYyxFQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUEsZ0JBQUksR0FBRSxFQUFFLElBQUEsaUJBQUssR0FBRSxDQUFDO0tBQ3RELENBQUMsQ0FBQztJQUVILE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFVLEtBQUssQ0FBQyxDQUFDO0lBRXpELE1BQU0sQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTlDLE1BQU0scUJBQXFCLEdBQUcsSUFBQSxlQUFPLEVBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFeEUsTUFBTSxXQUFXLEdBQUcsR0FBRyxFQUFFO1FBQ3ZCLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDaEMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2RSxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQyxDQUFDO0lBRUYsTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFnQixFQUFFLEVBQUU7UUFDckMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUN0QixxQkFBcUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hFO0lBQ0gsQ0FBQyxDQUFDO0lBRUYsSUFBQSxpQkFBUyxFQUFDLEdBQUcsRUFBRTtRQUNiLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDL0MsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM5QyxPQUFPLEdBQUcsRUFBRTtZQUNWLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDbEQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUM7SUFDSixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLGVBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRTVELE1BQU0sVUFBVSxHQUFHLGVBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUVsQyxPQUFPLENBQ0wsOEJBQUMsc0JBQWMsQ0FBQyxRQUFRLElBQ3RCLEtBQUssa0NBQ0EsYUFBYSxLQUNoQixVQUFVLEVBQUUsVUFBVSxFQUN0QixJQUFJLEVBQUUscUJBQXFCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUM3QyxPQUFPLEVBQUUscUJBQXFCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUN0RCxnQkFBZ0IsRUFBRSxHQUFHLEVBQ3JCLE1BQU07UUFHUCxPQUFPO1FBQ1AsT0FBTyxDQUNnQixDQUMzQixDQUFDO0FBQ0osQ0FBQyxDQUNGLENBQUM7QUFFRixJQUFJLGVBQU8sRUFBRTtJQUNYLE9BQU8sQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUM7Q0FDeEM7QUFFRCxrQkFBZSxPQU9kLENBQUMifQ==