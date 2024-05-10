import { styled } from '../Theme/stitches.config';
export const StyledSwitchWrapper = styled('div', {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    fontFamily: '$normal',
    transition: '$default',
});
export const StyledSwitchInput = styled('input', {
    opacity: 0,
    position: 'absolute',
    cursor: 'pointer',
    '&:focus-visible + label::before': {
        boxShadow: '$a11y',
    },
    compoundVariants: [
        {
            isDark: true,
            isDisabled: true,
            css: {
                '&:checked + label::before': {
                    bg: '$gray700',
                },
                '&:checked:active + label::before': {
                    bg: '$gray700',
                },
            },
        },
        {
            isDark: false,
            isDisabled: true,
            css: {
                '&:checked + label::before': {
                    bg: '$gray200',
                },
                '&:checked:active + label::before': {
                    bg: '$gray200',
                },
            },
        },
    ],
    variants: {
        size: {
            sm: {
                '&:checked + label::after': {
                    transform: 'translateX(calc(100% + $space$0))',
                },
                '&:active + label::after': {
                    pr: '$1',
                },
                '&:checked:active + label::after': {
                    transform: 'translateX(calc(100% - ($space$1 + $space$0)))',
                },
            },
            md: {
                '&:checked + label::after': {
                    transform: 'translateX(calc(100% - $space$0))',
                },
                '&:active + label::after': {
                    pr: '$1',
                },
                '&:checked:active + label::after': {
                    transform: 'translateX(calc(100% - ($space$0 + $space$2)))',
                },
            },
            lg: {
                '&:checked + label::after': {
                    transform: 'translateX(calc(100% - $space$1))',
                },
                '&:active + label::after': {
                    pr: '$1',
                },
                '&:checked:active + label::after': {
                    transform: 'translateX(calc(100% - ($space$1 + $space$2)))',
                },
            },
        },
        color: {
            primary: {
                '&:checked + label::before': {
                    bg: '$primary',
                },
                '&:checked:active + label::before': {
                    bg: '$primary-darken-1',
                },
            },
            secondary: {
                '&:checked + label::before': {
                    bg: '$secondary',
                },
                '&:checked:active + label::before': {
                    bg: '$secondary-darken-1',
                },
            },
            success: {
                '&:checked + label::before': {
                    bg: '$success',
                },
                '&:checked:active + label::before': {
                    bg: '$success-darken-1',
                },
            },
            warning: {
                '&:checked + label::before': {
                    bg: '$warning',
                },
                '&:checked:active + label::before': {
                    bg: '$warning-darken-1',
                },
            },
            error: {
                '&:checked + label::before': {
                    bg: '$error',
                },
                '&:checked:active + label::before': {
                    bg: '$error-darken-1',
                },
            },
        },
        isDisabled: {
            true: {},
            false: {},
        },
        isDark: {
            true: {},
            false: {},
        },
    },
});
export const StyledSwitchLabel = styled('label', {
    color: '$text',
    position: 'relative',
    boxSizing: 'content-box',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&::before': {
        boxSizing: 'content-box',
        content: '',
        br: '$pill',
        transition: '$default',
    },
    '&::after': {
        boxSizing: 'content-box',
        position: 'absolute',
        content: '',
        br: '$pill',
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
            isDark: true,
            isDisabled: true,
            css: {
                '&::before': {
                    bg: '$gray700',
                },
                '&::after': {
                    opacity: '40%',
                    bg: '$gray600',
                },
            },
        },
        {
            isDark: false,
            isDisabled: true,
            css: {
                '&::before': {
                    bg: '$gray200',
                },
                '&::after': {
                    bg: '$gray400',
                },
            },
        },
    ],
    variants: {
        size: {
            sm: {
                fontSize: '$caption',
                '&::before': {
                    width: '$7',
                    height: '$3',
                },
                '&::after': {
                    left: 'calc($0 + $space$1 - $space$1)',
                    size: 'calc($4 - $space$2)',
                },
            },
            md: {
                fontSize: '$bodySm',
                '&::before': {
                    width: '$8',
                    height: '$4',
                },
                '&::after': {
                    left: 'calc($0 + $space$1 - $space$0 / 2)',
                    size: 'calc($4 - $space$1 - $space$0)',
                },
            },
            lg: {
                fontSize: '$body',
                '&::before': {
                    width: '$9',
                    height: '$5',
                },
                '&::after': {
                    left: 'calc($0 + $space$0)',
                    size: 'calc($4 - $space$0)',
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
            },
            false: {},
        },
        hasLabel: {
            true: {},
            false: {},
        },
        isDark: {
            true: {
                '&::before': {
                    bg: '$gray800',
                },
                '&::after': {
                    bg: '$black',
                },
            },
            false: {
                '&::before': {
                    bg: '$gray300',
                },
                '&::after': {
                    bg: '$white',
                },
            },
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3dpdGNoLnN0eWxlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvU3dpdGNoL1N3aXRjaC5zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVwRCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFO0lBQy9DLFNBQVMsRUFBRSxZQUFZO0lBQ3ZCLE9BQU8sRUFBRSxNQUFNO0lBQ2YsVUFBVSxFQUFFLFFBQVE7SUFDcEIsVUFBVSxFQUFFLFNBQVM7SUFDckIsVUFBVSxFQUFFLFVBQVU7Q0FDdkIsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRTtJQUMvQyxPQUFPLEVBQUUsQ0FBQztJQUNWLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLE1BQU0sRUFBRSxTQUFTO0lBQ2pCLGlDQUFpQyxFQUFFO1FBQ2pDLFNBQVMsRUFBRSxPQUFPO0tBQ25CO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDaEI7WUFDRSxNQUFNLEVBQUUsSUFBSTtZQUNaLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLEdBQUcsRUFBRTtnQkFDSCwyQkFBMkIsRUFBRTtvQkFDM0IsRUFBRSxFQUFFLFVBQVU7aUJBQ2Y7Z0JBQ0Qsa0NBQWtDLEVBQUU7b0JBQ2xDLEVBQUUsRUFBRSxVQUFVO2lCQUNmO2FBQ0Y7U0FDRjtRQUNEO1lBQ0UsTUFBTSxFQUFFLEtBQUs7WUFDYixVQUFVLEVBQUUsSUFBSTtZQUNoQixHQUFHLEVBQUU7Z0JBQ0gsMkJBQTJCLEVBQUU7b0JBQzNCLEVBQUUsRUFBRSxVQUFVO2lCQUNmO2dCQUNELGtDQUFrQyxFQUFFO29CQUNsQyxFQUFFLEVBQUUsVUFBVTtpQkFDZjthQUNGO1NBQ0Y7S0FDRjtJQUNELFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRTtZQUNKLEVBQUUs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