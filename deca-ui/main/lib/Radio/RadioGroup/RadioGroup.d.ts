import { CSS, StandardColors } from '../../Theme/stitches.config';
import { RadioProps } from '../Radio';
import { PolymorphicComponentPropWithRef } from '../../Utils';
import React from 'react';
/**
 * RadioGroup is a helpful wrapper used to group Radio button components.
 */
interface Props {
    /**
     * The content of the component.
     */
    children?: Array<React.ReactElement<RadioProps<React.ElementType>>> | React.ReactElement<RadioProps<React.ElementType>>;
    /**
     * The default value. Used when component is not controlled.
     */
    defaultValue?: string;
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
     * Callback fired when a radio button is selected.
     */
    onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
    /**
     * Value of the selected radio button.
     */
    value?: string;
    /**
     * Apply disabled state to all radio buttons in the radio group component
     * @default false
     */
    disabled?: boolean;
    /**
     * Color of radio buttons when active.
     */
    color?: StandardColors;
    /**
     * Size of each radio button.
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Override default CSS style.
     */
    css?: CSS;
}
export declare type RadioGroupProps<T extends React.ElementType> = PolymorphicComponentPropWithRef<T, Props>;
export declare type RadioGroupComponent = (<C extends React.ElementType = 'div'>(props: RadioGroupProps<C>) => React.ReactElement | null) & {
    displayName?: string;
};
declare const RadioGroup: RadioGroupComponent;
export default RadioGroup;
