"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledContainer = void 0;
const stitches_config_1 = require("../Theme/stitches.config");
exports.StyledContainer = (0, stitches_config_1.styled)('div', {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFpbmVyLnN0eWxlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvQ29udGFpbmVyL0NvbnRhaW5lci5zdHlsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsZ0VBQW9EO0FBRXZDLFFBQUEsZUFBZSxHQUFHLElBQUEsd0JBQU0sRUFBQyxLQUFLLEVBQUU7SUFDM0MsQ0FBQyxFQUFFLE1BQU07SUFDVCxFQUFFLEVBQUUsTUFBTTtJQUNWLEVBQUUsRUFBRSxNQUFNO0lBQ1YsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFO1lBQ0YsSUFBSSxFQUFFO2dCQUNKLEVBQUUsRUFBRSxJQUFJO2FBQ1Q7WUFDRCxFQUFFLEVBQUU7Z0JBQ0YsRUFBRSxFQUFFLElBQUk7YUFDVDtZQUNELEVBQUUsRUFBRTtnQkFDRixFQUFFLEVBQUUsSUFBSTthQUNUO1lBQ0QsRUFBRSxFQUFFO2dCQUNGLEVBQUUsRUFBRSxJQUFJO2FBQ1Q7U0FDRjtRQUNELFVBQVUsRUFBRTtZQUNWLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUU7b0JBQ0osUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUI7Z0JBQ0QsS0FBSyxFQUFFO29CQUNMLFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCO2dCQUNELEtBQUssRUFBRTtvQkFDTCxRQUFRLEVBQUUsaUJBQWlCO2lCQUM1QjtnQkFDRCxLQUFLLEVBQUU7b0JBQ0wsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUI7Z0JBQ0QsS0FBSyxFQUFFO29CQUNMLFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCO2dCQUNELEtBQUssRUFBRTtvQkFDTCxRQUFRLEVBQUUsaUJBQWlCO2lCQUM1QjthQUNGO1NBQ0Y7UUFDRCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUU7Z0JBQ0osUUFBUSxFQUFFLE1BQU07YUFDakI7U0FDRjtLQUNGO0NBQ0YsQ0FBQyxDQUFDIn0=