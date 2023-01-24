import { styled } from '../Theme/stitches.config';
const StyledText = styled('p', {
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
export default StyledText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dC5zdHlsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL1RleHQvVGV4dC5zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVwRCxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFO0lBQzdCLENBQUMsRUFBRSxJQUFJO0lBQ1AsUUFBUSxFQUFFO1FBQ1IsTUFBTSxFQUFFO1lBQ04sUUFBUSxFQUFFO2dCQUNSLFVBQVUsRUFBRSxXQUFXO2FBQ3hCO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLFVBQVUsRUFBRSxPQUFPO2FBQ3BCO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLFVBQVUsRUFBRSxRQUFRO2FBQ3JCO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLFVBQVUsRUFBRSxTQUFTO2FBQ3RCO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLFVBQVUsRUFBRSxTQUFTO2FBQ3RCO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLFVBQVUsRUFBRSxXQUFXO2FBQ3hCO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLFVBQVUsRUFBRSxPQUFPO2FBQ3BCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULFVBQVUsRUFBRSxZQUFZO2FBQ3pCO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLFVBQVUsRUFBRSxRQUFRO2FBQ3JCO1NBQ0Y7UUFDRCxFQUFFLEVBQUU7WUFDRixFQUFFLEVBQUU7Z0JBQ0YsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsVUFBVSxFQUFFLElBQUk7YUFDakI7WUFDRCxFQUFFLEVBQUU7Z0JBQ0YsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsVUFBVSxFQUFFLElBQUk7YUFDakI7WUFDRCxFQUFFLEVBQUU7Z0JBQ0YsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsVUFBVSxFQUFFLElBQUk7YUFDakI7WUFDRCxFQUFFLEVBQUU7Z0JBQ0YsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsVUFBVSxF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