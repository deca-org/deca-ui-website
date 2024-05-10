"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stitches_config_1 = require("../Theme/stitches.config");
const compoundVariantComposer = () => {
    const colorVariants = [];
    stitches_config_1.standardColors.map((color) => {
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
const StyledButton = (0, stitches_config_1.styled)('button', {
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
exports.default = StyledButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uLnN0eWxlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvQnV0dG9uL0J1dHRvbi5zdHlsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnRUFBeUU7QUFFekUsTUFBTSx1QkFBdUIsR0FBRyxHQUFHLEVBQUU7SUFDbkMsTUFBTSxhQUFhLEdBTWIsRUFBRSxDQUFDO0lBRVQsZ0NBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUMzQixhQUFhLENBQUMsSUFBSSxDQUNoQjtZQUNFLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLEtBQUssRUFBRSxLQUFLO1lBQ1osT0FBTyxFQUFFLE9BQU87WUFDaEIsR0FBRyxFQUFFO2dCQUNILEtBQUssRUFBRSxJQUFJLEtBQUssV0FBVztnQkFDM0IsU0FBUyxFQUFFO29CQUNULFdBQVcsRUFBRSxJQUFJLEtBQUssV0FBVztvQkFDakMsRUFBRSxFQUFFLElBQUksS0FBSyxXQUFXO2lCQUN6QjtnQkFDRCxVQUFVLEVBQUU7b0JBQ1YsV0FBVyxFQUFFLElBQUksS0FBSyxXQUFXO29CQUNqQyxFQUFFLEVBQUUsSUFBSSxLQUFLLFdBQVc7aUJBQ3pCO2FBQ0Y7U0FDRixFQUNEO1lBQ0UsVUFBVSxFQUFFLElBQUk7WUFDaEIsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPLEVBQUUsT0FBTztZQUNoQixHQUFHLEVBQUU7Z0JBQ0gsS0FBSyxFQUFFLElBQUksS0FBSyxXQUFXO2FBQzVCO1NBQ0YsRUFDRDtZQUNFLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLEtBQUssRUFBRSxLQUFLO1lBQ1osT0FBTyxFQUFFLFVBQVU7WUFDbkIsR0FBRyxFQUFFO2dCQUNILEVBQUUsRUFBRSxjQUFjO2dCQUNsQixTQUFTLEVBQUU7b0JBQ1QsV0FBVyxFQUFFLGNBQWM7b0JBQzNCLEtBQUssRUFBRSxJQUFJLEtBQUssV0FBVztvQkFDM0IsRUFBRSxFQUFFLElBQUksS0FBSyxZQUFZO2lCQUMxQjtnQkFDRCxVQUFVLEVBQUU7b0JBQ1YsV0FBVyxFQUFFLGNBQWM7b0JBQzNCLEtBQUssRUFBRSxJQUFJLEtBQUssV0FBVztvQkFDM0IsRUFBRSxFQUFFLElBQUksS0FBSyxZQUFZO2lCQUMxQjthQUNGO1NBQ0YsRUFDRDtZQUNFLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLEtBQUssRUFBRSxLQUFLO1lBQ1osT0FBTyxFQUFFLFVBQVU7WUFDbkIsR0FBRyxFQUFFO2dCQUNILEVBQUUsRUFBRSxjQUFjO2FBQ25CO1NBQ0YsRUFDRDtZQUNFLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLEtBQUssRUFBRSxLQUFLO1lBQ1osT0FBTyxFQUFFLE9BQU87WUFDaEIsTUFBTSxFQUFFLEtBQUs7WUFDYixHQUFHLEVBQUU7Z0JBQ0gsRUFBRSxFQUFFLGNBQWM7Z0JBQ2xCLFdBQVcsRUFBRSxjQUFjO2dCQUMzQixTQUFTLEVBQUU7b0JBQ1QsS0FBSyxFQUFFLElBQUksS0FBSyxXQUFXO29CQUMzQixXQUFXLEVBQUUsSUFBSSxLQUFLLFlBQVk7b0JBQ2xDLEVBQUUsRUFBRSxJQUFJLEtBQUssWUFBWTtpQkFDMUI7Z0JBQ0QsVUFBVSxFQUFFO29CQUNWLEtBQUssRUFBRSxJQUFJLEtBQUssV0FBVztvQkFDM0IsV0FBVyxFQUFFLElBQUksS0FBSyxZQUFZO29CQUNsQyxFQUFFLEVBQUUsSUFBSSxLQUFLLFlBQVk7aUJBQzFCO2FBQ0Y7U0FDRixFQUNEO1lBQ0UsVUFBVSxFQUFFLEtBQUs7WUFDakIsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPLEVBQUUsT0FBTztZQUNoQixNQUFNLEVBQUUsSUFBSTtZQUNaLEdBQUcsRUFBRTtnQkFDSCxFQUFFLEVBQUUsY0FBYztnQkFDbEIsV0FBVyxFQUFFLGNBQWM7Z0JBQzNCLFNBQVMsRUFBRTtvQkFDVCxLQUFLLEVBQUUsSUFBSSxLQUFLLFdBQVc7b0JBQzNCLFdBQVcsRUFBRSxJQUFJLEtBQUssWUFBWTtvQkFDbEMsRUFBRSxFQUFFLElBQUksS0FBSyxZQUFZO2lCQUMxQjtnQkFDRCxVQUFVLEVBQUU7b0JBQ1YsS0FBSyxFQUFFLElBQUksS0FBSyxXQUFXO29CQUMzQixXQUFXLEVBQUUsSUFBSSxLQUFLLFlBQVk7b0JBQ2xDLEVBQUUsRUFBRSxJQUFJLEtBQUssWUFBWTtpQkFDMUI7YUFDRjtTQUNGLEVBQ0Q7WUFDRSxVQUFVLEVBQUUsSUFBSTtZQUNoQixLQUFLLEVBQUUsS0FBSztZQUNaLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLEdBQUcsRUFBRTtnQkFDSCxFQUFFLEVBQUUsY0FBYztnQkFDbEIsV0FBVyxFQUFFLGNBQWM7YUFDNUI7U0FDRixFQUNEO1lBQ0UsVUFBVSxFQUFFLEtBQUs7WUFDakIsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPLEVBQUUsTUFBTTtZQUNmLE1BQU0sRUFBRSxLQUFLO1lBQ2IsR0FBRyxFQUFFO2dCQUNILEtBQUssRUFBRSxLQUFLO2dCQUNaLEVBQUUsRUFBRSxJQUFJLEtBQUssWUFBWTtnQkFDekIsV0FBVyxFQUFFLElBQUksS0FBSyxZQUFZO2dCQUNsQyxTQUFTLEVBQUU7b0JBQ1QsS0FBSyxFQUFFLElBQUksS0FBSyxXQUFXO29CQUMzQixXQUFXLEVBQUUsSUFBSSxLQUFLLFlBQVk7b0JBQ2xDLEVBQUUsRUFBRSxJQUFJLEtBQUssWUFBWTtpQkFDMUI7Z0JBQ0QsVUFBVSxFQUFFO29CQUNWLEtBQUssRUFBRSxJQUFJLEtBQUssV0FBVztvQkFDM0IsV0FBVyxFQUFFLElBQUksS0FBSyxZQUFZO29CQUNsQyxFQUFFLEVBQUUsSUFBSSxLQUFLLFlBQVk7aUJBQzFCO2FBQ0Y7U0FDRixFQUNEO1lBQ0UsVUFBVSxFQUFFLEtBQUs7WUFDakIsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPLEVBQUUsTUFBTTtZQUNmLE1BQU0sRUFBRSxJQUFJO1lBQ1osR0FBRyxFQUFFO2dCQUNILEtBQUssRUFBRSxLQUFLO2dCQUNaLEVBQUUsRUFBRSxJQUFJLEtBQUssWUFBWTtnQkFDekIsV0FBVyxFQUFFLElBQUksS0FBSyxZQUFZO2dCQUNsQyxTQUFTLEVBQUU7b0JBQ1QsS0FBSyxFQUFFLElBQUksS0FBSyxXQUFXO29CQUMzQixXQUFXLEVBQUUsSUFBSSxLQUFLLFlBQVk7b0JBQ2xDLEVBQUUsRUFBRSxJQUFJLEtBQUssWUFBWTtpQkFDMUI7Z0JBQ0QsVUFBVSxFQUFFO29CQUNWLEtBQUssRUFBRSxJQUFJLEtBQUssV0FBVztvQkFDM0IsV0FBVyxFQUFFLElBQUksS0FBSyxZQUFZO29CQUNsQyxFQUFFLEVBQUUsSUFBSSxLQUFLLFlBQVk7aUJBQzFCO2FBQ0Y7U0FDRixFQUNEO1lBQ0UsVUFBVSxFQUFFLElBQUk7WUFDaEIsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPLEVBQUUsTUFBTTtZQUNmLEdBQUcsRUFBRTtnQkFDSCxFQUFFLEVBQUUsSUFBSSxLQUFLLFlBQVk7Z0JBQ3pCLFdBQVcsRUFBRSxJQUFJLEtBQUssWUFBWTthQUNuQztTQUNGLENBQ0YsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxhQUFhLENBQUM7QUFDdkIsQ0FBQyxDQUFDO0FBRUYsTUFBTSxZQUFZLEdBQUcsSUFBQSx3QkFBTSxFQUFDLFFBQVEsRUFBRTtJQUNwQyxVQUFVLEVBQUUsQ0FBQztJQUNiLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLFVBQVUsRUFBRSxXQUFXO0lBQ3ZCLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLHdCQUF3QixFQUFFLGFBQWE7SUFDdkMsT0FBTyxFQUFFLE1BQU07SUFDZixVQUFVLEVBQUUsUUFBUTtJQUNwQixjQUFjLEVBQUUsUUFBUTtJQUN4QixTQUFTLEVBQUUsWUFBWTtJQUN2QixXQUFXLEVBQUUsU0FBUztJQUN0QixXQUFXLEVBQUUsT0FBTztJQUNwQixNQUFNLEVBQUUsU0FBUztJQUNqQixPQUFPLEVBQUUsQ0FBQztJQUNWLFVBQVUsRUFBRSxVQUFVO0lBQ3RCLGlCQUFpQixFQUFFO1FBQ2pCLFNBQVMsRUFBRSxPQUFPO0tBQ25CO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDaEIsR0FBRyx1QkFBdUIsRUFBRTtRQUM1QjtZQUNFLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLElBQUksRUFBRSxJQUFJO1lBQ1YsR0FBRyxFQUFFO2dCQUNILEVBQUUsRUFBRSxJQUFJO2dCQUNSLElBQUksRUFBRSxJQUFJO2FBQ1g7U0FDRjtRQUNEO1lBQ0UsVUFBVSxFQUFFLElBQUk7WUFDaEIsSUFBSSxFQUFFLElBQUk7WUFDVixHQUFHLEVBQUU7Z0JBQ0gsRUFBRSxFQUFFLElBQUk7Z0JBQ1IsSUFBSSxFQUFFLElBQUk7YUFDWDtTQUNGO1FBQ0Q7WUFDRSxVQUFVLEVBQUUsSUFBSTtZQUNoQixJQUFJLEVBQUUsSUFBSTtZQUNWLEdBQUcsRUFBRTtnQkFDSCxFQUFFLEVBQUUsSUFBSTtnQkFDUixJQUFJLEVBQUUsS0FBSzthQUNaO1NBQ0Y7S0FDRjtJQUNELFFBQVEsRUFBRTtRQUNSLEtBQUssRUFBRTtZQUNMLE9BQU8sRUFBRTtnQkFDUCxFQUFFLEVBQUUsVUFBVTtnQkFDZCxLQUFLLEVBQUUsVUFBVTtnQkFDakIsV0FBVyxFQUFFLFVBQVU7YUFDeEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxFQUFFLFlBQVk7Z0JBQ2hCLEtBQUssRUFBRSxZQUFZO2dCQUNuQixXQUFXLEVBQUUsWUFBWTthQUMxQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxFQUFFLEVBQUUsVUFBVTtnQkFDZCxLQUFLLEVBQUUsVUFBVTtnQkFDakIsV0FBVyxFQUFFLFVBQVU7YUFDeEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsRUFBRSxFQUFFLFVBQVU7Z0JBQ2QsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLFdBQVcsRUFBRSxVQUFVO2FBQ3hCO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLEVBQUUsRUFBRSxRQUFRO2dCQUNaLEtBQUssRUFBRSxRQUFRO2dCQUNmLFdBQVcsRUFBRSxRQUFRO2FBQ3RCO1NBQ0Y7UUFDRCxJQUFJLEVBQUU7WUFDSixFQUFFLEVBQUU7Z0JBQ0YsRUFBRSxFQUFFLElBQUk7Z0JBQ1IsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLE1BQU0sRUFBRSxJQUFJO2FBQ2I7WUFDRCxFQUFFLEVBQUU7Z0JBQ0YsRUFBRSxFQUFFLElBQUk7Z0JBQ1IsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLE1BQU0sRUFBRSxJQUFJO2FBQ2I7WUFDRCxFQUFFLEVBQUU7Z0JBQ0YsRUFBRSxFQUFFLElBQUk7Z0JBQ1IsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLE1BQU0sRUFBRSxLQUFLO2FBQ2Q7U0FDRjtRQUNELFVBQVUsRUFBRTtZQUNWLElBQUksRUFBRSxFQUFFO1lBQ1IsS0FBSyxFQUFFLEVBQUU7U0FDVjtRQUNELE9BQU8sRUFBRTtZQUNQLEtBQUssRUFBRSxFQUFFO1lBQ1QsUUFBUSxFQUFFLEVBQUU7WUFDWixLQUFLLEVBQUUsRUFBRTtZQUNULElBQUksRUFBRSxFQUFFO1NBQ1Q7UUFDRCxVQUFVLEVBQUU7WUFDVixJQUFJLEVBQUU7Z0JBQ0osT0FBTyxFQUFFLEdBQUc7Z0JBQ1osTUFBTSxFQUFFLGFBQWE7YUFDdEI7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsT0FBTyxFQUFFLENBQUM7YUFDWDtTQUNGO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFO2dCQUNKLEtBQUssRUFBRSxNQUFNO2FBQ2Q7U0FDRjtRQUNELElBQUksRUFBRTtZQUNKLElBQUksRUFBRTtnQkFDSixZQUFZLEVBQUUsT0FBTzthQUN0QjtZQUNELEtBQUssRUFBRTtnQkFDTCxZQUFZLEVBQUUsS0FBSzthQUNwQjtTQUNGO1FBQ0QsTUFBTSxFQUFFO1lBQ04sSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsRUFBRTtTQUNWO0tBQ0Y7Q0FDRixDQUFDLENBQUM7QUFFSCxrQkFBZSxZQUFZLENBQUMifQ==