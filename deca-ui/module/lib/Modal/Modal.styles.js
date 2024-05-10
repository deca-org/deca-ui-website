import { styled, theme } from '../Theme/stitches.config';
import { animated } from '@react-spring/web';
import { transparentize } from 'polished';
export const StyledModalOverlay = styled(animated.div, {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    bg: transparentize(0.4, theme.colors.black.value),
    zIndex: '$10',
});
export const StyledModal = styled(animated.div, {
    position: 'fixed',
    fontFamily: '$normal',
    boxShadow: '$default',
    br: '$sm',
    zIndex: '$max',
    color: '$text',
    variants: {
        noPadding: {
            true: {
                p: '$n',
            },
            false: {
                p: '$3',
            },
        },
        isDark: {
            true: {
                bg: '$popperDarkBg',
            },
            false: {
                bg: '$popperLightBg',
            },
        },
    },
});
export const StyledModalFlexbox = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    variants: {
        autoGap: {
            true: {
                gap: '$4',
            },
            false: {
                gap: '$n',
            },
        },
    },
});
export const StyledModalHeader = styled('div', {
    color: '$text',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    variants: {
        autoGap: {
            true: {
                gap: '$2',
            },
            false: {
                gap: '$n',
            },
        },
    },
});
export const StyledModalBody = styled('div', {
    color: '$text',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    variants: {
        autoGap: {
            true: {
                gap: '$2',
            },
            false: {
                gap: '$n',
            },
        },
    },
});
export const StyledModalFooter = styled('div', {
    color: '$text',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    variants: {
        autoGap: {
            true: {
                gap: '$2',
            },
            false: {
                gap: '$n',
            },
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWwuc3R5bGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9Nb2RhbC9Nb2RhbC5zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFMUMsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUU7SUFDckQsUUFBUSxFQUFFLE9BQU87SUFDakIsR0FBRyxFQUFFLENBQUM7SUFDTixJQUFJLEVBQUUsQ0FBQztJQUNQLEtBQUssRUFBRSxDQUFDO0lBQ1IsTUFBTSxFQUFFLENBQUM7SUFDVCxFQUFFLEVBQUUsY0FBYyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDakQsTUFBTSxFQUFFLEtBQUs7Q0FDZCxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUU7SUFDOUMsUUFBUSxFQUFFLE9BQU87SUFDakIsVUFBVSxFQUFFLFNBQVM7SUFDckIsU0FBUyxFQUFFLFVBQVU7SUFDckIsRUFBRSxFQUFFLEtBQUs7SUFDVCxNQUFNLEVBQUUsTUFBTTtJQUNkLEtBQUssRUFBRSxPQUFPO0lBQ2QsUUFBUSxFQUFFO1FBQ1IsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFO2dCQUNKLENBQUMsRUFBRSxJQUFJO2FBQ1I7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsQ0FBQyxFQUFFLElBQUk7YUFDUjtTQUNGO1FBQ0QsTUFBTSxFQUFFO1lBQ04sSUFBSSxFQUFFO2dCQUNKLEVBQUUsRUFBRSxlQUFlO2FBQ3BCO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLEVBQUUsRUFBRSxnQkFBZ0I7YUFDckI7U0FDRjtLQUNGO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRTtJQUM5QyxPQUFPLEVBQUUsTUFBTTtJQUNmLGNBQWMsRUFBRSxRQUFRO0lBQ3hCLGFBQWEsRUFBRSxRQUFRO0lBQ3ZCLFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRTtnQkFDSixHQUFHLEVBQUUsSUFBSTthQUNWO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLEdBQUcsRUFBRSxJQUFJO2FBQ1Y7U0FDRjtLQUNGO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRTtJQUM3QyxLQUFLLEVBQUUsT0FBTztJQUNkLE9BQU8sRUFBRSxNQUFNO0lBQ2YsY0FBYyxFQUFFLFFBQVE7SUFDeEIsYUFBYSxFQUFFLFFBQVE7SUFDdkIsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFO2dCQUNKLEdBQUcsRUFBRSxJQUFJO2FBQ1Y7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsR0FBRyxFQUFFLElBQUk7YUFDVjtTQUNGO0tBQ0Y7Q0FDRixDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRTtJQUMzQyxLQUFLLEVBQUUsT0FBTztJQUNkLE9BQU8sRUFBRSxNQUFNO0lBQ2YsY0FBYyxFQUFFLFFBQVE7SUFDeEIsYUFBYSxFQUFFLFFBQVE7SUFDdkIsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFO2dCQUNKLEdBQUcsRUFBRSxJQUFJO2FBQ1Y7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsR0FBRyxFQUFFLElBQUk7YUFDVjtTQUNGO0tBQ0Y7Q0FDRixDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFO0lBQzdDLEtBQUssRUFBRSxPQUFPO0lBQ2QsT0FBTyxFQUFFLE1BQU07SUFDZixjQUFjLEVBQUUsVUFBVTtJQUMxQixhQUFhLEVBQUUsS0FBSztJQUNwQixRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUU7Z0JBQ0osR0FBRyxFQUFFLElBQUk7YUFDVjtZQUNELEtBQUssRUFBRTtnQkFDTCxHQUFHLEVBQUUsSUFBSTthQUNWO1NBQ0Y7S0FDRjtDQUNGLENBQUMsQ0FBQyJ9