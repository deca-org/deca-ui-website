"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledModalFooter = exports.StyledModalBody = exports.StyledModalHeader = exports.StyledModalFlexbox = exports.StyledModal = exports.StyledModalOverlay = void 0;
const stitches_config_1 = require("../Theme/stitches.config");
const web_1 = require("@react-spring/web");
const polished_1 = require("polished");
exports.StyledModalOverlay = (0, stitches_config_1.styled)(web_1.animated.div, {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    bg: (0, polished_1.transparentize)(0.4, stitches_config_1.theme.colors.black.value),
    zIndex: '$10',
});
exports.StyledModal = (0, stitches_config_1.styled)(web_1.animated.div, {
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
exports.StyledModalFlexbox = (0, stitches_config_1.styled)('div', {
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
exports.StyledModalHeader = (0, stitches_config_1.styled)('div', {
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
exports.StyledModalBody = (0, stitches_config_1.styled)('div', {
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
exports.StyledModalFooter = (0, stitches_config_1.styled)('div', {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWwuc3R5bGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9Nb2RhbC9Nb2RhbC5zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGdFQUEyRDtBQUMzRCwyQ0FBNkM7QUFDN0MsdUNBQTBDO0FBRTdCLFFBQUEsa0JBQWtCLEdBQUcsSUFBQSx3QkFBTSxFQUFDLGNBQVEsQ0FBQyxHQUFHLEVBQUU7SUFDckQsUUFBUSxFQUFFLE9BQU87SUFDakIsR0FBRyxFQUFFLENBQUM7SUFDTixJQUFJLEVBQUUsQ0FBQztJQUNQLEtBQUssRUFBRSxDQUFDO0lBQ1IsTUFBTSxFQUFFLENBQUM7SUFDVCxFQUFFLEVBQUUsSUFBQSx5QkFBYyxFQUFDLEdBQUcsRUFBRSx1QkFBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQ2pELE1BQU0sRUFBRSxLQUFLO0NBQ2QsQ0FBQyxDQUFDO0FBRVUsUUFBQSxXQUFXLEdBQUcsSUFBQSx3QkFBTSxFQUFDLGNBQVEsQ0FBQyxHQUFHLEVBQUU7SUFDOUMsUUFBUSxFQUFFLE9BQU87SUFDakIsVUFBVSxFQUFFLFNBQVM7SUFDckIsU0FBUyxFQUFFLFVBQVU7SUFDckIsRUFBRSxFQUFFLEtBQUs7SUFDVCxNQUFNLEVBQUUsTUFBTTtJQUNkLEtBQUssRUFBRSxPQUFPO0lBQ2QsUUFBUSxFQUFFO1FBQ1IsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFO2dCQUNKLENBQUMsRUFBRSxJQUFJO2FBQ1I7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsQ0FBQyxFQUFFLElBQUk7YUFDUjtTQUNGO1FBQ0QsTUFBTSxFQUFFO1lBQ04sSUFBSSxFQUFFO2dCQUNKLEVBQUUsRUFBRSxlQUFlO2FBQ3BCO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLEVBQUUsRUFBRSxnQkFBZ0I7YUFDckI7U0FDRjtLQUNGO0NBQ0YsQ0FBQyxDQUFDO0FBRVUsUUFBQSxrQkFBa0IsR0FBRyxJQUFBLHdCQUFNLEVBQUMsS0FBSyxFQUFFO0lBQzlDLE9BQU8sRUFBRSxNQUFNO0lBQ2YsY0FBYyxFQUFFLFFBQVE7SUFDeEIsYUFBYSxFQUFFLFFBQVE7SUFDdkIsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFO2dCQUNKLEdBQUcsRUFBRSxJQUFJO2FBQ1Y7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsR0FBRyxFQUFFLElBQUk7YUFDVjtTQUNGO0tBQ0Y7Q0FDRixDQUFDLENBQUM7QUFFVSxRQUFBLGlCQUFpQixHQUFHLElBQUEsd0JBQU0sRUFBQyxLQUFLLEVBQUU7SUFDN0MsS0FBSyxFQUFFLE9BQU87SUFDZCxPQUFPLEVBQUUsTUFBTTtJQUNmLGNBQWMsRUFBRSxRQUFRO0lBQ3hCLGFBQWEsRUFBRSxRQUFRO0lBQ3ZCLFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRTtnQkFDSixHQUFHLEVBQUUsSUFBSTthQUNWO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLEdBQUcsRUFBRSxJQUFJO2FBQ1Y7U0FDRjtLQUNGO0NBQ0YsQ0FBQyxDQUFDO0FBRVUsUUFBQSxlQUFlLEdBQUcsSUFBQSx3QkFBTSxFQUFDLEtBQUssRUFBRTtJQUMzQyxLQUFLLEVBQUUsT0FBTztJQUNkLE9BQU8sRUFBRSxNQUFNO0lBQ2YsY0FBYyxFQUFFLFFBQVE7SUFDeEIsYUFBYSxFQUFFLFFBQVE7SUFDdkIsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFO2dCQUNKLEdBQUcsRUFBRSxJQUFJO2FBQ1Y7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsR0FBRyxFQUFFLElBQUk7YUFDVjtTQUNGO0tBQ0Y7Q0FDRixDQUFDLENBQUM7QUFFVSxRQUFBLGlCQUFpQixHQUFHLElBQUEsd0JBQU0sRUFBQyxLQUFLLEVBQUU7SUFDN0MsS0FBSyxFQUFFLE9BQU87SUFDZCxPQUFPLEVBQUUsTUFBTTtJQUNmLGNBQWMsRUFBRSxVQUFVO0lBQzFCLGFBQWEsRUFBRSxLQUFLO0lBQ3BCLFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRTtnQkFDSixHQUFHLEVBQUUsSUFBSTthQUNWO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLEdBQUcsRUFBRSxJQUFJO2FBQ1Y7U0FDRjtLQUNGO0NBQ0YsQ0FBQyxDQUFDIn0=