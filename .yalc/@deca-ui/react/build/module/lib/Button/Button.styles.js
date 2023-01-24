import { standardColors, styled } from '../Theme/stitches.config';
const compoundVariantComposer = () => {
    const colorVariants = [];
    standardColors.map((color) => {
        colorVariants.push({
            isDisabled: false,
            color: color,
            variant: 'solid',
            css: {
                color: `$${color}-readable`,
                '&:hover': {
                    borderColor: `$${color}-darken-1`,
                    bg: `$${color}-darken-1`,
                },
                '&:active': {
                    borderColor: `$${color}-darken-2`,
                    bg: `$${color}-darken-2`,
                },
            },
        }, {
            isDisabled: true,
            color: color,
            variant: 'solid',
            css: {
                color: `$${color}-readable`,
            },
        }, {
            isDisabled: false,
            color: color,
            variant: 'outlined',
            css: {
                bg: '$transparent',
                '&:hover': {
                    borderColor: 'CurrentColor',
                    color: `$${color}-darken-1`,
                    bg: `$${color}-lighten-6`,
                },
                '&:active': {
                    borderColor: 'CurrentColor',
                    color: `$${color}-darken-2`,
                    bg: `$${color}-lighten-5`,
                },
            },
        }, {
            isDisabled: true,
            color: color,
            variant: 'outlined',
            css: {
                bg: '$transparent',
            },
        }, {
            isDisabled: false,
            color: color,
            variant: 'ghost',
            isDark: false,
            css: {
                bg: '$transparent',
                borderColor: '$transparent',
                '&:hover': {
                    color: `$${color}-darken-1`,
                    borderColor: `$${color}-lighten-8`,
                    bg: `$${color}-lighten-6`,
                },
                '&:active': {
                    color: `$${color}-darken-2`,
                    borderColor: `$${color}-lighten-8`,
                    bg: `$${color}-lighten-5`,
                },
            },
        }, {
            isDisabled: false,
            color: color,
            variant: 'ghost',
            isDark: true,
            css: {
                bg: '$transparent',
                borderColor: '$transparent',
                '&:hover': {
                    color: `$${color}-darken-1`,
                    borderColor: `$${color}-lighten-8`,
                    bg: `$${color}-lighten-5`,
                },
                '&:active': {
                    color: `$${color}-darken-2`,
                    borderColor: `$${color}-lighten-8`,
                    bg: `$${color}-lighten-4`,
                },
            },
        }, {
            isDisabled: true,
            color: color,
            variant: 'ghost',
            css: {
                bg: '$transparent',
                borderColor: '$transparent',
            },
        }, {
            isDisabled: false,
            color: color,
            variant: 'flat',
            isDark: false,
            css: {
                color: color,
                bg: `$${color}-lighten-7`,
                borderColor: `$${color}-lighten-8`,
                '&:hover': {
                    color: `$${color}-darken-1`,
                    borderColor: `$${color}-lighten-8`,
                    bg: `$${color}-lighten-6`,
                },
                '&:active': {
                    color: `$${color}-darken-2`,
                    borderColor: `$${color}-lighten-8`,
                    bg: `$${color}-lighten-5`,
                },
            },
        }, {
            isDisabled: false,
            color: color,
            variant: 'flat',
            isDark: true,
            css: {
                color: color,
                bg: `$${color}-lighten-5`,
                borderColor: `$${color}-lighten-8`,
                '&:hover': {
                    color: `$${color}-darken-1`,
                    borderColor: `$${color}-lighten-8`,
                    bg: `$${color}-lighten-4`,
                },
                '&:active': {
                    color: `$${color}-darken-1`,
                    borderColor: `$${color}-lighten-8`,
                    bg: `$${color}-lighten-3`,
                },
            },
        }, {
            isDisabled: true,
            color: color,
            variant: 'flat',
            css: {
                bg: `$${color}-lighten-7`,
                borderColor: `$${color}-lighten-8`,
            },
        });
    });
    return colorVariants;
};
const StyledButton = styled('button', {
    flexShrink: 0,
    whiteSpace: 'nowrap',
    fontWeight: '$semibold',
    fontFamily: '$normal',
    '-webkit-font-smoothing': 'antialiased',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    borderWidth: '$normal',
    borderStyle: 'solid',
    cursor: 'pointer',
    outline: 0,
    transition: '$default',
    '&:focus-visible': {
        boxShadow: '$a11y',
    },
    compoundVariants: [
        ...compoundVariantComposer(),
        {
            singleIcon: true,
            size: 'sm',
            css: {
                px: '$n',
                size: '$6',
            },
        },
        {
            singleIcon: true,
            size: 'md',
            css: {
                px: '$n',
                size: '$9',
            },
        },
        {
            singleIcon: true,
            size: 'lg',
            css: {
                px: '$n',
                size: '$10',
            },
        },
    ],
    variants: {
        color: {
            primary: {
                bg: '$primary',
                color: '$primary',
                borderColor: '$primary',
            },
            secondary: {
                bg: '$secondary',
                color: '$secondary',
                borderColor: '$secondary',
            },
            success: {
                bg: '$success',
                color: '$success',
                borderColor: '$success',
            },
            warning: {
                bg: '$warning',
                color: '$warning',
                borderColor: '$warning',
            },
            error: {
                bg: '$error',
                color: '$error',
                borderColor: '$error',
            },
        },
        size: {
            sm: {
                px: '$2',
                fontSize: '$caption',
                height: '$6',
            },
            md: {
                px: '$3',
                fontSize: '$bodySm',
                height: '$9',
            },
            lg: {
                px: '$4',
                fontSize: '$body',
                height: '$10',
            },
        },
        singleIcon: {
            true: {},
            false: {},
        },
        variant: {
            solid: {},
            outlined: {},
            ghost: {},
            flat: {},
        },
        isDisabled: {
            true: {
                opacity: 0.5,
                cursor: 'not-allowed',
            },
            false: {
                opacity: 1,
            },
        },
        maxWidth: {
            true: {
                width: '100%',
            },
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
export default StyledButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uLnN0eWxlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvQnV0dG9uL0J1dHRvbi5zdHlsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFPLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUV6RSxNQUFNLHVCQUF1QixHQUFHLEdBQUcsRUFBRTtJQUNuQyxNQUFNLGFBQWEsR0FNYixFQUFFLENBQUM7SUFFVCxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDM0IsYUFBYSxDQUFDLElBQUksQ0FDaEI7WUFDRSxVQUFVLEVBQUUsS0FBSztZQUNqQixLQUFLLEVBQUUsS0FBSztZQUNaLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLEdBQUcsRUFBRTtnQkFDSCxLQUFLLEVBQUUsSUFBSSxLQUFLLFdBQVc7Z0JBQzNCLFNBQVMsRUFBRTtvQkFDVCxXQUFXLEVBQUUsSUFBSSxLQUFLLFdBQVc7b0JBQ2pDLEVBQUUsRUFBRSxJQUFJLEtBQUssV0FBVztpQkFDekI7Z0JBQ0QsVUFBVSxFQUFFO29CQUNWLFdBQVcsRUFBRSxJQUFJLEtBQUssV0FBVztvQkFDakMsRUFBRSxFQUFFLElBQUksS0FBSyxXQUFXO2lCQUN6QjthQUNGO1NBQ0YsRUFDRDtZQUNFLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLEtBQUssRUFBRSxLQUFLO1lBQ1osT0FBTyxFQUFFLE9BQU87WUFDaEIsR0FBRyxFQUFFO2dCQUNILEtBQUssRUFBRSxJQUFJLEtBQUssV0FBVzthQUM1QjtTQUNGLEVBQ0Q7WUFDRSxVQUFVLEVBQUUsS0FBSztZQUNqQixLQUFLLEVBQUUsS0FBSztZQUNaLE9BQU8sRUFBRSxVQUFVO1lBQ25CLEdBQUcsRUFBRTtnQkFDSCxFQUFFLEVBQUUsY0FBYztnQkFDbEIsU0FBUyxFQUFFO29CQUNULFdBQVcsRUFBRSxjQUFjO29CQUMzQixLQUFLLEVBQUUsSUFB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