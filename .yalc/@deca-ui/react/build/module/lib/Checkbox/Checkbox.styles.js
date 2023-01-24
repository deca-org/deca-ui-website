import { styled, standardColors } from '../Theme/stitches.config';
import { getStaticColor } from '../Utils';
import { darken } from 'polished';
const compoundVariantComposer = () => {
    const colorVariants = [];
    standardColors.map((color) => {
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
export const StyledCheckboxWrapper = styled('div', {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    fontFamily: '$normal',
    transition: '$default',
});
export const StyledCheckbox = styled('input', {
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
export const StyledCheckboxLabel = styled('label', {
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
                    borderColor: darken(0.125, getStaticColor('gray600')),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tib3guc3R5bGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9DaGVja2JveC9DaGVja2JveC5zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBTyxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDekUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUM1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRWxDLE1BQU0sdUJBQXVCLEdBQUcsR0FBRyxFQUFFO0lBQ25DLE1BQU0sYUFBYSxHQUtiLEVBQUUsQ0FBQztJQUVULGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUMzQixhQUFhLENBQUMsSUFBSSxDQUNoQjtZQUNFLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLE1BQU0sRUFBRSxLQUFLO1lBQ2IsS0FBSyxFQUFFLEtBQUs7WUFDWixHQUFHLEVBQUU7Z0JBQ0gsa0NBQWtDLEVBQUU7b0JBQ2xDLEVBQUUsRUFBRSxJQUFJLEtBQUssRUFBRTtvQkFDZixXQUFXLEVBQUUsSUFBSSxLQUFLLEVBQUU7aUJBQ3pCO2FBQ0Y7U0FDRixFQUNEO1lBQ0UsVUFBVSxFQUFFLElBQUk7WUFDaEIsTUFBTSxFQUFFLElBQUk7WUFDWixLQUFLLEVBQUUsS0FBSztZQUNaLEdBQUcsRUFBRTtnQkFDSCxrQ0FBa0MsRUFBRTtvQkFDbEMsRUFBRSxFQUFFLElBQUksS0FBSyxFQUFFO29CQUNmLFdBQVcsRUFBRSxJQUFJLEtBQUssRUFBRTtpQkFDekI7YUFDRjtTQUNGLENBQ0YsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxhQUFhLENBQUM7QUFDdkIsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRTtJQUNqRCxTQUFTLEVBQUUs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