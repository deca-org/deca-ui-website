import { styled } from '../Theme/stitches.config';
export const StyledBadge = styled('span', {
    transition: '$default',
    fontFamily: '$normal',
    fontWeight: '$bold',
    variants: {
        pill: {
            true: {
                br: '$pill',
            },
            false: {
                br: '$sm',
            },
        },
        size: {
            sm: {
                fontSize: '$caption',
                py: '$1',
                px: '$2',
            },
            md: {
                fontSize: '$bodySm',
                py: '$1',
                paddingRight: 'calc($3 - $1)',
                paddingLeft: 'calc($3 - $1)',
            },
            lg: {
                fontSize: '$body',
                py: '$1',
                px: '$3',
            },
        },
        color: {
            primary: {
                bg: '$primary',
                color: '$primary-readable',
            },
            secondary: {
                bg: '$secondary',
                color: '$secondary-readable',
            },
            success: {
                bg: '$success',
                color: '$success-readable',
            },
            warning: {
                bg: '$warning',
                color: '$warning-readable',
            },
            error: {
                bg: '$error',
                color: '$error-readable',
            },
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFkZ2Uuc3R5bGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9CYWRnZS9CYWRnZS5zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVwRCxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRTtJQUN4QyxVQUFVLEVBQUUsVUFBVTtJQUN0QixVQUFVLEVBQUUsU0FBUztJQUNyQixVQUFVLEVBQUUsT0FBTztJQUNuQixRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUU7Z0JBQ0osRUFBRSxFQUFFLE9BQU87YUFDWjtZQUNELEtBQUssRUFBRTtnQkFDTCxFQUFFLEVBQUUsS0FBSzthQUNWO1NBQ0Y7UUFDRCxJQUFJLEVBQUU7WUFDSixFQUFFLEVBQUU7Z0JBQ0YsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLEVBQUUsRUFBRSxJQUFJO2dCQUNSLEVBQUUsRUFBRSxJQUFJO2FBQ1Q7WUFDRCxFQUFFLEVBQUU7Z0JBQ0YsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLEVBQUUsRUFBRSxJQUFJO2dCQUNSLFlBQVksRUFBRSxlQUFlO2dCQUM3QixXQUFXLEVBQUUsZUFBZTthQUM3QjtZQUNELEVBQUUsRUFBRTtnQkFDRixRQUFRLEVBQUUsT0FBTztnQkFDakIsRUFBRSxFQUFFLElBQUk7Z0JBQ1IsRUFBRSxFQUFFLElBQUk7YUFDVDtTQUNGO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsT0FBTyxFQUFFO2dCQUNQLEVBQUUsRUFBRSxVQUFVO2dCQUNkLEtBQUssRUFBRSxtQkFBbUI7YUFDM0I7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxFQUFFLFlBQVk7Z0JBQ2hCLEtBQUssRUFBRSxxQkFBcUI7YUFDN0I7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsRUFBRSxFQUFFLFVBQVU7Z0JBQ2QsS0FBSyxFQUFFLG1CQUFtQjthQUMzQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxFQUFFLEVBQUUsVUFBVTtnQkFDZCxLQUFLLEVBQUUsbUJBQW1CO2FBQzNCO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLEVBQUUsRUFBRSxRQUFRO2dCQUNaLEtBQUssRUFBRSxpQkFBaUI7YUFDekI7U0FDRjtLQUNGO0NBQ0YsQ0FBQyxDQUFDIn0=