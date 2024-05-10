import { styled } from '../Theme/stitches.config';
export const StyledContainer = styled('div', {
    w: '100%',
    mr: 'auto',
    ml: 'auto',
    variants: {
        px: {
            none: {
                px: '$n',
            },
            sm: {
                px: '$2',
            },
            md: {
                px: '$3',
            },
            lg: {
                px: '$4',
            },
        },
        responsive: {
            true: {
                '@n': {
                    maxWidth: '$breakpoints$xs',
                },
                '@xs': {
                    maxWidth: '$breakpoints$xs',
                },
                '@sm': {
                    maxWidth: '$breakpoints$sm',
                },
                '@md': {
                    maxWidth: '$breakpoints$sm',
                },
                '@lg': {
                    maxWidth: '$breakpoints$md',
                },
                '@xl': {
                    maxWidth: '$breakpoints$lg',
                },
            },
        },
        fluid: {
            true: {
                maxWidth: '100%',
            },
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFpbmVyLnN0eWxlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvQ29udGFpbmVyL0NvbnRhaW5lci5zdHlsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXBELE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFO0lBQzNDLENBQUMsRUFBRSxNQUFNO0lBQ1QsRUFBRSxFQUFFLE1BQU07SUFDVixFQUFFLEVBQUUsTUFBTTtJQUNWLFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRTtZQUNGLElBQUksRUFBRTtnQkFDSixFQUFFLEVBQUUsSUFBSTthQUNUO1lBQ0QsRUFBRSxFQUFFO2dCQUNGLEVBQUUsRUFBRSxJQUFJO2FBQ1Q7WUFDRCxFQUFFLEVBQUU7Z0JBQ0YsRUFBRSxFQUFFLElBQUk7YUFDVDtZQUNELEVBQUUsRUFBRTtnQkFDRixFQUFFLEVBQUUsSUFBSTthQUNUO1NBQ0Y7UUFDRCxVQUFVLEVBQUU7WUFDVixJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFO29CQUNKLFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCO2dCQUNELEtBQUssRUFBRTtvQkFDTCxRQUFRLEVBQUUsaUJBQWlCO2lCQUM1QjtnQkFDRCxLQUFLLEVBQUU7b0JBQ0wsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUI7Z0JBQ0QsS0FBSyxFQUFFO29CQUNMLFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCO2dCQUNELEtBQUssRUFBRTtvQkFDTCxRQUFRLEVBQUUsaUJBQWlCO2lCQUM1QjtnQkFDRCxLQUFLLEVBQUU7b0JBQ0wsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUI7YUFDRjtTQUNGO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFO2dCQUNKLFFBQVEsRUFBRSxNQUFNO2FBQ2pCO1NBQ0Y7S0FDRjtDQUNGLENBQUMsQ0FBQyJ9