import { CSS } from '../Theme';
import { PolymorphicComponentPropWithRef } from '../Utils';
import React from 'react';
/**
 * ModalBody contains the main content of a modal component
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
export declare type ModalBodyProps<T extends React.ElementType> = PolymorphicComponentPropWithRef<T, Props>;
export declare type ModalBodyComponent = (<C extends React.ElementType = 'div'>(props: ModalBodyProps<C>) => React.ReactElement | null) & {
    displayName?: string;
};
declare const ModalBody: ModalBodyComponent;
export default ModalBody;
