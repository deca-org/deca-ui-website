import { styled } from '../Theme/stitches.config';
import { getStaticColor } from '../Utils';
import { transparentize } from 'polished';
const justifyContentComposer = () => {
    const options = [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
    ];
    const variantObj = [];
    options.map((i) => {
        variantObj.push([
            i,
            { justifyContent: i },
        ]);
    });
    return Object.fromEntries(variantObj);
};
const alignItemsComposer = () => {
    const options = ['flex-start', 'center', 'flex-end'];
    const variantObj = [];
    options.map((i) => {
        variantObj.push([
            i,
            { alignItems: i },
        ]);
    });
    return Object.fromEntries(variantObj);
};
export const StyledGridItem = styled('div', {
    display: 'block',
    boxSizing: 'border-box',
});
export const StyledGridContainer = styled('div', {
    display: 'flex',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    overflow: 'hidden',
    variants: {
        justifyContent: justifyContentComposer(),
        alignItems: alignItemsComposer(),
        spacing: {
            none: {
                m: '$n',
                [`& > ${StyledGridItem}`]: {
                    p: '$n',
                },
            },
            sm: {
                m: '-$1',
                [`& > ${StyledGridItem}`]: {
                    p: '$1',
                },
            },
            md: {
                m: '-$3',
                [`& > ${StyledGridItem}`]: {
                    p: '$3',
                },
            },
            lg: {
                m: '-$5',
                [`& > ${StyledGridItem}`]: {
                    p: '$5',
                },
            },
        },
    },
});
export const StyledGridRuler = styled('div', {
    position: 'absolute',
    top: 0,
    zIndex: -1,
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    width: '100%',
    height: '100vh',
    variants: {
        spacing: {
            none: {
                gap: '$n',
            },
            sm: {
                gap: 'calc($1 * 2)',
            },
            md: {
                gap: 'calc($3 * 2)',
            },
            lg: {
                gap: 'calc($5 * 2)',
            },
        },
    },
});
export const StyledGridRulerItem = styled('div', {
    bg: transparentize(0.75, getStaticColor('gray300')),
    border: `${transparentize(0.75, getStaticColor('gray600'))} solid 1px`,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JpZC5zdHlsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL0dyaWQvR3JpZC5zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFMUMsTUFBTSxzQkFBc0IsR0FBRyxHQUFHLEVBQUU7SUFDbEMsTUFBTSxPQUFPLEdBQUc7UUFDZCxZQUFZO1FBQ1osUUFBUTtRQUNSLFVBQVU7UUFDVixlQUFlO1FBQ2YsY0FBYztRQUNkLGNBQWM7S0FDZixDQUFDO0lBQ0YsTUFBTSxVQUFVLEdBRVosRUFBRSxDQUFDO0lBRVAsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ2hCLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDZCxDQUF5QjtZQUN6QixFQUFFLGNBQWMsRUFBRSxDQUFDLEVBQW9EO1NBQ3hFLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3hDLENBQUMsQ0FBQztBQUVGLE1BQU0sa0JBQWtCLEdBQUcsR0FBRyxFQUFFO0lBQzlCLE1BQU0sT0FBTyxHQUFHLENBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNyRCxNQUFNLFVBQVUsR0FFWixFQUFFLENBQUM7SUFFUCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDaEIsVUFBVSxDQUFDLElBQUksQ0FBQztZQUNkLENBQXlCO1lBQ3pCLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBZ0Q7U0FDaEUsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUU7SUFDMUMsT0FBTyxFQUFFLE9BQU87SUFDaEIsU0FBUyxFQUFFLFlBQVk7Q0FDeEIsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRTtJQUMvQyxPQUFPLEVBQUUsTUFBTTtJQUNmLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLFNBQVMsRUFBRSxZQUFZO0lBQ3ZCLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLFFBQVEsRUFBRTtRQUNSLGNBQWMsRUFBRSxzQkFBc0IsRUFBRTtRQUN4QyxVQUFVLEVBQUUsa0JBQWtCLEVBQUU7UUFDaEMsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFO2dCQUNKLENBQUMsRUFBRSxJQUFJO2dCQUNQLENBQUMsT0FBTyxjQUFjLEVBQUUsQ0FBQyxFQUFFO29CQUN6QixDQUFDLEVBQUUsSUFBSTtpQkFDUjthQUNGO1lBQ0QsRUFBRSxFQUFFO2dCQUNGLENBQUMsRUFBRSxLQUFLO2dCQUNSLENBQUMsT0FBTyxjQUFjLEVBQUUsQ0FBQyxFQUFFO29CQUN6QixDQUFDLEVBQUUsSUFBSTtpQkFDUjthQUNGO1lBQ0QsRUFBRSxFQUFFO2dCQUNGLENBQUMsRUFBRSxLQUFLO2dCQUNSLENBQUMsT0FBTyxjQUFjLEVBQUUsQ0FBQyxFQUFFO29CQUN6QixDQUFDLEVBQUUsSUFBSTtpQkFDUjthQUNGO1lBQ0QsRUFBRSxFQUFFO2dCQUNGLENBQUMsRUFBRSxLQUFLO2dCQUNSLENBQUMsT0FBTyxjQUFjLEVBQUUsQ0FBQyxFQUFFO29CQUN6QixDQUFDLEVBQUUsSUFBSTtpQkFDUjthQUNGO1NBQ0Y7S0FDRjtDQUNGLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFO0lBQzNDLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLEdBQUcsRUFBRSxDQUFDO0lBQ04sTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNWLE9BQU8sRUFBRSxNQUFNO0lBQ2YsbUJBQW1CLEVBQUUsaUJBQWlCO0lBQ3RDLEtBQUssRUFBRSxNQUFNO0lBQ2IsTUFBTSxFQUFFLE9BQU87SUFDZixRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUU7Z0JBQ0osR0FBRyxFQUFFLElBQUk7YUFDVjtZQUNELEVBQUUsRUFBRTtnQkFDRixHQUFHLEVBQUUsY0FBYzthQUNwQjtZQUNELEVBQUUsRUFBRTtnQkFDRixHQUFHLEVBQUUsY0FBYzthQUNwQjtZQUNELEVBQUUsRUFBRTtnQkFDRixHQUFHLEVBQUUsY0FBYzthQUNwQjtTQUNGO0tBQ0Y7Q0FDRixDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFO0lBQy9DLEVBQUUsRUFBRSxjQUFjLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxNQUFNLEVBQUUsR0FBRyxjQUFjLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZO0NBQ3ZFLENBQUMsQ0FBQyJ9