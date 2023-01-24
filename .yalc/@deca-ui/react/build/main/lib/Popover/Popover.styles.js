"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledPopover = void 0;
const stitches_config_1 = require("../Theme/stitches.config");
const web_1 = require("@react-spring/web");
exports.StyledPopover = (0, stitches_config_1.styled)(web_1.animated.div, {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9wb3Zlci5zdHlsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL1BvcG92ZXIvUG9wb3Zlci5zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGdFQUFvRDtBQUNwRCwyQ0FBNkM7QUFFaEMsUUFBQSxhQUFhLEdBQUcsSUFBQSx3QkFBTSxFQUFDLGNBQVEsQ0FBQyxHQUFHLEVBQUU7SUFDaEQsVUFBVSxFQUFFLFNBQVM7SUFDckIsQ0FBQyxFQUFFLElBQUk7SUFDUCxTQUFTLEVBQUUsVUFBVTtJQUNyQixFQUFFLEVBQUUsS0FBSztJQUNULEtBQUssRUFBRSxPQUFPO0lBQ2QsTUFBTSxFQUFFLElBQUk7SUFDWixRQUFRLEVBQUU7UUFDUixNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUU7Z0JBQ0osRUFBRSxFQUFFLGVBQWU7YUFDcEI7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsRUFBRSxFQUFFLGdCQUFnQjthQUNyQjtTQUNGO0tBQ0Y7Q0FDRixDQUFDLENBQUMifQ==