import { CSS } from '../Theme/stitches.config';
import { PolymorphicComponentPropWithRef } from '../Utils';
import React from 'react';
/**
 * The Box component serves as a wrapper component
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
}
export declare type BoxProps<T extends React.ElementType> = PolymorphicComponentPropWithRef<T, Props>;
export declare type BoxComponent = (<C extends React.ElementType = 'div'>(props: BoxProps<C>) => React.ReactElement | null) & {
    displayName?: string;
};
declare const Box: BoxComponent;
export default Box;
