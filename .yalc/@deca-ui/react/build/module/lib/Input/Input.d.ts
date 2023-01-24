import { CSS, StandardColors } from '../Theme/stitches.config';
import { Modify, PolymorphicComponentPropWithRef } from '../Utils';
import React from 'react';
/**
 * Type for Input and Text Area elements
 */
export declare type FormElement = HTMLInputElement | HTMLTextAreaElement;
/**
 * Inputs allow users to enter text into a UI. They typically appear in forms and dialogs.
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
     * The variant to use.
     * @default solid
     */
    variant?: 'solid' | 'outlined';
    /**
     * Placeholder text for component.
     */
    placeholder?: string;
    /**
     * Override default CSS style
     */
    css?: CSS;
    /**
     * Color of text and border when input is focused.
     * @default primary
     */
    focusColor?: StandardColors;
    /**
     * Set input width to 100%.
     * @default false
     */
    maxWidth?: boolean;
    /**
     * Required input prop.
     * @default false
     */
    required?: boolean;
    /**
     * Add helper text to input.
     * @default ''
     */
    helperText?: string;
    /**
     * The current value of the input.
     */
    value?: string;
    /**
     * The initial value of the input.
     */
    initialValue?: string;
    /**
     * Function that executes when input is changed.
     */
    onChange?(e: React.ChangeEvent<FormElement>): void;
    /**
     * Function that executes when input is focused.
     */
    onFocus?(e: React.FocusEvent<FormElement>): void;
    /**
     * Function that executes when input is just out of focus.
     */
    onBlur?(e: React.FocusEvent<FormElement>): void;
    /**
     * Have input be pill shaped
     */
    pill?: boolean;
}
export declare type InputProps<T extends React.ElementType> = PolymorphicComponentPropWithRef<T, Props>;
export declare type InputComponent = (<C extends React.ElementType = 'input'>(props: InputProps<C>) => React.ReactElement | null) & {
    displayName?: string;
};
declare const Input: InputComponent;
export default Input;
