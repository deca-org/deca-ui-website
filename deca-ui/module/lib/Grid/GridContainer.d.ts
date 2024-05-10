import { CSS } from '../Theme/stitches.config';
import { PolymorphicComponentPropWithRef } from '../Utils';
import React from 'react';
import { Cols } from './Grid';
/**
 * The GridContainer component serves as a wrapper component to the Grid component
 */
interface Props {
    /**
     * Override default CSS style.
     */
    css?: CSS;
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
     * How much spacing there should be between columns.
     */
    spacing?: 'none' | 'sm' | 'md' | 'lg';
    /**
     * JustifyContent css prop.
     */
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    /**
     * AlignItems css prop.
     */
    alignItems?: 'flex-start' | 'center' | 'flex-end';
    /**
     * How many columns should be taken up by item initially
     */
    n?: Cols;
    /**
     * How many columns should be taken up by item on xs breakpoint
     */
    xs?: Cols;
    /**
     * How many columns should be taken up by item on sm breakpoint
     */
    sm?: Cols;
    /**
     * How many columns should be taken up by item on md breakpoint
     */
    md?: Cols;
    /**
     * How many columns should be taken up by item on lg breakpoint
     */
    lg?: Cols;
    /**
     * How many columns should be taken up by item on xl breakpoint
     */
    xl?: Cols;
}
export declare type GridContainerProps<T extends React.ElementType> = PolymorphicComponentPropWithRef<T, Props>;
export declare type GridContainerComponent = (<C extends React.ElementType = 'div'>(props: GridContainerProps<C>) => React.ReactElement | null) & {
    displayName?: string;
};
declare const GridContainer: GridContainerComponent;
export default GridContainer;
