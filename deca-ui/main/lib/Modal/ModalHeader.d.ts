import { CSS } from '../Theme/stitches.config';
import { PolymorphicComponentPropWithRef } from '../Utils';
import React from 'react';
/**
 * ModalHeader allows users to place a header on their modal component
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
export declare type ModalHeaderProps<T extends React.ElementType> = PolymorphicComponentPropWithRef<T, Props>;
export declare type ModalHeaderComponent = (<C extends React.ElementType = 'div'>(props: ModalHeaderProps<C>) => React.ReactElement | null) & {
    displayName?: string;
};
declare const ModalHeader: ModalHeaderComponent;
export default ModalHeader;
