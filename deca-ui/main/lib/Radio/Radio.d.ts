import { CSS, StandardColors } from '../Theme/stitches.config';
import { Modify, PolymorphicComponentPropWithRef, MasterComponent } from '../Utils';
import React from 'react';
import RadioGroup from './RadioGroup';
/**
 * Radio buttons allow the user to select one option from a set.
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
     * The value assigned to the radio button.
     */
    value?: string;
    /**
     * Callback fired when a radio button is selected
     */
    onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
    /**
     * Callback fired when a radio button is focused
     */
    onFocus?(e: React.ChangeEvent<HTMLInputElement>): void;
    /**
     * Name is used as an identifier in a form.
     */
    name?: string;
    /**
     *  Whether or not the checkbox is initially checked.
     */
    initialSelect?: boolean;
    /**
     * Whether or not the radio button is selected.
     */
    selected?: boolean;
}
export declare type RadioProps<T extends React.ElementType> = PolymorphicComponentPropWithRef<T, Props>;
export declare type RadioComponent = (<C extends React.ElementType = 'input'>(props: RadioProps<C>) => React.ReactElement | null) & {
    displayName?: string;
};
declare const _default: MasterComponent<HTMLInputElement, RadioProps<React.ElementType<any>>, {
    Group: typeof RadioGroup;
}>;
export default _default;
