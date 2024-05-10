"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledInput = exports.StyledInputContainer = exports.StyledInputHelperText = exports.StyledInputLabel = exports.StyledInputMainContainer = void 0;
const stitches_config_1 = require("../Theme/stitches.config");
exports.StyledInputMainContainer = (0, stitches_config_1.styled)('div', {
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
exports.StyledInputLabel = (0, stitches_config_1.styled)('label', {
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
exports.StyledInputHelperText = (0, stitches_config_1.styled)('p', {
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
exports.StyledInputContainer = (0, stitches_config_1.styled)('div', {
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
exports.StyledInput = (0, stitches_config_1.styled)('input', {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5wdXQuc3R5bGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9JbnB1dC9JbnB1dC5zdHlsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsZ0VBQW9EO0FBRXZDLFFBQUEsd0JBQXdCLEdBQUcsSUFBQSx3QkFBTSxFQUFDLEtBQUssRUFBRTtJQUNwRCxLQUFLLEVBQUUsTUFBTTtJQUNiLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLGdCQUFnQixFQUFFO1FBQ2hCO1lBQ0UsSUFBSSxFQUFFLElBQUk7WUFDVixRQUFRLEVBQUUsS0FBSztZQUNmLEdBQUcsRUFBRTtnQkFDSCxLQUFLLEVBQUUsS0FBSzthQUNiO1NBQ0Y7UUFDRDtZQUNFLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLEtBQUs7WUFDZixHQUFHLEVBQUU7Z0JBQ0gsS0FBSyxFQUFFLEtBQUs7YUFDYjtTQUNGO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsSUFBSTtZQUNWLFFBQVEsRUFBRSxLQUFLO1lBQ2YsR0FBRyxFQUFFO2dCQUNILEtBQUssRUFBRSxLQUFLO2FBQ2I7U0FDRjtLQUNGO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFO2dCQUNKLEtBQUssRUFBRSxNQUFNO2FBQ2Q7WUFDRCxLQUFLLEVBQUUsRUFBRTtTQUNWO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsSUFBSSxFQUFFO2dCQUNKLE1BQU0sRUFBRSxhQUFhO2FBQ3RCO1lBQ0QsS0FBSyxFQUFFLEVBQUU7U0FDVjtRQUNELElBQUksRUFBRTtZQUNKLEVBQUUsRUFBRSxFQUFFO1lBQ04sRUFBRSxFQUFFLEVBQUU7WUFDTixFQUFFLEVBQUUsRUFBRTtTQUNQO0tBQ0Y7Q0FDRixDQUFDLENBQUM7QUFFVSxRQUFBLGdCQUFnQixHQUFHLElBQUEsd0JBQU0sRUFBQyxPQUFPLEVBQUU7SUFDOUMsT0FBTyxFQUFFLGNBQWM7SUFDdkIsVUFBVSxFQUFFLFdB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