import { styled } from '../Theme/stitches.config';
import { createPalette, __DEV__ } from '../Utils';
import React, { useMemo } from 'react';
import { SSRProvider } from '@react-aria/ssr';
import { createTheme, globalCss } from './stitches.config';
const globalBaseline = globalCss({
    /* Box sizing rules */
    '*, *::before, *::after': {
        boxSizing: 'border-box',
    },
    /* Remove default margin */
    'body, h1, h2, h3, h4, p, figure, blockquote, dl, dd': {
        margin: 0,
    },
    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    "ul[role='list'], ol[role='list']": {
        listStyle: 'none',
    },
    /* Set core root defaults */
    'html:focus-within': {
        scrollBehavior: 'smooth',
    },
    /* Set core body defaults */
    body: {
        minHeight: '100vh',
        textRendering: 'optimizeSpeed',
        lineHeight: 1.5,
    },
    /* A elements that don't have a class get default styles */
    'a:not([class])': {
        textDecorationSkipInk: 'auto',
    },
    /* Make images easier to work with */
    'img, picture': {
        maxWidth: '100%',
        display: 'block',
    },
    /* Inherit fonts for inputs and buttons */
    'input, button, textarea, select': {
        font: 'inherit',
    },
    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    '@media (prefers-reduced-motion: reduce)': {
        'html:focus-within': {
            scrollBehavior: 'auto',
        },
        '*, *::before, *::after': {
            animationDuration: '0.01ms!important',
            animationIterationCount: '1!important',
            transitionDuration: '0.01ms!important',
            scrollBehavior: 'auto!important',
        },
    },
});
export const ThemeContext = React.createContext({ dark: false });
const ThemeProvider = styled('div', {});
const DecaUIProvider = ({ mode, theme, children, noBaseline, root = true }) => {
    const darkMode = useMemo(() => {
        return mode === 'dark' ? true : false;
    }, [mode]);
    const modifiedTheme = useMemo(() => {
        if (theme && theme.colors) {
            return {
                ...theme,
                colors: {
                    ...createPalette(theme.colors),
                    text: darkMode ? '$white' : '$black',
                },
            };
        }
        else {
            return { ...theme, colors: { text: darkMode ? '$white' : '$black' } };
        }
    }, [theme]);
    if (!noBaseline) {
        globalBaseline();
    }
    const userTheme = useMemo(() => createTheme(modifiedTheme), [theme]);
    if (!root) {
        return React.createElement("div", { className: theme && userTheme }, children);
    }
    return (React.createElement(SSRProvider, null,
        React.createElement(ThemeContext.Provider, { value: { dark: darkMode } },
            React.createElement(ThemeProvider, { className: userTheme, id: "decaUI-provider" }, children))));
};
if (__DEV__) {
    DecaUIProvider.displayName = 'DecaUI.Provider';
}
export default DecaUIProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjYVVJUHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL1RoZW1lL0RlY2FVSVByb3ZpZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDcEQsT0FBTyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDdkMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFrRDNELE1BQU0sY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUMvQixzQkFBc0I7SUFDdEIsd0JBQXdCLEVBQUU7UUFDeEIsU0FBUyxFQUFFLFlBQVk7S0FDeEI7SUFFRCwyQkFBMkI7SUFDM0IscURBQXFELEVBQUU7UUFDckQsTUFBTSxFQUFFLENBQUM7S0FDVjtJQUVELDRHQUE0RztJQUM1RyxrQ0FBa0MsRUFBRTtRQUNsQyxTQUFTLEVBQUUsTUFBTTtLQUNsQjtJQUVELDRCQUE0QjtJQUM1QixtQkFBbUIsRUFBRTtRQUNuQixjQUFjLEVBQUUsUUFBUTtLQUN6QjtJQUVELDRCQUE0QjtJQUM1QixJQUFJLEVBQUU7UUFDSixTQUFTLEVBQUUsT0FBTztRQUNsQixhQUFhLEVBQUUsZUFBZTtRQUM5QixVQUFVLEVBQUUsR0FBRztLQUNoQjtJQUVELDJEQUEyRDtJQUMzRCxnQkFBZ0IsRUFBRTtRQUNoQixxQkFBcUIsRUFBRSxNQUFNO0tBQzlCO0lBRUQscUNBQXFDO0lBQ3JDLGNBQWMsRUFBRTtRQUNkLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLE9BQU8sRUFBRSxPQUFPO0tBQ2pCO0lBRUQsMENBQTBDO0lBQzFDLGlDQUFpQyxFQUFFO1FB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