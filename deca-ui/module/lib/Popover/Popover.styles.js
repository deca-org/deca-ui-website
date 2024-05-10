import { styled } from '../Theme/stitches.config';
import { animated } from '@react-spring/web';
export const StyledPopover = styled(animated.div, {
    fontFamily: '$normal',
    p: '$3',
    boxShadow: '$default',
    br: '$sm',
    color: '$text',
    zIndex: '$5',
    variants: {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9wb3Zlci5zdHlsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL1BvcG92ZXIvUG9wb3Zlci5zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFN0MsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFO0lBQ2hELFVBQVUsRUFBRSxTQUFTO0lBQ3JCLENBQUMsRUFBRSxJQUFJO0lBQ1AsU0FBUyxFQUFFLFVBQVU7SUFDckIsRUFBRSxFQUFFLEtBQUs7SUFDVCxLQUFLLEVBQUUsT0FBTztJQUNkLE1BQU0sRUFBRSxJQUFJO0lBQ1osUUFBUSxFQUFFO1FBQ1IsTUFBTSxFQUFFO1lBQ04sSUFBSSxFQUFFO2dCQUNKLEVBQUUsRUFBRSxlQUFlO2FBQ3BCO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLEVBQUUsRUFBRSxnQkFBZ0I7YUFDckI7U0FDRjtLQUNGO0NBQ0YsQ0FBQyxDQUFDIn0=