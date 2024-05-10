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
const web_1 = require("@react-spring/web");
const clsx_1 = __importDefault(require("clsx"));
const react_1 = __importStar(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const Popover_1 = require("./Popover");
const Popover_styles_1 = require("./Popover.styles");
const PopoverContent = react_1.default.forwardRef((_a, ref) => {
    var { children, css, className = '', as } = _a, props = __rest(_a, ["children", "css", "className", "as"]);
    const context = (0, react_1.useContext)(Popover_1.PopoverContext);
    const clickOutsideRef = (0, Utils_1.useClickOutside)(() => {
        context.setOpen && context.setOpen(false);
    }, [context.triggerRef]);
    const transition = (0, web_1.useTransition)(context.open, {
        from: {
            scale: 0.75,
            opacity: 0,
        },
        enter: {
            scale: 1,
            opacity: 1,
        },
        leave: {
            scale: 0.75,
            opacity: 0,
        },
        config: {
            tension: 300,
            friction: 19,
        },
    });
    const preClass = 'decaPopover';
    const { dark } = react_1.default.useContext(Theme_1.ThemeContext);
    const [DOM, setDOM] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        setDOM(true);
    }, []);
    if (DOM) {
        return react_dom_1.default.createPortal(transition((style, item) => {
            var _a, _b;
            return item && (react_1.default.createElement(Popover_styles_1.StyledPopover, Object.assign({ style: style, ref: (0, Utils_1.mergeRefs)(context.mainComponentRef, context.floating, clickOutsideRef, ref), css: Object.assign({ position: context.strategy, top: (_a = context.y) !== null && _a !== void 0 ? _a : 0, left: (_b = context.x) !== null && _b !== void 0 ? _b : 0 }, css), className: (0, clsx_1.default)(className, `${preClass}-root`), as: web_1.animated[as], isDark: dark }, props), children));
        }), document.getElementById('decaUI-provider')
            ? document.getElementById('decaUI-provider')
            : document.querySelector('body'));
    }
    return react_1.default.createElement(react_1.default.Fragment, null);
});
if (Utils_1.__DEV__) {
    PopoverContent.displayName = 'DecaUI.PopoverContent';
}
exports.default = PopoverContent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9wb3ZlckNvbnRlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL1BvcG92ZXIvUG9wb3ZlckNvbnRlbnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUUxQyxzQ0FNb0I7QUFDcEIsMkNBQTREO0FBQzVELGdEQUF3QjtBQUN4QiwrQ0FBK0Q7QUFDL0QsMERBQWlDO0FBRWpDLHVDQUE0RDtBQUM1RCxxREFBaUQ7QUE0QmpELE1BQU0sY0FBYyxHQUE0QixlQUFLLENBQUMsVUFBVSxDQUM5RCxDQUNFLEVBQXVFLEVBQ3ZFLEdBQXVCLEVBQ3ZCLEVBQUU7UUFGRixFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxFQUFFLE9BQW9DLEVBQS9CLEtBQUssY0FBN0Msc0NBQStDLENBQUY7SUFHN0MsTUFBTSxPQUFPLEdBQUcsSUFBQSxrQkFBVSxFQUFDLHdCQUFjLENBQW9CLENBQUM7SUFFOUQsTUFBTSxlQUFlLEdBQUcsSUFBQSx1QkFBZSxFQUFDLEdBQUcsRUFBRTtRQUMzQyxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFFekIsTUFBTSxVQUFVLEdBQUcsSUFBQSxtQkFBYSxFQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7UUFDN0MsSUFBSSxFQUFFO1lBQ0osS0FBSyxFQUFFLElBQUk7WUFDWCxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsS0FBSyxFQUFFLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsS0FBSyxFQUFFLElBQUk7WUFDWCxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsTUFBTSxFQUFFO1lBQ04sT0FBTyxFQUFFLEdBQUc7WUFDWixRQUFRLEVBQUUsRUFBRTtTQUNiO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsTUFBTSxRQUFRLEdBQUcsYUFBYSxDQUFDO0lBRS9CLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxlQUFLLENBQUMsVUFBVSxDQUFDLG9CQUFZLENBQUMsQ0FBQztJQUVoRCxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLElBQUEsZ0JBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUV0QyxJQUFBLGlCQUFTLEVBQUMsR0FBRyxFQUFFO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2YsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsSUFBSSxHQUFHLEVBQUU7UUFDUCxPQUFPLG1CQUFRLENBQUMsWUFBWSxDQUMxQixVQUFVLENBQ1IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUU7O1lBQ2QsT0FBQSxJQUFJLElBQUksQ0FDTiw4QkFBQyw4QkFBYSxrQkFDWixLQUFLLEVBQUUsS0FBSyxFQUNaLEdBQUcsRUFBRSxJQUFBLGlCQUFTLEVBQ1osT0FBTyxDQUFDLGdCQUFnQixFQUN4QixPQUFPLENBQUMsUUFBUSxFQUNoQixlQUFlLEVBQ2YsR0FBRyxDQUNKLEVBQ0QsR0FBRyxrQkFDRCxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFDMUIsR0FBRyxFQUFFLE1BQUEsT0FBTyxDQUFDLENBQUMsbUNBQUksQ0FBQyxFQUNuQixJQUFJLEVBQUUsTUFBQSxPQUFPLENBQUMsQ0FBQyxtQ0FBSSxDQUFDLElBQ2pCLEdBQUcsR0FFUixTQUFTLEVBQUUsSUFBQSxjQUFJLEVBQUMsU0FBUyxFQUFFLEdBQUcsUUFBUSxPQUFPLENBQUMsRUFDOUMsRUFBRSxFQUFFLGNBQVEsQ0FBQyxFQUFpQyxDQUFDLEVBQy9DLE1BQU0sRUFBRSxJQUFJLElBQ1IsS0FBSyxHQUVSLFFBQVEsQ0FDSyxDQUNqQixDQUFBO1NBQUEsQ0FDSixFQUNELFFBQVEsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUM7WUFDeEMsQ0FBQyxDQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQWE7WUFDekQsQ0FBQyxDQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFhLENBQ2hELENBQUM7S0FDSDtJQUNELE9BQU8sNkRBQUssQ0FBQztBQUNmLENBQUMsQ0FDRixDQUFDO0FBRUYsSUFBSSxlQUFPLEVBQUU7SUFDWCxjQUFjLENBQUMsV0FBVyxHQUFHLHVCQUF1QixDQUFDO0NBQ3REO0FBRUQsa0JBQWUsY0FBYyxDQUFDIn0=