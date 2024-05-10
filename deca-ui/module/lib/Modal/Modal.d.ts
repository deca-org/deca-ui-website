import { CSS } from '../Theme/stitches.config';
import { PolymorphicComponentPropWithRef, MasterComponent } from '../Utils';
import React, { SetStateAction, Dispatch } from 'react';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
interface Props {
    /**
     * The content of the component.
     */
    children?: React.ReactNode | undefined;
    open?: boolean;
    /**
     * State dispatcher function (setter in useState)
     */
    setOpen?: Dispatch<SetStateAction<boolean>>;
    /**
     * Override default CSS style.
     */
    css?: CSS;
    /**
     * ClassName applied to the component.
     * @default ''
     */
    className?: string;
    /**
     * Have close button appear at the top right corner of the modal.
     */
    closeButton?: boolean;
    /**
     * Have gap between all elements.
     * @default true
     */
    autoGap?: boolean;
    /**
     * Remove padding applied to Modal component.
     * @default false
     */
    noPadding?: boolean;
}
export interface IModalContext {
    setOpen?: Dispatch<SetStateAction<boolean>>;
    autoGap?: boolean;
}
export declare const ModalContext: React.Context<IModalContext | null>;
export declare type ModalProps<T extends React.ElementType> = PolymorphicComponentPropWithRef<T, Props>;
export declare type ModalComponent = (<C extends React.ElementType = 'div'>(props: ModalProps<C>) => React.ReactElement | null) & {
    displayName?: string;
};
declare const _default: MasterComponent<HTMLDivElement, ModalProps<React.ElementType<any>>, {
    Header: typeof ModalHeader;
    Body: typeof ModalBody;
    Footer: typeof ModalFooter;
}>;
export default _default;
