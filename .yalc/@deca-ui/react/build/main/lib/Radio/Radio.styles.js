"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledRadioLabel = exports.StyledRadio = exports.StyledRadioWrapper = void 0;
const stitches_config_1 = require("../Theme/stitches.config");
const Utils_1 = require("../Utils");
const polished_1 = require("polished");
exports.StyledRadioWrapper = (0, stitches_config_1.styled)('div', {
    position: 'relative',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    fontFamily: '$normal',
    transition: '$default',
});
exports.StyledRadio = (0, stitches_config_1.styled)('input', {
    cursor: 'pointer',
    opacity: 0,
    position: 'absolute',
    transition: '$default',
    '&:checked + label > div': {
        visibility: 'visible',
    },
    compoundVariants: [
        {
            isDisabled: true,
            isDark: false,
            css: {
                pointerEvents: 'none',
                '& + label::before': {
                    opacity: '60%',
                },
                '&:checked + label > div': {
                    opacity: '50%',
                },
            },
        },
        {
            isDisabled: true,
            isDark: true,
            css: {
                pointerEvents: 'none',
                '& + label::before': {
                    opacity: '35%',
                },
                '&:checked + label > div': {
                    opacity: '35%',
                },
            },
        },
    ],
    variants: {
        size: {
            sm: {},
            md: {},
            lg: {},
        },
        color: {
            primary: {
                '&:checked + label > div': {
                    bg: '$primary',
                },
                '&:checked + label::before': {
                    borderColor: '$primary',
                },
                '&:checked:active + label::before': {
                    borderColor: '$primary-darken-1',
                },
            },
            secondary: {
                '&:checked + label > div': {
                    bg: '$secondary',
                },
                '&:checked + label::before': {
                    borderColor: '$secondary',
                },
                '&:checked:active + label::before': {
                    borderColor: '$secondary-darken-1',
                },
            },
            success: {
                '&:checked + label > div': {
                    bg: '$success',
                },
                '&:checked + label::before': {
                    borderColor: '$success',
                },
                '&:checked:active + label::before': {
                    borderColor: '$success-darken-1',
                },
            },
            warning: {
                '&:checked + label > div': {
                    bg: '$warning',
                },
                '&:checked + label::before': {
                    borderColor: '$warning',
                },
                '&:checked:active + label::before': {
                    borderColor: '$warning-darken-1',
                },
            },
            error: {
                '&:checked + label > div': {
                    bg: '$error',
                },
                '&:checked + label::before': {
                    borderColor: '$error',
                },
                '&:checked:active + label::before': {
                    borderColor: '$error-darken-1',
                },
            },
        },
        isDisabled: {
            true: {},
            false: {
                '&:focus-visible + label::before': {
                    boxShadow: '$a11y',
                },
            },
        },
        isDark: {
            true: {},
            false: {},
        },
    },
});
exports.StyledRadioLabel = (0, stitches_config_1.styled)('label', {
    color: '$text',
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    transition: '$default',
    '&::before': {
        boxSizing: 'content-box',
        borderColor: '$gray600',
        br: '$pill',
        borderStyle: 'solid',
        borderWidth: '$normal',
        transition: '$default',
        content: '',
    },
    '& div': {
        br: '$pill',
        position: 'absolute',
        transition: '$default',
        visibility: 'hidden',
    },
    compoundVariants: [
        {
            isDisabled: true,
            isDark: true,
            css: {
                color: '$gray700',
            },
        },
        {
            isDisabled: true,
            isDark: false,
            css: {
                color: '$gray500',
            },
        },
        {
            hasLabel: true,
            size: 'sm',
            css: {
                '&::before': {
                    mr: '$1',
                },
            },
        },
        {
            hasLabel: true,
            size: 'md',
            css: {
                '&::before': {
                    mr: '$2',
                },
            },
        },
        {
            hasLabel: true,
            size: 'lg',
            css: {
                '&::before': {
                    mr: '$2',
                },
            },
        },
    ],
    variants: {
        size: {
            sm: {
                fontSize: '$caption',
                '& div': {
                    size: '$1',
                    ml: '$1',
                    mt: 'calc($0 / 4)',
                },
                '&::before': {
                    size: '$2',
                    mt: 'calc($0 / 4)',
                },
            },
            md: {
                fontSize: '$bodySm',
                '& div': {
                    size: '$2',
                    ml: '$1',
                },
                '&::before': {
                    size: '$3',
                },
            },
            lg: {
                fontSize: '$body',
                '& div': {
                    size: '$3',
                    ml: '$1',
                },
                '&::before': {
                    size: '$4',
                },
            },
        },
        color: {
            primary: {},
            secondary: {},
            success: {},
            warning: {},
            error: {},
        },
        isDisabled: {
            true: {
                cursor: 'not-allowed',
                color: '$gray500',
                '-webkit-user-select': 'none',
                '-moz-user-select': 'none',
                '-ms-user-select': 'none',
                userSelect: 'none',
                '&::before': {
                    borderColor: '$gray400',
                },
            },
            false: {
                '&:hover::before': {
                    transition: '$default',
                    borderColor: (0, polished_1.darken)(0.125, (0, Utils_1.getStaticColor)('gray600')),
                },
            },
        },
        hasLabel: {
            true: {},
            false: {},
        },
        isDark: {
            true: {},
            false: {},
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFkaW8uc3R5bGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9SYWRpby9SYWRpby5zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGdFQUFvRDtBQUNwRCxzQ0FBNEM7QUFDNUMsdUNBQWtDO0FBRXJCLFFBQUEsa0JBQWtCLEdBQUcsSUFBQSx3QkFBTSxFQUFDLEtBQUssRUFBRTtJQUM5QyxRQUFRLEVBQUUsVUFBVTtJQUNwQixTQUFTLEVBQUUsWUFBWTtJQUN2QixPQUFPLEVBQUUsTUFBTTtJQUNmLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLFVBQVUsRUFBRSxVQUFVO0NBQ3ZCLENBQUMsQ0FBQztBQUVVLFFBQUEsV0FBVyxHQUFHLElBQUEsd0JBQU0sRUFBQyxPQUFPLEVBQUU7SUFDekMsTUFBTSxFQUFFLFNBQVM7SUFDakIsT0FBTyxFQUFFLENBQUM7SUFDVixRQUFRLEVBQUUsVUFBVTtJQUNwQixVQUFVLEVBQUUsVUFBVTtJQUN0Qix5QkFBeUIsRUFBRTtRQUN6QixVQUFVLEVBQUUsU0FBUztLQUN0QjtJQUNELGdCQUFnQixFQUFFO1FBQ2hCO1lBQ0UsVUFBVSxFQUFFLElBQUk7WUFDaEIsTUFBTSxFQUFFLEtBQUs7WUFDYixHQUFHLEVBQUU7Z0JBQ0gsYUFBYSxFQUFFLE1BQU07Z0JBQ3JCLG1CQUFtQixFQUFFO29CQUNuQixPQUFPLEVBQUUsS0FBSztpQkFDZjtnQkFDRCx5QkFBeUIsRUFBRTtvQkFDekIsT0FBTyxFQUFFLEtBQUs7aUJBQ2Y7YUFDRjtTQUNGO1FBQ0Q7WUFDRSxVQUFVLEVBQUUsSUFBSTtZQUNoQixNQUFNLEVBQUUsSUFBSTtZQUNaLEdBQUcsRUFBRTtnQkFDSCxhQUFhLEVBQUUsTUFBTTtnQkFDckIsbUJBQW1CLEVBQUU7b0JBQ25CLE9BQU8sRUFBRSxLQUFLO2lCQUNmO2dCQUNELHlCQUF5QixFQUFFO29CQUN6QixPQUFP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