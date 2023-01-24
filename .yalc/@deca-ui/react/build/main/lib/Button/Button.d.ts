import { CSS, StandardColors } from '../Theme/stitches.config';
import { PolymorphicComponentPropWithRef } from '../Utils';
import React from 'react';
/**
 * Buttons allow users to take actions, and make choices, with a single tap.
 */
interface Props {
    /**
     * The content of the component.
     */
    children?: React.ReactNode | undefined;
    /**
     * The role attribute of the component.
     */
    role?: string;
    /**
     * ClassName applied to the component.
     * @default ''
     */
    className?: string;
    /**
     * Disabled state applied to the component.
     * @default false
     */
    disabled?: boolean;
    /**
     * Function that executes when button is clicked.
     */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    /**
     * Size of the component.
     * @default md
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Override default CSS style.
     */
    css?: CSS;
    /**
     * The variant to use.
     * @default solid
     */
    variant?: 'solid' | 'outlined' | 'ghost' | 'flat';
    /**
     * Color to use.
     * @default primary
     */
    color?: StandardColors;
    /**
     * Set button width to 100%.
     * @default false
     */
    maxWidth?: boolean;
    /**
     * Icon on the left side of the component.
     */
    icon?: React.ReactNode;
    /**
     * Icon on the right side of the component.
     */
    iconRight?: React.ReactNode;
    /**
     * CSS applied to icon on the left side of the component.
     */
    iconLeftCss?: CSS;
    /**
     * CSS applied to icon on the right side of the component.
     */
    iconRightCss?: CSS;
    /**
     * Have button be pill shaped
     */
    pill?: boolean;
}
export declare type ButtonProps<T extends React.ElementType> = PolymorphicComponentPropWithRef<T, Props>;
export declare type ButtonComponent = (<C extends React.ElementType = 'button'>(props: ButtonProps<C>) => React.ReactElement | null) & {
    displayName?: string;
};
export declare const Button: ButtonComponent;
export default Button;
