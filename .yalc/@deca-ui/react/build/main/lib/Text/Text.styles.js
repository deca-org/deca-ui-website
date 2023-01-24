"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stitches_config_1 = require("../Theme/stitches.config");
const StyledText = (0, stitches_config_1.styled)('p', {
    m: '$n',
    variants: {
        weight: {
            hairline: {
                fontWeight: '$hairline',
            },
            thin: {
                fontWeight: '$thin',
            },
            light: {
                fontWeight: '$light',
            },
            normal: {
                fontWeight: '$normal',
            },
            medium: {
                fontWeight: '$medium',
            },
            semibold: {
                fontWeight: '$semibold',
            },
            bold: {
                fontWeight: '$bold',
            },
            extrabold: {
                fontWeight: '$extrabold',
            },
            black: {
                fontWeight: '$black',
            },
        },
        as: {
            h1: {
                fontSize: '$h1',
                lineHeight: '$6',
            },
            h2: {
                fontSize: '$h2',
                lineHeight: '$5',
            },
            h3: {
                fontSize: '$h3',
                lineHeight: '$4',
            },
            h4: {
                fontSize: '$h4',
                lineHeight: '$3',
            },
            h5: {
                fontSize: '$h5',
                lineHeight: '$2',
            },
            h6: {
                fontSize: '$h6',
                lineHeight: '$2',
            },
            p: {
                fontSize: '$body',
                lineHeight: '$1',
            },
            span: {
                fontSize: '$body',
                lineHeight: '$1',
            },
            blockquote: {
                fontSize: '$body',
                lineHeight: '$1',
                ml: '$4',
            },
            b: {
                fontSize: '$body',
                lineHeight: '$1',
            },
            small: {
                fontSize: '$caption',
                lineHeight: '$0',
            },
            del: {
                fontSize: '$body',
                lineHeight: '$1',
            },
            i: {
                fontSize: '$body',
                lineHeight: '$1',
            },
            em: {
                fontSize: '$body',
                lineHeight: '$1',
            },
        },
        size: {
            h1: {
                fontSize: '$h1',
                lineHeight: '$6',
            },
            h2: {
                fontSize: '$h2',
                lineHeight: '$5',
            },
            h3: {
                fontSize: '$h3',
                lineHeight: '$4',
            },
            h4: {
                fontSize: '$h4',
                lineHeight: '$3',
            },
            h5: {
                fontSize: '$h5',
                lineHeight: '$2',
            },
            h6: {
                fontSize: '$h6',
                lineHeight: '$2',
            },
            body: {
                fontSize: '$body',
                lineHeight: '$1',
            },
            bodySm: {
                fontSize: '$bodySm',
                lineHeight: '$1',
            },
            caption: {
                fontSize: '$caption',
                lineHeight: '$1',
            },
            footnote: {
                fontSize: '$footnote',
                lineHeight: '$0',
            },
        },
        lineHeight: {
            n: {
                lineHeight: '$n',
            },
            0: {
                lineHeight: '$0',
            },
            1: {
                lineHeight: '$1',
            },
            2: {
                lineHeight: '$2',
            },
            3: {
                lineHeight: '$3',
            },
            4: {
                lineHeight: '$4',
            },
            5: {
                lineHeight: '$5',
            },
            6: {
                lineHeight: '$6',
            },
        },
        center: {
            true: {
                textAlign: 'center',
            },
            false: {},
        },
        isDark: {
            true: {
                color: '$text',
            },
            false: {},
        },
        mono: {
            true: {
                fontFamily: '$mono',
            },
            false: {
                fontFamily: '$normal',
            },
        },
    },
});
exports.default = StyledText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dC5zdHlsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL1RleHQvVGV4dC5zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0VBQW9EO0FBRXBELE1BQU0sVUFBVSxHQUFHLElBQUEsd0JBQU0sRUFBQyxHQUFHLEVBQUU7SUFDN0IsQ0FBQyxFQUFFLElBQUk7SUFDUCxRQUFRLEVBQUU7UUFDUixNQUFNLEVBQUU7WUFDTixRQUFRLEVBQUU7Z0JBQ1IsVUFBVSxFQUFFLFdBQVc7YUFDeEI7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osVUFBVSxFQUFFLE9BQU87YUFDcEI7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsVUFBVSxFQUFFLFFBQVE7YUFDckI7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sVUFBVSxFQUFFLFNBQVM7YUFDdEI7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sVUFBVSxFQUFFLFNBQVM7YUFDdEI7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsVUFBVSxFQUFFLFdBQVc7YUFDeEI7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osVUFBVSxFQUFFLE9BQU87YUFDcEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsVUFBVSxFQUFFLFlBQVk7YUFDekI7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsVUFBVSxFQUFFLFFBQVE7YUFDckI7U0FDRjtRQUNELEVBQUUsRUFBRTtZQUNGLEVBQUUsRUFBRTtnQkFDRixRQUFRLEVBQUUsS0FBSztnQkFDZixVQUFVLEVBQUUsSUFBSTthQUNqQjtZQUNELEVBQUUsRUFBRTtnQkFDRixRQUFRLEVBQUUsS0FBSztnQkFDZixVQUFVLEVBQUUsSUFBSTthQUNqQjtZQUNELEVBQUUsRUFBRTtnQkFDRixRQUFRLEVBQUUsS0FBSztnQkFDZixVQUFVLEVBQUUsSUFBSTthQUNqQjtZQUNELEVBQUUsRUFBRTtnQkFDRixRQUFRLEVBQUUsS0FBSztnQkFDZixVQUFVLEVBQUUsSUFBSTthQUNqQjtZQUNELEVB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