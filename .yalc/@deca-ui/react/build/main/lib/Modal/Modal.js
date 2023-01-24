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
exports.ModalContext = void 0;
const Theme_1 = require("../Theme");
const Box_1 = __importDefault(require("../Box"));
const Button_1 = __importDefault(require("../Button"));
const Utils_1 = require("../Utils");
const web_1 = require("@react-spring/web");
const clsx_1 = __importDefault(require("clsx"));
const react_1 = __importStar(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const Modal_styles_1 = require("./Modal.styles");
exports.ModalContext = react_1.default.createContext(null);
const CloseButton = () => (react_1.default.createElement("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg" },
    react_1.default.createElement("g", { "data-name": "Layer 2" },
        react_1.default.createElement("path", { d: "M13.41 12l4.3-4.29a1 1 0 10-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 00-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 000 1.42 1 1 0 001.42 0l4.29-4.3 4.29 4.3a1 1 0 001.42 0 1 1 0 000-1.42z", "data-name": "close" }))));
const Modal = react_1.default.forwardRef((_a, ref) => {
    var { children, open, setOpen, css, className = '', closeButton = false, autoGap = true, noPadding = false, as } = _a, props = __rest(_a, ["children", "open", "setOpen", "css", "className", "closeButton", "autoGap", "noPadding", "as"]);
    const handleEsc = (e) => {
        if (e.key === 'Escape') {
            setOpen && setOpen(false);
        }
    };
    (0, react_1.useEffect)(() => {
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);
    const transition = (0, web_1.useTransition)(open, {
        from: {
            scale: 0.75,
            opacity: 0,
        },
        enter: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            scale: 1,
            opacity: 1,
        },
        leave: {
            scale: 0.75,
            opacity: 0,
        },
        config: {
            tension: 220,
            friction: 18,
        },
    });
    const overlayTransition = (0, web_1.useTransition)(open, {
        from: {
            opacity: 0,
        },
        enter: {
            scale: 1,
            opacity: 1,
        },
        leave: {
            opacity: 0,
        },
        config: {
            duration: 120,
        },
    });
    const clickOutsideRef = (0, Utils_1.useClickOutside)(() => {
        setOpen && setOpen(false);
    });
    const preClass = 'decaModal';
    const { dark } = react_1.default.useContext(Theme_1.ThemeContext);
    const [DOM, setDOM] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        setDOM(true);
    }, []);
    if (DOM) {
        return react_dom_1.default.createPortal(transition((style, item) => item && (react_1.default.createElement(exports.ModalContext.Provider, { value: { setOpen, autoGap } },
            overlayTransition((overlayStyle, overlayItem) => overlayItem && react_1.default.createElement(Modal_styles_1.StyledModalOverlay, { style: overlayStyle })),
            react_1.default.createElement(Modal_styles_1.StyledModal, Object.assign({ ref: (0, Utils_1.mergeRefs)(ref, clickOutsideRef), style: style, className: (0, clsx_1.default)(className, `${preClass}-root`), css: css, noPadding: noPadding, as: web_1.animated[as], isDark: dark }, props),
                closeButton && (react_1.default.createElement(Box_1.default, { css: {
                        display: 'flex',
                        justifyContent: 'flex-end',
                    } },
                    react_1.default.createElement(Button_1.default, { variant: "ghost", pill: true, icon: react_1.default.createElement(CloseButton, null), css: {
                            mr: noPadding ? '-$0' : '-$3',
                            mt: noPadding ? '-$0' : '-$3',
                            p: '$n',
                            bg: 'transparent',
                            color: dark ? '$gray700' : '$gray500',
                            '&:hover': {
                                color: '$gray600',
                                bg: 'transparent',
                                borderColor: '$transparent',
                            },
                            '&:focus': {
                                color: dark ? '$gray500' : '$gray700',
                                bg: 'transparent',
                            },
                        }, onClick: () => setOpen && setOpen(false) }))),
                react_1.default.createElement(Modal_styles_1.StyledModalFlexbox, { className: `${preClass}-flexbox`, autoGap: autoGap }, children))))), document.getElementById('decaUI-provider')
            ? document.getElementById('decaUI-provider')
            : document.querySelector('body'));
    }
    return react_1.default.createElement(react_1.default.Fragment, null);
});
if (Utils_1.__DEV__) {
    Modal.displayName = 'DecaUI.Modal';
}
exports.default = Modal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL01vZGFsL01vZGFsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLG1EQUEyQjtBQUMzQix5REFBaUM7QUFFakMsc0NBT29CO0FBQ3BCLDJDQUE0RDtBQUM1RCxnREFBd0I7QUFDeEIsK0NBQTZFO0FBQzdFLDBEQUFpQztBQUVqQyxpREFJd0I7QUFvRFgsUUFBQSxZQUFZLEdBQUcsZUFBSyxDQUFDLGFBQWEsQ0FBdUIsSUFBSSxDQUFDLENBQUM7QUFFNUUsTUFBTSxXQUFXLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FDeEIsdUNBQ0UsT0FBTyxFQUFDLFdBQVcsaUJBQ1AsTUFBTSxFQUNsQixTQUFTLEVBQUMsT0FBTyxFQUNqQixJQUFJLEVBQUMsY0FBYyxFQUNuQixLQUFLLEVBQUMsNEJBQTRCO0lBRWxDLGtEQUFhLFNBQVM7UUFDcEIsd0NBQ0UsQ0FBQyxFQUFDLDhLQUE4SyxlQUN0SyxPQUFPLEdBQ1gsQ0FDTixDQUNBLENBQ1AsQ0FBQztBQVNGLE1BQU0sS0FBSyxHQUFtQixlQUFLLENBQUMsVUFBVSxDQUM1QyxDQUNFLEVBV2dCLEVBQ2hCLEdBQXVCLEVBQ3ZCLEVBQUU7UUFiRixFQUNFLFFBQVEsRUFDUixJQUFJLEVBQ0osT0FBTyxFQUNQLEdBQUcsRUFDSCxTQUFTLEdBQUcsRUFBRSxFQUNkLFdBQVcsR0FBRyxLQUFLLEVBQ25CLE9BQU8sR0FBRyxJQUFJLEVBQ2QsU0FBUyxHQUFHLEtBQUssRUFDakIsRUFBRSxPQUVZLEVBRFgsS0FBSyxjQVZWLGdHQVdDLENBRFM7SUFJVixNQUFNLFNBQVMsR0FBRyxDQUFDLENBQWdCLEVBQUUsRUFBRTtRQUNyQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQ3RCLE9BQU8sSUFBSSxPQUFP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