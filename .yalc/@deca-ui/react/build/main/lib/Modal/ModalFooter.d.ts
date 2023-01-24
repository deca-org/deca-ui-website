import { CSS } from '../Theme/stitches.config';
import { PolymorphicComponentPropWithRef } from '../Utils';
import React from 'react';
/**
 * ModalFooter allows users to place content on the bottom of their modal component
 */
interface Props {
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
     * Override default CSS style.
     */
    css?: CSS;
    /**
     * Have gap between all elements.
     */
    autoGap?: boolean;
}
export declare type ModalFooterProps<T extends React.ElementType> = PolymorphicComponentPropWithRef<T, Props>;
export declare type ModalFooterComponent = (<C extends React.ElementType = 'div'>(props: ModalFooterProps<C>) => React.ReactElement | null) & {
    displayName?: string;
};
declare const ModalFooter: ModalFooterComponent;
export default ModalFooter;
