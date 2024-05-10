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
exports.ThemeContext = void 0;
const stitches_config_1 = require("../Theme/stitches.config");
const Utils_1 = require("../Utils");
const react_1 = __importStar(require("react"));
const ssr_1 = require("@react-aria/ssr");
const stitches_config_2 = require("./stitches.config");
const globalBaseline = (0, stitches_config_2.globalCss)({
    /* Box sizing rules */
    '*, *::before, *::after': {
        boxSizing: 'border-box',
    },
    /* Remove default margin */
    'body, h1, h2, h3, h4, p, figure, blockquote, dl, dd': {
        margin: 0,
    },
    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    "ul[role='list'], ol[role='list']": {
        listStyle: 'none',
    },
    /* Set core root defaults */
    'html:focus-within': {
        scrollBehavior: 'smooth',
    },
    /* Set core body defaults */
    body: {
        minHeight: '100vh',
        textRendering: 'optimizeSpeed',
        lineHeight: 1.5,
    },
    /* A elements that don't have a class get default styles */
    'a:not([class])': {
        textDecorationSkipInk: 'auto',
    },
    /* Make images easier to work with */
    'img, picture': {
        maxWidth: '100%',
        display: 'block',
    },
    /* Inherit fonts for inputs and buttons */
    'input, button, textarea, select': {
        font: 'inherit',
    },
    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    '@media (prefers-reduced-motion: reduce)': {
        'html:focus-within': {
            scrollBehavior: 'auto',
        },
        '*, *::before, *::after': {
            animationDuration: '0.01ms!important',
            animationIterationCount: '1!important',
            transitionDuration: '0.01ms!important',
            scrollBehavior: 'auto!important',
        },
    },
});
exports.ThemeContext = react_1.default.createContext({ dark: false });
const ThemeProvider = (0, stitches_config_1.styled)('div', {});
const DecaUIProvider = ({ mode, theme, children, noBaseline, root = true }) => {
    const darkMode = (0, react_1.useMemo)(() => {
        return mode === 'dark' ? true : false;
    }, [mode]);
    const modifiedTheme = (0, react_1.useMemo)(() => {
        if (theme && theme.colors) {
            return Object.assign(Object.assign({}, theme), { colors: Object.assign(Object.assign({}, (0, Utils_1.createPalette)(theme.colors)), { text: darkMode ? '$white' : '$black' }) });
        }
        else {
            return Object.assign(Object.assign({}, theme), { colors: { text: darkMode ? '$white' : '$black' } });
        }
    }, [theme]);
    if (!noBaseline) {
        globalBaseline();
    }
    const userTheme = (0, react_1.useMemo)(() => (0, stitches_config_2.createTheme)(modifiedTheme), [theme]);
    if (!root) {
        return react_1.default.createElement("div", { className: theme && userTheme }, children);
    }
    return (react_1.default.createElement(ssr_1.SSRProvider, null,
        react_1.default.createElement(exports.ThemeContext.Provider, { value: { dark: darkMode } },
            react_1.default.createElement(ThemeProvider, { className: userTheme, id: "decaUI-provider" }, children))));
};
if (Utils_1.__DEV__) {
    DecaUIProvider.displayName = 'DecaUI.Provider';
}
exports.default = DecaUIProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjYVVJUHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL1RoZW1lL0RlY2FVSVByb3ZpZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUFvRDtBQUNwRCxzQ0FBb0Q7QUFDcEQsK0NBQXVDO0FBQ3ZDLHlDQUE4QztBQUU5Qyx1REFBMkQ7QUFrRDNELE1BQU0sY0FBYyxHQUFHLElBQUEsMkJBQVMsRUFBQztJQUMvQixzQkFBc0I7SUFDdEIsd0JBQXdCLEVBQUU7UUFDeEIsU0FBUyxFQUFFLFlBQVk7S0FDeEI7SUFFRCwyQkFBMkI7SUFDM0IscURBQXFELEVBQUU7UUFDckQsTUFBTSxFQUFFLENBQUM7S0FDVjtJQUVELDRHQUE0RztJQUM1RyxrQ0FBa0MsRUFBRTtRQUNsQyxTQUFTLEVBQUUsTUFBTTtLQUNsQjtJQUVELDRCQUE0QjtJQUM1QixtQkFBbUIsRUFBRTtRQUNuQixjQUFjLEVBQUUsUUFBUTtLQUN6QjtJQUVELDRCQUE0QjtJQUM1QixJQUFJLEVBQUU7UUFDSixTQUFTLEVBQUUsT0FBTztRQUNsQixhQUFhLEVBQUUsZUFBZTtRQUM5QixVQUFVLEVBQUUsR0FBRztLQUNoQjtJQUVELDJEQUEyRDtJQUMzRCxnQkFBZ0IsRUFBRTtRQUNoQixxQkFBcUIsRUFBRSxNQUFNO0tBQzlCO0lBRUQscUNBQXFDO0lBQ3JDLGNBQWMsRUFBRTtRQUNkLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLE9BQU8sRUFBRSxPQUFPO0tBQ2pCO0lBRUQsMENBQTBDO0lBQzFDLGlDQUFpQyxFQUFFO1FBQ2pDLElBQUksRUFBRSxTQUFTO0tBQ2hCO0lBRUQsaUdBQWlHO0lBQ2pHLHlDQUF5QyxFQUFFO1FBQ3pDLG1CQUFtQixFQUFFO1lBQ25CLGNBQWMsRUFBRSxNQUFNO1NBQ3ZCO1FBRUQsd0JBQXdCLEVBQUU7WUFDeEIsaUJBQWlCLEVBQUUsa0JBQWtCO1lBQ3JDLHVCQUF1QixFQUFFLGFBQWE7WUFDdEMsa0JBQWtCLEVBQUUsa0JBQWtCO1lBQ3RDLGNBQWMsRUFBRSxnQkFBZ0I7U0FDakM7S0FDRjtDQUNGLENBQUMsQ0FBQztBQUVVLFFBQUEsWUFBWSxHQUFHLGVBQUssQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUVqRSxNQUFNLGFBQWEsR0FBRyxJQUFBLHdCQUFNLEVBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBRXhDLE1BQU0sY0FBYyxHQUVoQixDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUUsRUFBRSxFQUFFO0lBQ3pELE1BQU0sUUFBUSxHQUFHLElBQUEsZUFBTyxFQUFDLEdBQUcsRUFBRTtRQUM1QixPQUFPLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3hDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFWCxNQUFNLGFBQWEsR0FBRyxJQUFBLGVBQU8sRUFBQyxHQUFHLEVBQUU7UUFDakMsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUN6Qix1Q0FDSyxLQUFLLEtBQ1IsTUFBTSxrQ0FDRCxJQUFBLHFCQUFhLEVBQUMsS0FBSyxDQUFDLE1BQWdDLENBQUMsS0FDeEQsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLE9BRXRDO1NBQ0g7YUFBTTtZQUNMLHVDQUFZLEtBQUssS0FBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFHO1NBQ3ZFO0lBQ0gsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUVaLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDZixjQUFjLEVBQUUsQ0FBQztLQUNsQjtJQUVELE1BQU0sU0FBUyxHQUFHLElBQUEsZUFBTyxFQUFDLEdBQUcsRUFBRSxDQUFDLElBQUEsNkJBQVcsRUFBQyxhQUFzQixDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRTlFLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDVCxPQUFPLHVDQUFLLFNBQVMsRUFBRSxLQUFLLElBQUksU0FBUyxJQUFHLFFBQVEsQ0FBTyxDQUFDO0tBQzdEO0lBRUQsT0FBTyxDQUNMLDhCQUFDLGlCQUFXO1FBQ1YsOEJBQUMsb0JBQVksQ0FBQyxRQUFRLElBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtZQUM5Qyw4QkFBQyxhQUFhLElBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUMsaUJBQWlCLElBQ3RELFFBQVEsQ0FDSyxDQUNNLENBQ1osQ0FDZixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsSUFBSSxlQUFPLEVBQUU7SUFDWCxjQUFjLENBQUMsV0FBVyxHQUFHLGlCQUFpQixDQUFDO0NBQ2hEO0FBRUQsa0JBQWUsY0FBYyxDQUFDIn0=