"use strict";
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
const stitches_config_1 = require("../Theme/stitches.config");
const react_1 = __importDefault(require("react"));
const StyledButtonIcon = (0, stitches_config_1.styled)('span', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    '& svg': {
        background: 'transparent',
    },
    compoundVariants: [
        {
            isSingle: false,
            side: 'left',
            css: {
                mr: '$1',
            },
        },
        {
            isSingle: false,
            side: 'right',
            css: {
                ml: '$1',
            },
        },
        {
            isSingle: true,
            size: 'sm',
            css: {
                '& svg': {
                    height: 'calc(100% - $0)',
                    width: '100%',
                },
            },
        },
    ],
    variants: {
        size: {
            sm: {
                '& svg': {
                    height: 'calc(100% - $1)',
                    width: '100%',
                },
            },
            md: {
                '& svg': {
                    height: 'calc(100% - $2)',
                    width: '100%',
                },
            },
            lg: {
                '& svg': {
                    height: 'calc(100% - $3)',
                    width: '100%',
                },
            },
        },
        isSingle: {
            true: {
                '& svg': {
                    height: 'calc(100% - $2)',
                    width: '100%',
                },
            },
            false: {},
        },
        side: {
            left: {},
            right: {},
        },
    },
});
const ButtonIcon = (_a) => {
    var { children, className, css, size, isSingle, side } = _a, props = __rest(_a, ["children", "className", "css", "size", "isSingle", "side"]);
    return (react_1.default.createElement(StyledButtonIcon, Object.assign({ className: className, css: css, size: size, isSingle: isSingle, side: side }, props), children));
};
exports.default = ButtonIcon;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uSWNvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvQnV0dG9uL0J1dHRvbkljb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBeUQ7QUFDekQsa0RBQTBCO0FBRTFCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBQSx3QkFBTSxFQUFDLE1BQU0sRUFBRTtJQUN0QyxPQUFPLEVBQUUsTUFBTTtJQUNmLGNBQWMsRUFBRSxRQUFRO0lBQ3hCLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLE1BQU0sRUFBRSxNQUFNO0lBQ2QsT0FBTyxFQUFFO1FBQ1AsVUFBVSxFQUFFLGFBQWE7S0FDMUI7SUFDRCxnQkFBZ0IsRUFBRTtRQUNoQjtZQUNFLFFBQVEsRUFBRSxLQUFLO1lBQ2YsSUFBSSxFQUFFLE1BQU07WUFDWixHQUFHLEVBQUU7Z0JBQ0gsRUFBRSxFQUFFLElBQUk7YUFDVDtTQUNGO1FBQ0Q7WUFDRSxRQUFRLEVBQUUsS0FBSztZQUNmLElBQUksRUFBRSxPQUFPO1lBQ2IsR0FBRyxFQUFFO2dCQUNILEVBQUUsRUFBRSxJQUFJO2FBQ1Q7U0FDRjtRQUNEO1lBQ0UsUUFBUSxFQUFFLElBQUk7WUFDZCxJQUFJLEVBQUUsSUFBSTtZQUNWLEdBQUcsRUFBRTtnQkFDSCxPQUFPLEVBQUU7b0JBQ1AsTUFBTSxFQUFFLGlCQUFpQjtvQkFDekIsS0FBSyxFQUFFLE1BQU07aUJBQ2Q7YUFDRjtTQUNGO0tBQ0Y7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUU7WUFDSixFQUFFLEVBQUU7Z0JBQ0YsT0FBTyxFQUFFO29CQUNQLE1BQU0sRUFBRSxpQkFBaUI7b0JBQ3pCLEtBQUssRUFBRSxNQUFNO2lCQUNkO2FBQ0Y7WUFDRCxFQUFFLEVBQUU7Z0JBQ0YsT0FBTyxFQUFFO29CQUNQLE1BQU0sRUFBRSxpQkFBaUI7b0JBQ3pCLEtBQUssRUFBRSxNQUFNO2lCQUNkO2FBQ0Y7WUFDRCxFQUFFLEVBQUU7Z0JBQ0YsT0FBTyxFQUFFO29CQUNQLE1BQU0sRUFBRSxpQkFBaUI7b0JBQ3pCLEtBQUssRUFBRSxNQUFNO2lCQUNkO2FBQ0Y7U0FDRjtRQUNELFFBQVEsRUFBRTtZQUNSLElBQUksRUFBRTtnQkFDSixPQUFPLEVBQUU7b0JBQ1AsTUFBTSxFQUFFLGlCQUFpQjtvQkFDekIsS0FBSyxFQUFFLE1BQU07aUJBQ2Q7YUFDRjtZQUNELEtBQUssRUFBRSxFQUFFO1NBQ1Y7UUFDRCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxFQUFFO1NBQ1Y7S0FDRjtDQUNGLENBQUMsQ0FBQztBQVdILE1BQU0sVUFBVSxHQUFHLENBQUMsRUFRRixFQUFFLEVBQUU7UUFSRixFQUNsQixRQUFRLEVBQ1IsU0FBUyxFQUNULEdBQUcsRUFDSCxJQUFJLEVBQ0osUUFBUSxFQUNSLElBQUksT0FFWSxFQURiLEtBQUssY0FQVSw0REFRbkIsQ0FEUztJQUNhLE9BQUEsQ0FDckIsOEJBQUMsZ0JBQWdCLGtCQUNmLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLEdBQUcsRUFBRSxHQUFHLEVBQ1IsSUFBSSxFQUFFLElBQUksRUFDVixRQUFRLEVBQUUsUUFBUSxFQUNsQixJQUFJLEVBQUUsSUFBSSxJQUNOLEtBQUssR0FFUixRQUFRLENBQ1EsQ0FDcEIsQ0FBQTtDQUFBLENBQUM7QUFFRixrQkFBZSxVQUFVLENBQUMifQ==