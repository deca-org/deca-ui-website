import { styled } from '../Theme/stitches.config';
import { getStaticColor } from '../Utils';
import { darken } from 'polished';
export const StyledRadioWrapper = styled('div', {
    position: 'relative',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    fontFamily: '$normal',
    transition: '$default',
});
export const StyledRadio = styled('input', {
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
export const StyledRadioLabel = styled('label', {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFkaW8uc3R5bGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9SYWRpby9SYWRpby5zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFbEMsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRTtJQUM5QyxRQUFRLEVBQUUsVUFBVTtJQUNwQixTQUFTLEVBQUUsWUFBWTtJQUN2QixPQUFPLEVBQUUsTUFBTTtJQUNmLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLFVBQVUsRUFBRSxVQUFVO0NBQ3ZCLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFO0lBQ3pDLE1BQU0sRUFBRSxTQUFTO0lBQ2pCLE9BQU8sRUFBRSxDQUFDO0lBQ1YsUUFBUSxFQUFFLFVBQVU7SUFDcEIsVUFBVSxFQUFFLFVBQVU7SUFDdEIseUJBQXlCLEVBQUU7UUFDekIsVUFBVSxFQUFFLFNBQVM7S0FDdEI7SUFDRCxnQkFBZ0IsRUFBRTtRQUNoQjtZQUNFLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLE1BQU0sRUFBRSxLQUFLO1lBQ2IsR0FBRyxFQUFFO2dCQUNILGFBQWEsRUFBRSxNQUFNO2dCQUNyQixtQkFBbUIsRUFBRTtvQkFDbkIsT0FBTyxFQUFFLEtBQUs7aUJBQ2Y7Z0JBQ0QseUJBQXlCLEVBQUU7b0JBQ3pCLE9BQU8sRUFBRSxLQUFLO2lCQUNmO2FBQ0Y7U0FDRjtRQUNEO1lBQ0UsVUFBVSxFQUFFLElBQUk7WUFDaEIsTUFBTSxFQUFFLElBQUk7WUFDWixHQUFHLEVBQUU7Z0JBQ0gs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