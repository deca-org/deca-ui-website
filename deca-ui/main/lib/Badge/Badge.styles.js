"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledBadge = void 0;
const stitches_config_1 = require("../Theme/stitches.config");
exports.StyledBadge = (0, stitches_config_1.styled)('span', {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFkZ2Uuc3R5bGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9CYWRnZS9CYWRnZS5zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGdFQUFvRDtBQUV2QyxRQUFBLFdBQVcsR0FBRyxJQUFBLHdCQUFNLEVBQUMsTUFBTSxFQUFFO0lBQ3hDLFVBQVUsRUFBRSxVQUFVO0lBQ3RCLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLFVBQVUsRUFBRSxPQUFPO0lBQ25CLFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRTtZQUNKLElBQUksRUFBRTtnQkFDSixFQUFFLEVBQUUsT0FBTzthQUNaO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLEVBQUUsRUFBRSxLQUFLO2FBQ1Y7U0FDRjtRQUNELElBQUksRUFBRTtZQUNKLEVBQUUsRUFBRTtnQkFDRixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsRUFBRSxFQUFFLElBQUk7Z0JBQ1IsRUFBRSxFQUFFLElBQUk7YUFDVDtZQUNELEVBQUUsRUFBRTtnQkFDRixRQUFRLEVBQUUsU0FBUztnQkFDbkIsRUFBRSxFQUFFLElBQUk7Z0JBQ1IsWUFBWSxFQUFFLGVBQWU7Z0JBQzdCLFdBQVcsRUFBRSxlQUFlO2FBQzdCO1lBQ0QsRUFBRSxFQUFFO2dCQUNGLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixFQUFFLEVBQUUsSUFBSTtnQkFDUixFQUFFLEVBQUUsSUFBSTthQUNUO1NBQ0Y7UUFDRCxLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUU7Z0JBQ1AsRUFBRSxFQUFFLFVBQVU7Z0JBQ2QsS0FBSyxFQUFFLG1CQUFtQjthQUMzQjtZQUNELFNBQVMsRUFBRTtnQkFDVCxFQUFFLEVBQUUsWUFBWTtnQkFDaEIsS0FBSyxFQUFFLHFCQUFxQjthQUM3QjtZQUNELE9BQU8sRUFBRTtnQkFDUCxFQUFFLEVBQUUsVUFBVTtnQkFDZCxLQUFLLEVBQUUsbUJBQW1CO2FBQzNCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLEVBQUUsRUFBRSxVQUFVO2dCQUNkLEtBQUssRUFBRSxtQkFBbUI7YUFDM0I7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsRUFBRSxFQUFFLFFBQVE7Z0JBQ1osS0FBSyxFQUFFLGlCQUFpQjthQUN6QjtTQUNGO0tBQ0Y7Q0FDRixDQUFDLENBQUMifQ==