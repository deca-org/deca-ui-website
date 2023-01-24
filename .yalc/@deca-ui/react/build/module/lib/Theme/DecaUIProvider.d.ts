import React from 'react';
declare type ThemeValue = {
    [token in number | string]: boolean | number | string;
};
export declare type Theme<T = Record<string, unknown>> = {
    fonts?: ThemeValue;
    fontSizes?: ThemeValue;
    fontWeights?: ThemeValue;
    lineHeights?: ThemeValue;
    letterSpacings?: ThemeValue;
    space?: ThemeValue;
    radii?: ThemeValue;
    zIndices?: ThemeValue;
    borderWeights?: ThemeValue;
    colors?: ThemeValue;
    shadows?: ThemeValue;
    dropShadows?: ThemeValue;
    transitions?: ThemeValue;
    breakpoints?: ThemeValue;
} & {
    [Scale in keyof T]: {
        [Token in keyof T[Scale]]: T[Scale][Token] extends boolean | number | string ? T[Scale][Token] : boolean | number | string;
    };
};
export interface DecaUIProviderProps {
    /**
     * Set dark or light mode.
     */
    mode?: 'light' | 'dark';
    /**
     * Custom theme object.
     */
    theme?: Theme;
    /**
     * The content of the component.
     */
    children?: React.ReactNode | undefined;
    /**
     * Do not add CSS baseline.
     */
    noBaseline?: boolean;
    /**
     * Is the provider being used at the highest level of the React App
     */
    root?: boolean;
}
export declare const ThemeContext: React.Context<{
    dark: boolean;
}>;
declare const DecaUIProvider: React.FC<React.PropsWithChildren<DecaUIProviderProps>>;
export default DecaUIProvider;
