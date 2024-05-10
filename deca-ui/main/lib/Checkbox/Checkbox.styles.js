"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledCheckboxLabel = exports.StyledCheckbox = exports.StyledCheckboxWrapper = void 0;
const stitches_config_1 = require("../Theme/stitches.config");
const Utils_1 = require("../Utils");
const polished_1 = require("polished");
const compoundVariantComposer = () => {
    const colorVariants = [];
    stitches_config_1.standardColors.map((color) => {
        colorVariants.push({
            isDisabled: true,
            isDark: false,
            color: color,
            css: {
                '&:checked:active + label::before': {
                    bg: `$${color}`,
                    borderColor: `$${color}`,
                },
            },
        }, {
            isDisabled: true,
            isDark: true,
            color: color,
            css: {
                '&:checked:active + label::before': {
                    bg: `$${color}`,
                    borderColor: `$${color}`,
                },
            },
        });
    });
    return colorVariants;
};
exports.StyledCheckboxWrapper = (0, stitches_config_1.styled)('div', {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    fontFamily: '$normal',
    transition: '$default',
});
exports.StyledCheckbox = (0, stitches_config_1.styled)('input', {
    cursor: 'pointer',
    opacity: 0,
    position: 'absolute',
    transition: '$default',
    '&:checked + label > svg': {
        visibility: 'visible',
        color: '$white',
        opacity: 1,
    },
    compoundVariants: [
        ...compoundVariantComposer(),
        {
            isDisabled: true,
            isDark: true,
            css: {
                '&:checked + label::before': {
                    opacity: '50%',
                },
                '&:checked + label > svg': {
                    opacity: '30%',
                },
            },
        },
        {
            isDisabled: true,
            isDark: false,
            css: {
                '&:checked + label::before': {
                    opacity: '55%',
                },
                '&:checked + label > svg': {
                    opacity: '90%',
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
                '&:checked + label::before': {
                    bg: '$primary',
                    borderColor: '$primary',
                },
                '&:checked:active + label::before': {
                    bg: '$primary-darken-1',
                    borderColor: '$primary-darken-1',
                },
            },
            secondary: {
                '&:checked + label::before': {
                    bg: '$secondary',
                    borderColor: '$secondary',
                },
                '&:checked:active + label::before': {
                    bg: '$secondary-darken-1',
                    borderColor: '$secondary-darken-1',
                },
            },
            success: {
                '&:checked + label::before': {
                    bg: '$success',
                    borderColor: '$success',
                },
                '&:checked:active + label::before': {
                    bg: '$success-darken-1',
                    borderColor: '$success-darken-1',
                },
            },
            warning: {
                '&:checked + label::before': {
                    bg: '$warning',
                    borderColor: '$warning',
                },
                '&:checked:active + label::before': {
                    bg: '$warning-darken-1',
                    borderColor: '$warning-darken-1',
                },
            },
            error: {
                '&:checked + label::before': {
                    bg: '$error',
                    borderColor: '$error',
                },
                '&:checked:active + label::before': {
                    bg: '$error-darken-1',
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
            true: {
                '&:checked + label > svg': {
                    visibility: 'visible',
                    color: '$black',
                    opacity: 1,
                },
            },
            false: {},
        },
    },
});
exports.StyledCheckboxLabel = (0, stitches_config_1.styled)('label', {
    color: '$text',
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    transition: '$default',
    '&::before': {
        boxSizing: 'content-box',
        borderColor: '$gray600',
    },
    '& svg': {
        color: '$white',
        opacity: 0,
        transition: '$default',
    },
    compoundVariants: [
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
        {
            isDisabled: true,
            isDark: true,
            css: {
                color: '$gray700',
                '&::before': {
                    borderColor: '$gray700',
                },
            },
        },
        {
            isDisabled: true,
            isDark: false,
            css: {
                color: '$gray500',
                '&::before': {
                    borderColor: '$gray400',
                },
            },
        },
    ],
    variants: {
        size: {
            sm: {
                fontSize: '$caption',
                '& svg': {
                    width: '$1',
                    ml: '$1',
                    position: 'absolute',
                    visibility: 'hidden',
                    pt: 'calc($0 / 4)',
                },
                '&::before': {
                    transition: '$default',
                    content: '',
                    size: '$2',
                    borderStyle: 'solid',
                    borderWidth: '$normal',
                    br: '$xs',
                    mt: 'calc($0 / 4)',
                },
            },
            md: {
                fontSize: '$bodySm',
                '& svg': {
                    width: '$2',
                    ml: '$1',
                    position: 'absolute',
                    visibility: 'hidden',
                },
                '&::before': {
                    transition: '$default',
                    content: '',
                    size: '$3',
                    borderStyle: 'solid',
                    borderWidth: '$normal',
                    br: '$xs',
                },
            },
            lg: {
                fontSize: '$body',
                '& svg': {
                    width: '$3',
                    ml: '$1',
                    position: 'absolute',
                    visibility: 'hidden',
                },
                '&::before': {
                    transition: '$default',
                    content: '',
                    size: '$4',
                    borderStyle: 'solid',
                    borderWidth: '$normal',
                    br: '$xs',
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
                '-webkit-user-select': 'none',
                '-moz-user-select': 'none',
                '-ms-user-select': 'none',
                userSelect: 'none',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tib3guc3R5bGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9DaGVja2JveC9DaGVja2JveC5zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGdFQUF5RTtBQUN6RSxzQ0FBNEM7QUFDNUMsdUNBQWtDO0FBRWxDLE1BQU0sdUJBQXVCLEdBQUcsR0FBRyxFQUFFO0lBQ25DLE1BQU0sYUFBYSxHQUtiLEVBQUUsQ0FBQztJQUVULGdDQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDM0IsYUFBYSxDQUFDLElBQUksQ0FDaEI7WUFDRSxVQUFVLEVBQUUsSUFBSTtZQUNoQixNQUFNLEVBQUUsS0FBSztZQUNiLEtBQUssRUFBRSxLQUFLO1lBQ1osR0FBRyxFQUFFO2dCQUNILGtDQUFrQyxFQUFFO29CQUNsQyxFQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUU7b0JBQ2YsV0FBVyxFQUFFLElBQUksS0FBSyxFQUFFO2lCQUN6QjthQUNGO1NBQ0YsRUFDRDtZQUNFLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLE1BQU0sRUFBRSxJQUFJO1lBQ1osS0FBSyxFQUFFLEtBQUs7WUFDWixHQUFHLEVBQUU7Z0JBQ0gsa0NBQWtDLEVBQUU7b0JBQ2xDLEVBQUUsRUFBRSxJQUFJLEtBQUssRUFBRTtvQkFDZixXQUFXLEVBQUUsSUFBSSxLQUFLLEVBQUU7aUJBQ3pCO2FBQ0Y7U0FDRixDQUNGLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sYUFBYSxDQUFDO0FBQ3ZCLENBQUMsQ0FBQztBQUVXLFFBQUEscUJBQXFCLEdBQUcsSUFBQSx3QkFBTSxFQUFDLEtBQUssRUFBRTtJQUNqRCxTQUFTLEVBQUUsWUFBWTtJQUN2QixPQUFPLEVBQUUsTUFBTTtJQUNmLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLFVBQVUsRUFBRSxVQUFVO0NBQ3ZCLENB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