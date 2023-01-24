import { CSS, StandardColors } from '../Theme/stitches.config';
import { PolymorphicComponentPropWithRef } from '../Utils';
import React from 'react';
/**
 * Badges are used to highlight an item's status for quick recognition.
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
     * Color to use.
     * @default primary
     */
    color?: StandardColors;
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
     * Have component be pill shaped
     */
    pill?: boolean;
}
export declare type BadgeProps<T extends React.ElementType> = PolymorphicComponentPropWithRef<T, Props>;
export declare type BadgeComponent = (<C extends React.ElementType = 'div'>(props: BadgeProps<C>) => React.ReactElement | null) & {
    displayName?: string;
};
declare const Badge: BadgeComponent;
export default Badge;
