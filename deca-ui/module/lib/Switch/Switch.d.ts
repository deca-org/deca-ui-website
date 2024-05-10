import { CSS, StandardColors } from '../Theme/stitches.config';
import { Modify, PolymorphicComponentPropWithRef } from '../Utils';
import React from 'react';
/**
 * Switches are an alternative to the checkbox component. You can switch between enabled or disabled states.
 */
interface Props extends Modify<React.ComponentPropsWithRef<'input'>, {
    /**
     * Size of the component.
     * @default md
     */
    size?: 'sm' | 'md' | 'lg';
}> {
    /**
     * Size of the component.
     * @default md
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Text label for the component.
     */
    label?: string;
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
     * Override default CSS style.
     */
    css?: CSS;
    /**
     * Color of radio button when active.
     * @default primary
     */
    color?: StandardColors;
    /**
     * The value assigned to the switch component.
     */
    value?: string;
    /**
     * Callback fired when a switch is enabled or disabled
     */
    onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
    /**
     * Callback fired when a switch is focused
     */
    onFocus?(e: React.ChangeEvent<HTMLInputElement>): void;
    /**
     * Name is used as an identifier in a form.
     */
    name?: string;
    /**
     *  Whether or not the switch is initially toggled.
     */
    initialToggle?: boolean;
    /**
     * Whether or not the switch is toggled.
     */
    toggled?: boolean;
    /**
     * Required checkbox prop.
     * @default false
     */
    required?: boolean;
}
export declare type SwitchProps<T extends React.ElementType> = PolymorphicComponentPropWithRef<T, Props>;
export declare type SwitchComponent = (<C extends React.ElementType = 'input'>(props: SwitchProps<C>) => React.ReactElement | null) & {
    displayName?: string;
};
declare const Switch: SwitchComponent;
export default Switch;
