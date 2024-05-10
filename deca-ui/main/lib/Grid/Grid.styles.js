"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledGridRulerItem = exports.StyledGridRuler = exports.StyledGridContainer = exports.StyledGridItem = void 0;
const stitches_config_1 = require("../Theme/stitches.config");
const Utils_1 = require("../Utils");
const polished_1 = require("polished");
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
exports.StyledGridItem = (0, stitches_config_1.styled)('div', {
    display: 'block',
    boxSizing: 'border-box',
});
exports.StyledGridContainer = (0, stitches_config_1.styled)('div', {
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
                [`& > ${exports.StyledGridItem}`]: {
                    p: '$n',
                },
            },
            sm: {
                m: '-$1',
                [`& > ${exports.StyledGridItem}`]: {
                    p: '$1',
                },
            },
            md: {
                m: '-$3',
                [`& > ${exports.StyledGridItem}`]: {
                    p: '$3',
                },
            },
            lg: {
                m: '-$5',
                [`& > ${exports.StyledGridItem}`]: {
                    p: '$5',
                },
            },
        },
    },
});
exports.StyledGridRuler = (0, stitches_config_1.styled)('div', {
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
exports.StyledGridRulerItem = (0, stitches_config_1.styled)('div', {
    bg: (0, polished_1.transparentize)(0.75, (0, Utils_1.getStaticColor)('gray300')),
    border: `${(0, polished_1.transparentize)(0.75, (0, Utils_1.getStaticColor)('gray600'))} solid 1px`,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JpZC5zdHlsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL0dyaWQvR3JpZC5zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGdFQUFvRDtBQUNwRCxzQ0FBNEM7QUFDNUMsdUNBQTBDO0FBRTFDLE1BQU0sc0JBQXNCLEdBQUcsR0FBRyxFQUFFO0lBQ2xDLE1BQU0sT0FBTyxHQUFHO1FBQ2QsWUFBWTtRQUNaLFFBQVE7UUFDUixVQUFVO1FBQ1YsZUFBZTtRQUNmLGNBQWM7UUFDZCxjQUFjO0tBQ2YsQ0FBQztJQUNGLE1BQU0sVUFBVSxHQUVaLEVBQUUsQ0FBQztJQUVQLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUNoQixVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ2QsQ0FBeUI7WUFDekIsRUFBRSxjQUFjLEVBQUUsQ0FBQyxFQUFvRDtTQUN4RSxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN4QyxDQUFDLENBQUM7QUFFRixNQUFNLGtCQUFrQixHQUFHLEdBQUcsRUFBRTtJQUM5QixNQUFNLE9BQU8sR0FBRyxDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDckQsTUFBTSxVQUFVLEdBRVosRUFBRSxDQUFDO0lBRVAsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ2hCLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDZCxDQUF5QjtZQUN6QixFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQWdEO1NBQ2hFLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3hDLENBQUMsQ0FBQztBQUVXLFFBQUEsY0FBYyxHQUFHLElBQUEsd0JBQU0sRUFBQyxLQUFLLEVBQUU7SUFDMUMsT0FBTyxFQUFFLE9BQU87SUFDaEIsU0FBUyxFQUFFLFlBQVk7Q0FDeEIsQ0FBQyxDQUFDO0FBRVUsUUFBQSxtQkFBbUIsR0FBRyxJQUFBLHdCQUFNLEVBQUMsS0FBSyxFQUFFO0lBQy9DLE9BQU8sRUFBRSxNQUFNO0lBQ2YsUUFBUSxFQUFFLE1BQU07SUFDaEIsU0FBUyxFQUFFLFlBQVk7SUFDdkIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFO1FBQ1IsY0FBYyxFQUFFLHNCQUFzQixFQUFFO1FBQ3hDLFVBQVUsRUFBRSxrQkFBa0IsRUFBRTtRQUNoQyxPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUU7Z0JBQ0osQ0FBQyxFQUFFLElBQUk7Z0JBQ1AsQ0FBQyxPQUFPLHNCQUFjLEVBQUUsQ0FBQyxFQUFFO29CQUN6QixDQUFDLEVBQUUsSUFBSTtpQkFDUjthQUNGO1lBQ0QsRUFBRSxFQUFFO2dCQUNGLENBQUMsRUFBRSxLQUFLO2dCQUNSLENBQUMsT0FBTyxzQkFBYyxFQUFFLENBQUMsRUFBRTtvQkFDekIsQ0FBQyxFQUFFLElBQUk7aUJBQ1I7YUFDRjtZQUNELEVBQUUsRUFBRTtnQkFDRixDQUFDLEVBQUUsS0FBSztnQkFDUixDQUFDLE9BQU8sc0JBQWMsRUFBRSxDQUFDLEVBQUU7b0JBQ3pCLENBQUMsRUFBRSxJQUFJO2lCQUNSO2FBQ0Y7WUFDRCxFQUFFLEVBQUU7Z0JBQ0YsQ0FBQyxFQUFFLEtBQUs7Z0JBQ1IsQ0FBQyxPQUFPLHNCQUFjLEVBQUUsQ0FBQyxFQUFFO29CQUN6QixDQUFDLEVBQUUsSUFBSTtpQkFDUjthQUNGO1NBQ0Y7S0FDRjtDQUNGLENBQUMsQ0FBQztBQUVVLFFBQUEsZUFBZSxHQUFHLElBQUEsd0JBQU0sRUFBQyxLQUFLLEVBQUU7SUFDM0MsUUFBUSxFQUFFLFVBQVU7SUFDcEIsR0FBRyxFQUFFLENBQUM7SUFDTixNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ1YsT0FBTyxFQUFFLE1BQU07SUFDZixtQkFBbUIsRUFBRSxpQkFBaUI7SUFDdEMsS0FBSyxFQUFFLE1BQU07SUFDYixNQUFNLEVBQUUsT0FBTztJQUNmLFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRTtnQkFDSixHQUFHLEVBQUUsSUFBSTthQUNWO1lBQ0QsRUFBRSxFQUFFO2dCQUNGLEdBQUcsRUFBRSxjQUFjO2FBQ3BCO1lBQ0QsRUFBRSxFQUFFO2dCQUNGLEdBQUcsRUFBRSxjQUFjO2FBQ3BCO1lBQ0QsRUFBRSxFQUFFO2dCQUNGLEdBQUcsRUFBRSxjQUFjO2FBQ3BCO1NBQ0Y7S0FDRjtDQUNGLENBQUMsQ0FBQztBQUVVLFFBQUEsbUJBQW1CLEdBQUcsSUFBQSx3QkFBTSxFQUFDLEtBQUssRUFBRTtJQUMvQyxFQUFFLEVBQUUsSUFBQSx5QkFBYyxFQUFDLElBQUksRUFBRSxJQUFBLHNCQUFjLEVBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkQsTUFBTSxFQUFFLEdBQUcsSUFBQSx5QkFBYyxFQUFDLElBQUksRUFBRSxJQUFBLHNCQUFjLEVBQUMsU0FBUyxDQUFDLENBQUMsWUFBWTtDQUN2RSxDQUFDLENBQUMifQ==