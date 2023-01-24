import { CSS } from '../Theme/stitches.config';
import { PolymorphicComponentPropWithRef, MasterComponent } from '../Utils';
import React from 'react';
import GridContainer from './GridContainer';
export declare type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
/**
 * The Grid component acts as a child to the GridContainer component
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
export declare type GridProps<T extends React.ElementType> = PolymorphicComponentPropWithRef<T, Props>;
export declare type GridComponent = (<C extends React.ElementType = 'div'>(props: GridProps<C>) => React.ReactElement | null) & {
    displayName?: string;
};
declare const _default: MasterComponent<HTMLDivElement, GridProps<React.ElementType<any>>, {
    Container: typeof GridContainer;
}>;
export default _default;
