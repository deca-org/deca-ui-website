import { CSS, StandardColors } from '../Theme/stitches.config';
import { Modify, PolymorphicComponentPropWithRef, MasterComponent } from '../Utils';
import React from 'react';
import CheckboxGroup from './CheckboxGroup';
/**
 * Checkboxes can be used to turn an option on or off
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
     * Color of checkbox when active.
     * @default primary
     */
    color?: StandardColors;
    /**
     * The value assigned to the checkbox
     */
    value?: string;
    /**
     * Whether or not the checkbox is checked.
     */
    checked?: boolean;
    /**
     * Function that executes when checkbox is checked or unchecked.
     */
    onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
    /**
     * Callback fired when a checkbox is focused
     */
    onFocus?(e: React.ChangeEvent<HTMLInputElement>): void;
    /**
     * Name is used as an identifier in a form.
     */
    name?: string;
    /**
     *  Whether or not the checkbox is initially checked.
     */
    initialCheck?: boolean;
    /**
     * Required checkbox prop.
     * @default false
     */
    required?: boolean;
}
export declare type CheckboxProps<T extends React.ElementType> = PolymorphicComponentPropWithRef<T, Props>;
export declare type CheckboxComponent = (<C extends React.ElementType = 'input'>(props: CheckboxProps<C>) => React.ReactElement | null) & {
    displayName?: string;
};
declare const _default: MasterComponent<HTMLInputElement, CheckboxProps<React.ElementType<any>>, {
    Group: typeof CheckboxGroup;
}>;
export default _default;
