import { styled } from '../Theme/stitches.config';
import React from 'react';
const StyledButtonIcon = styled('span', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    '& svg': {
        background: 'transparent',
    },
    compoundVariants: [
        {
            isSingle: false,
            side: 'left',
            css: {
                mr: '$1',
            },
        },
        {
            isSingle: false,
            side: 'right',
            css: {
                ml: '$1',
            },
        },
        {
            isSingle: true,
            size: 'sm',
            css: {
                '& svg': {
                    height: 'calc(100% - $0)',
                    width: '100%',
                },
            },
        },
    ],
    variants: {
        size: {
            sm: {
                '& svg': {
                    height: 'calc(100% - $1)',
                    width: '100%',
                },
            },
            md: {
                '& svg': {
                    height: 'calc(100% - $2)',
                    width: '100%',
                },
            },
            lg: {
                '& svg': {
                    height: 'calc(100% - $3)',
                    width: '100%',
                },
            },
        },
        isSingle: {
            true: {
                '& svg': {
                    height: 'calc(100% - $2)',
                    width: '100%',
                },
            },
            false: {},
        },
        side: {
            left: {},
            right: {},
        },
    },
});
const ButtonIcon = ({ children, className, css, size, isSingle, side, ...props }) => (React.createElement(StyledButtonIcon, { className: className, css: css, size: size, isSingle: isSingle, side: side, ...props }, children));
export default ButtonIcon;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uSWNvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvQnV0dG9uL0J1dHRvbkljb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBTyxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RCxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFFMUIsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFO0lBQ3RDLE9BQU8sRUFBRSxNQUFNO0lBQ2YsY0FBYyxFQUFFLFFBQVE7SUFDeEIsVUFBVSxFQUFFLFFBQVE7SUFDcEIsTUFBTSxFQUFFLE1BQU07SUFDZCxPQUFPLEVBQUU7UUFDUCxVQUFVLEVBQUUsYUFBYTtLQUMxQjtJQUNELGdCQUFnQixFQUFFO1FBQ2hCO1lBQ0UsUUFBUSxFQUFFLEtBQUs7WUFDZixJQUFJLEVBQUUsTUFBTTtZQUNaLEdBQUcsRUFBRTtnQkFDSCxFQUFFLEVBQUUsSUFBSTthQUNUO1NBQ0Y7UUFDRDtZQUNFLFFBQVEsRUFBRSxLQUFLO1lBQ2YsSUFBSSxFQUFFLE9BQU87WUFDYixHQUFHLEVBQUU7Z0JBQ0gsRUFBRSxFQUFFLElBQUk7YUFDVDtTQUNGO1FBQ0Q7WUFDRSxRQUFRLEVBQUUsSUFBSTtZQUNkLElBQUksRUFBRSxJQUFJO1lBQ1YsR0FBRyxFQUFFO2dCQUNILE9BQU8sRUFBRTtvQkFDUCxNQUFNLEVBQUUsaUJBQWlCO29CQUN6QixLQUFLLEVBQUUsTUFBTTtpQkFDZDthQUNGO1NBQ0Y7S0FDRjtJQUNELFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRTtZQUNKLEVBQUUsRUFBRTtnQkFDRixPQUFPLEVBQUU7b0JBQ1AsTUFBTSxFQUFFLGlCQUFpQjtvQkFDekIsS0FBSyxFQUFFLE1BQU07aUJBQ2Q7YUFDRjtZQUNELEVBQUUsRUFBRTtnQkFDRixPQUFPLEVBQUU7b0JBQ1AsTUFBTSxFQUFFLGlCQUFpQjtvQkFDekIsS0FBSyxFQUFFLE1BQU07aUJBQ2Q7YUFDRjtZQUNELEVBQUUsRUFBRTtnQkFDRixPQUFPLEVBQUU7b0JBQ1AsTUFBTSxFQUFFLGlCQUFpQjtvQkFDekIsS0FBSyxFQUFFLE1BQU07aUJBQ2Q7YUFDRjtTQUNGO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFO2dCQUNKLE9BQU8sRUFBRTtvQkFDUCxNQUFNLEVBQUUsaUJBQWlCO29CQUN6QixLQUFLLEVBQUUsTUFBTTtpQkFDZDthQUNGO1lBQ0QsS0FBSyxFQUFFLEVBQUU7U0FDVjtRQUNELElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxFQUFFO1lBQ1IsS0FBSyxFQUFFLEVBQUU7U0FDVjtLQUNGO0NBQ0YsQ0FBQyxDQUFDO0FBV0gsTUFBTSxVQUFVLEdBQUcsQ0FBQyxFQUNsQixRQUFRLEVBQ1IsU0FBUyxFQUNULEdBQUcsRUFDSCxJQUFJLEVBQ0osUUFBUSxFQUNSLElBQUksRUFDSixHQUFHLEtBQUssRUFDUSxFQUFFLEVBQUUsQ0FBQyxDQUNyQixvQkFBQyxnQkFBZ0IsSUFDZixTQUFTLEVBQUUsU0FBUyxFQUNwQixHQUFHLEVBQUUsR0FBRyxFQUNSLElBQUksRUFBRSxJQUFJLEVBQ1YsUUFBUSxFQUFFLFFBQVEsRUFDbEIsSUFBSSxFQUFFLElBQUksS0FDTixLQUFLLElBRVIsUUFBUSxDQUNRLENBQ3BCLENBQUM7QUFFRixlQUFlLFVBQVUsQ0FBQyJ9