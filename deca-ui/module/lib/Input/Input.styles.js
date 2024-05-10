import { styled } from '../Theme/stitches.config';
export const StyledInputMainContainer = styled('div', {
    width: '100%',
    fontFamily: '$normal',
    compoundVariants: [
        {
            size: 'sm',
            maxWidth: false,
            css: {
                width: '$32',
            },
        },
        {
            size: 'md',
            maxWidth: false,
            css: {
                width: '$35',
            },
        },
        {
            size: 'lg',
            maxWidth: false,
            css: {
                width: '$35',
            },
        },
    ],
    variants: {
        maxWidth: {
            true: {
                width: '100%',
            },
            false: {},
        },
        isDisabled: {
            true: {
                cursor: 'not-allowed',
            },
            false: {},
        },
        size: {
            sm: {},
            md: {},
            lg: {},
        },
    },
});
export const StyledInputLabel = styled('label', {
    display: 'inline-block',
    fontWeight: '$semibold',
    '-webkit-font-smoothing': 'antialiased',
    transition: '$default',
    ml: '$0',
    mb: '$2',
    mt: '0px',
    color: '$text',
    compoundVariants: [
        {
            variant: 'outlined',
            state: 'focused',
            focusColor: 'primary',
            css: {
                color: '$primary',
            },
        },
        {
            variant: 'outlined',
            state: 'focused',
            focusColor: 'secondary',
            css: {
                color: '$secondary',
            },
        },
        {
            variant: 'outlined',
            state: 'focused',
            focusColor: 'success',
            css: {
                color: '$success',
            },
        },
        {
            variant: 'outlined',
            state: 'focused',
            focusColor: 'warning',
            css: {
                color: '$warning',
            },
        },
        {
            variant: 'outlined',
            state: 'focused',
            focusColor: 'error',
            css: {
                color: '$error',
            },
        },
        {
            variant: 'outlined',
            state: 'default',
            css: {
                color: '$text',
            },
        },
        {
            variant: 'outlined',
            state: 'value',
            css: {
                color: '$text',
            },
        },
        {
            state: 'isDisabled',
            isDark: 'true',
            css: {
                color: '$gray700',
            },
        },
    ],
    variants: {
        size: {
            sm: {
                mb: '$1',
                fontSize: '$footnote',
            },
            md: {
                fontSize: '$caption',
            },
            lg: {
                fontSize: '$caption',
            },
        },
        state: {
            focused: {},
            isDisabled: {
                color: '$gray500',
            },
            value: {},
            default: {},
        },
        variant: {
            solid: {},
            outlined: {},
        },
        focusColor: {
            primary: {},
            secondary: {},
            success: {},
            warning: {},
            error: {},
        },
        pill: {
            true: {
                ml: '$2',
            },
            false: {},
        },
        isDark: {
            true: {},
            false: {},
        },
    },
});
export const StyledInputHelperText = styled('p', {
    fontSize: '$footnote',
    color: '$gray600',
    lineHeight: '$0',
    transition: '$default',
    m: '$n',
    ml: '$0',
    mt: '$2',
    compoundVariants: [
        {
            state: 'isDisabled',
            isDark: true,
            css: {
                color: '$gray700',
            },
        },
        {
            state: 'value',
            isDark: true,
            css: {
                color: '$text',
            },
        },
        {
            state: 'default',
            isDark: true,
            css: {
                color: '$text',
            },
        },
    ],
    variants: {
        size: {
            sm: {
                mt: '$1',
            },
            md: {},
            lg: {},
        },
        state: {
            focused: {},
            isDisabled: {
                color: '$gray500',
            },
            value: {
                color: '$gray600',
            },
            default: {
                color: '$gray600',
            },
        },
        pill: {
            true: {
                ml: '$2',
            },
            false: {},
        },
        isDark: {
            true: {
                color: '$text',
            },
            false: {},
        },
    },
});
export const StyledInputContainer = styled('div', {
    fontWeight: '$medium',
    boxSizing: 'border-box',
    borderWidth: '$normal',
    borderStyle: 'solid',
    transition: '$default',
    compoundVariants: [
        {
            variant: 'solid',
            isDark: false,
            css: {
                backgroundColor: '$gray200',
                borderColor: '$gray200',
            },
        },
        {
            variant: 'solid',
            state: 'focused',
            isDark: false,
            css: {
                backgroundColor: '$gray300',
                borderColor: '$gray300',
            },
        },
        {
            variant: 'solid',
            isDark: true,
            css: {
                backgroundColor: '$gray900',
                borderColor: '$gray900',
            },
        },
        {
            variant: 'solid',
            state: 'focused',
            isDark: true,
            css: {
                backgroundColor: '$gray800',
                borderColor: '$gray800',
            },
        },
        {
            variant: 'outlined',
            state: 'focused',
            focusColor: 'primary',
            css: {
                borderColor: '$primary',
            },
        },
        {
            variant: 'outlined',
            state: 'focused',
            focusColor: 'secondary',
            css: {
                borderColor: '$secondary',
            },
        },
        {
            variant: 'outlined',
            state: 'focused',
            focusColor: 'success',
            css: {
                borderColor: '$success',
            },
        },
        {
            variant: 'outlined',
            state: 'focused',
            focusColor: 'warning',
            css: {
                borderColor: '$warning',
            },
        },
        {
            variant: 'outlined',
            state: 'focused',
            focusColor: 'error',
            css: {
                borderColor: '$error',
            },
        },
        {
            variant: 'outlined',
            state: 'isDisabled',
            css: {
                borderColor: '$gray400',
            },
        },
        {
            variant: 'outlined',
            state: 'value',
            css: {
                borderColor: '$gray400',
            },
        },
        {
            variant: 'outlined',
            state: 'default',
            css: {
                borderColor: '$gray400',
            },
        },
        {
            variant: 'outlined',
            state: 'value',
            isDark: true,
            css: {
                borderColor: '$gray700',
            },
        },
        {
            variant: 'outlined',
            state: 'default',
            isDark: true,
            css: {
                borderColor: '$gray700',
            },
        },
        {
            variant: 'outlined',
            state: 'isDisabled',
            isDark: true,
            css: {
                borderColor: '$gray800',
            },
        },
        {
            variant: 'solid',
            state: 'isDisabled',
            isDark: true,
            css: {
                borderColor: '$gray900',
            },
        },
        {
            size: 'sm',
            maxWidth: false,
            css: {
                width: '$32',
            },
        },
        {
            size: 'md',
            maxWidth: false,
            css: {
                width: '$35',
            },
        },
        {
            size: 'lg',
            maxWidth: false,
            css: {
                width: '$35',
            },
        },
    ],
    variants: {
        maxWidth: {
            true: {
                width: '100%',
            },
            false: {},
        },
        size: {
            sm: {
                height: '$6',
            },
            md: {
                height: '$9',
            },
            lg: {
                height: '$10',
            },
        },
        state: {
            focused: {},
            isDisabled: {
                cursor: 'not-allowed',
            },
            value: {},
            default: {},
        },
        variant: {
            solid: {},
            outlined: {},
        },
        focusColor: {
            primary: {},
            secondary: {},
            success: {},
            warning: {},
            error: {},
        },
        pill: {
            true: {
                borderRadius: '$pill',
            },
            false: {
                borderRadius: '$sm',
            },
        },
        isDark: {
            true: {},
            false: {},
        },
    },
});
export const StyledInput = styled('input', {
    color: '$text',
    bg: '$transparent',
    border: 'none',
    '&:focus': {
        outline: 0,
    },
    boxSizing: 'border-box',
    size: '100%',
    paddingRight: 'calc($2 * 1.5)',
    paddingLeft: 'calc($2 * 1.5)',
    transition: '$default',
    '&::placeholder': {
        color: '$gray700',
        opacity: 0.75,
    },
    compoundVariants: [
        {
            variant: 'solid',
            isDark: false,
            css: {
                backgroundColor: '$gray200',
            },
        },
        {
            variant: 'solid',
            state: 'focused',
            isDark: false,
            css: {
                backgroundColor: '$gray300',
                borderColor: '$gray300',
            },
        },
        {
            variant: 'solid',
            isDark: true,
            css: {
                backgroundColor: '$gray900',
            },
        },
        {
            variant: 'solid',
            state: 'focused',
            isDark: true,
            css: {
                backgroundColor: '$gray800',
                borderColor: '$gray800',
            },
        },
        {
            variant: 'outlined',
            state: 'isDisabled',
            isDark: true,
            css: {
                '&::placeholder': {
                    color: '$gray600',
                },
                cursor: 'not-allowed',
            },
        },
        {
            variant: 'solid',
            state: 'isDisabled',
            isDark: true,
            css: {
                '&::placeholder': {
                    color: '$gray700',
                },
                cursor: 'not-allowed',
            },
        },
    ],
    variants: {
        variant: {
            solid: {},
            outlined: {},
        },
        size: {
            sm: {
                fontSize: '$footnote',
            },
            md: {
                fontSize: '$bodySm',
            },
            lg: {
                fontSize: '$bodySm',
            },
        },
        state: {
            focused: {},
            isDisabled: {
                '&::placeholder': {
                    color: '$gray500',
                },
                cursor: 'not-allowed',
            },
            value: {},
            default: {},
        },
        pill: {
            true: {
                px: '$3',
                borderRadius: '$pill',
            },
            false: {
                borderRadius: '$sm',
            },
        },
        isDark: {
            true: {
                '&::placeholder': {
                    color: '$gray100',
                },
            },
            false: {},
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5wdXQuc3R5bGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9JbnB1dC9JbnB1dC5zdHlsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXBELE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUU7SUFDcEQsS0FBSyxFQUFFLE1BQU07SUFDYixVQUFVLEVBQUUsU0FBUztJQUNyQixnQkFBZ0IsRUFBRTtRQUNoQjtZQUNFLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLEtBQUs7WUFDZixHQUFHLEVBQUU7Z0JBQ0gsS0FBSyxFQUFFLEtBQUs7YUFDYjtTQUNGO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsSUFBSTtZQUNWLFFBQVEsRUFBRSxLQUFLO1lBQ2YsR0FBRyxFQUFFO2dCQUNILEtBQUssRUFBRSxLQUFLO2FBQ2I7U0FDRjtRQUNEO1lBQ0UsSUFBSSxFQUFFLElBQUk7WUFDVixRQUFRLEVBQUUsS0FBSztZQUNmLEdBQUcsRUFBRTtnQkFDSCxLQUFLLEVBQUUsS0FBSzthQUNiO1NBQ0Y7S0FDRjtJQUNELFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRTtZQUNSLElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsTUFBTTthQUNkO1lBQ0QsS0FBSyxFQUFFLEVBQUU7U0FDVjtRQUNELFVBQVUsRUFBRTtZQUNWLElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUUsYUFBYTthQUN0QjtZQUNELEtBQUssRUFBRSxFQUFFO1NBQ1Y7UUFDRCxJQUFJLEVBQUU7WUFDSixFQUFFLEVBQUUsRUFBRTtZQUNOLEVBQUUsRUFBRSxFQUFFO1lBQ04sRUFBRSxFQUFFLEVBQUU7U0FDUDtLQUNGO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRTtJQUM5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