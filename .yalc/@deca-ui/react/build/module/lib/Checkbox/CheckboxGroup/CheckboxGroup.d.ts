import { CheckboxProps } from '../../Checkbox';
import { CSS, StandardColors } from '../../Theme/stitches.config';
import { PolymorphicComponentPropWithRef } from '../../Utils';
import React from 'react';
/**
 * CheckboxGroup is a helpful wrapper used to group checkbox components.
 */
interface Props {
    /**
     * The content of the component.
     */
    children?: Array<React.ReactElement<CheckboxProps<React.ElementType>>> | React.ReactElement<CheckboxProps<React.ElementType>>;
    /**
     * Array of checkboxes that are selected by default. Used when component is not controlled.
     */
    defaultValue?: Array<string>;
    /**
     * ClassName applied to the component.
     * @default ''
     */
    className?: string;
    /**
     * The name used to reference the value of the control. If you do not provide this prop, it falls back to a randomly generated name.
     */
    name?: string;
    /**
     * Callback fired when a checkbox is selected.
     */
    onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
    /**
     * Array of selected checkboxes. Used when component is controlled.
     */
    value?: Array<string>;
    /**
     * Apply disabled state to all checkboxes in the checkbox group component
     * @default false
     */
    disabled?: boolean;
    /**
     * Override default CSS style.
     */
    css?: CSS;
    /**
     * Color of checkboxes when active.
     */
    color?: StandardColors;
    /**
     * Size of each checkbox.
     */
    size?: 'sm' | 'md' | 'lg';
}
export declare type CheckboxGroupProps<T extends React.ElementType> = PolymorphicComponentPropWithRef<T, Props>;
export declare type CheckboxGroupComponent = (<C extends React.ElementType = 'div'>(props: CheckboxGroupProps<C>) => React.ReactElement | null) & {
    displayName?: string;
};
declare const CheckboxGroup: CheckboxGroupComponent;
export default CheckboxGroup;
