import { CSS } from '../Theme/stitches.config';
import { PolymorphicComponentPropWithRef, AnyObject } from '../Utils';
import React from 'react';
export declare type TextAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'blockquote' | 'b' | 'small' | 'del' | 'i' | 'em';
export declare type TextWeight = 'hairline' | 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
export declare type TextSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'bodySm' | 'caption' | 'footnote' | AnyObject;
export declare type TextLineHeight = 'n' | '0' | '1' | '2' | '3' | '4' | '5' | '6';
/**
 * The Text component is the used to render text and paragraphs within an interface
 */
interface Props {
    /**
     * Changes which tag component outputs.
     */
    as?: TextAs;
    /**
     * Override default CSS style.
     */
    css?: CSS;
    /**
     * The content of the component.
     */
    children?: React.ReactNode | undefined;
    /**
     * Font weight of the text.
     */
    weight?: TextWeight;
    /**
     * Custom size for the text.
     */
    size?: TextSize;
    /**
     * Center text.
     */
    center?: boolean;
    /**
     * Custom line height for the text.
     */
    lineHeight?: TextLineHeight;
    /**
     * Should text be mono font-family.
     * @default false;
     */
    mono?: boolean;
}
export declare type TextProps<T extends React.ElementType> = PolymorphicComponentPropWithRef<T, Props>;
export declare type TextComponent = (<C extends React.ElementType = 'p'>(props: TextProps<C>) => React.ReactElement | null) & {
    displayName?: string;
};
declare const Text: TextComponent;
export default Text;
