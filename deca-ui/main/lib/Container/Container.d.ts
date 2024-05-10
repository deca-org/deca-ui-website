import { CSS } from '../Theme/stitches.config';
import { PolymorphicComponentPropWithRef } from '../Utils';
import React from 'react';
/**
 * The Container component fixes an element's width to the current breakpoint
 */
interface Props {
    /**
     * Override default CSS style.
     */
    css?: CSS;
    /**
     * The content of the component.
     */
    children?: React.ReactNode | undefined;
    /**
     * ClassName applied to the component.
     * @default ''
     */
    className?: string;
    /**
     * padding applied on each side
     * @default sm
     */
    px?: 'none' | 'sm' | 'md' | 'lg';
    /**
     * container max-width changes with breakpoint
     * @default true
     */
    responsive?: boolean;
    /**
     * max-width is set to 100%
     */
    fluid?: boolean;
}
export declare type ContainerProps<T extends React.ElementType> = PolymorphicComponentPropWithRef<T, Props>;
export declare type ContainerComponent = (<C extends React.ElementType = 'div'>(props: ContainerProps<C>) => React.ReactElement | null) & {
    displayName?: string;
};
declare const Container: ContainerComponent;
export default Container;
