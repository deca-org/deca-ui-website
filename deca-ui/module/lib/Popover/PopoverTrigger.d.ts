import React from 'react';
/**
 * PopoverTrigger opens the popover's content. It must be an interactive element
 * such as `button` or `a`.
 */
export interface Props {
    /**
     * The content of the component.
     */
    children?: React.ReactNode | undefined;
}
declare const PopoverTrigger: {
    ({ children }: Props): React.DetailedReactHTMLElement<any, HTMLElement>;
    displayName: string;
};
export default PopoverTrigger;
