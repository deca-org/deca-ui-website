import { CSS } from '../Theme/stitches.config';
import { PolymorphicComponentPropWithRef } from '../Utils';
import React from 'react';
/**
 * PopoverContent contains the content shown when the trigger is executed
 */
interface Props {
    /**
     * The content of the component.
     */
    children?: React.ReactNode | undefined;
    /**
     * Override default CSS style.
     */
    css?: CSS;
    /**
     * ClassName applied to the component.
     * @default ''
     */
    className?: string;
}
export declare type PopoverContentProps<T extends React.ElementType> = PolymorphicComponentPropWithRef<T, Props>;
export declare type PopoverContentComponent = (<C extends React.ElementType = 'div'>(props: PopoverContentProps<C>) => React.ReactElement | null) & {
    displayName?: string;
};
declare const PopoverContent: PopoverContentComponent;
export default PopoverContent;
