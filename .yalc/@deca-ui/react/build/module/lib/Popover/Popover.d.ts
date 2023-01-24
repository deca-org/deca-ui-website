import { UseFloatingReturn, Placement } from '@floating-ui/react-dom';
import { MasterComponent, PolymorphicRef, PolymorphicComponentPropWithRef } from '../Utils';
import React, { SetStateAction, Dispatch } from 'react';
import PopoverTrigger from './PopoverTrigger';
import PopoverContent from './PopoverContent';
/**
 * A Popover can be used to display some content on top of another.
 */
export interface Props {
    /**
     * The content of the component. It is usually the `Popover.Trigger`,
     * and `Popover.Content`
     */
    children?: React.ReactNode[];
    open?: boolean;
    /**
     * State dispatcher function (setter in useState)
     */
    setOpen?: Dispatch<SetStateAction<boolean>>;
    /**
     * Placement of the popover component
     * @default bottom
     */
    placement?: Placement;
    /**
     * Determines what action needs to take place in order for popover to appear
     * @default click
     */
    action?: 'click' | 'hover';
    /**
     * How far away PopoverContent should be away from PopoverTrigger when opened
     * @default 10
     */
    offset?: number;
}
export interface IPopoverContext extends UseFloatingReturn {
    triggerRef?: React.Ref<HTMLElement | undefined>;
    open?: boolean;
    setOpen?: Dispatch<SetStateAction<boolean>>;
    mainComponentRef: PolymorphicRef<React.ElementType>;
    action: 'click' | 'hover';
}
export declare const PopoverContext: React.Context<IPopoverContext | null>;
export declare type PopoverProps<T extends React.ElementType> = PolymorphicComponentPropWithRef<T, Props>;
export declare type PopoverComponent = (<C extends React.ElementType = 'div'>(props: PopoverProps<C>) => React.ReactElement | null) & {
    displayName?: string;
};
declare const _default: MasterComponent<HTMLDivElement, PopoverProps<React.ElementType<any>>, {
    Trigger: typeof PopoverTrigger;
    Content: typeof PopoverContent;
}>;
export default _default;
