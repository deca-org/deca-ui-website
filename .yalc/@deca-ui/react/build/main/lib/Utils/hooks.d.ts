import React from 'react';
/**
 * Executes callback function if window is clicked outside of specified element. Exceptions argument allows for other specified elements to be clicked without the callback function executing
 */
export declare const useClickOutside: (handler: () => void, exceptions?: Array<React.Ref<HTMLElement | undefined> | undefined>) => React.RefObject<HTMLElement>;
