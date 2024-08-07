import { useFloating, offset as floatingOffset, flip, shift, autoUpdate, } from '@floating-ui/react-dom';
import { __DEV__, } from '../Utils';
import React, { useState, useEffect, useMemo, } from 'react';
export const PopoverContext = React.createContext(null);
const Popover = React.forwardRef(({ children, open, setOpen, placement = 'bottom', action = 'click', offset = 10, }, ref) => {
    const floatingProps = useFloating({
        placement: placement,
        whileElementsMounted: autoUpdate,
        strategy: 'absolute',
        middleware: [floatingOffset(offset), flip(), shift()],
    });
    const [selfOpen, setSelfOpen] = useState(false);
    const [scrollPos, setScrollPos] = useState(0);
    const isControlledComponent = useMemo(() => open !== undefined, [open]);
    const isScrolling = () => {
        if (window.scrollY !== scrollPos) {
            isControlledComponent ? setOpen && setOpen(false) : setSelfOpen(false);
            setScrollPos(window.scrollY);
        }
    };
    const handleEsc = (e) => {
        if (e.key === 'Escape') {
            isControlledComponent ? setOpen && setOpen(false) : setSelfOpen(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', isScrolling);
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('scroll', isScrolling);
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);
    const [trigger, content] = React.Children.toArray(children);
    const triggerRef = React.useRef();
    return (React.createElement(PopoverContext.Provider, { value: {
            ...floatingProps,
            triggerRef: triggerRef,
            open: isControlledComponent ? open : selfOpen,
            setOpen: isControlledComponent ? setOpen : setSelfOpen,
            mainComponentRef: ref,
            action,
        } },
        trigger,
        content));
});
if (__DEV__) {
    Popover.displayName = 'DecaUI.Popover';
}
export default Popover;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9wb3Zlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvUG9wb3Zlci9Qb3BvdmVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsV0FBVyxFQUNYLE1BQU0sSUFBSSxjQUFjLEVBQ3hCLElBQUksRUFDSixLQUFLLEVBQ0wsVUFBVSxHQUdYLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUlMLE9BQU8sR0FDUixNQUFNLFlBQVksQ0FBQztBQUNwQixPQUFPLEtBQUssRUFBRSxFQUNaLFFBQVEsRUFDUixTQUFTLEVBQ1QsT0FBTyxHQUdSLE1BQU0sT0FBTyxDQUFDO0FBOENmLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUF5QixJQUFJLENBQUMsQ0FBQztBQVNoRixNQUFNLE9BQU8sR0FBcUIsS0FBSyxDQUFDLFVBQVUsQ0FDaEQsQ0FDRSxFQUNFLFFBQVEsRUFDUixJQUFJLEVBQ0osT0FBTyxFQUNQLFNBQVMsR0FBRyxRQUFRLEVBQ3BCLE1BQU0sR0FBRyxPQUFPLEVBQ2hCLE1BQU0sR0FBRyxFQUFFLEdBQ0ssRUFDbEIsR0FBdUIsRUFDdkIsRUFBRTtJQUNGLE1BQU0sYUFBYSxHQUFHLFdBQVcsQ0FBQztRQUNoQyxTQUFTLEVBQUUsU0FBUztRQUNwQixvQkFBb0IsRUFBRSxVQUFVO1FBQ2hDLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFVBQVUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQztLQUN0RCxDQUFDLENBQUM7SUFFSCxNQUFNLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxHQUFHLFFBQVEsQ0FBVSxLQUFLLENBQUMsQ0FBQztJQUV6RCxNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU5QyxNQUFNLHFCQUFxQixHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUV4RSxNQUFNLFdBQVcsR0FBRyxHQUFHLEVBQUU7UUFDdkIsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUNoQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZFLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDLENBQUM7SUFFRixNQUFNLFNBQVMsR0FBRyxDQUFDLENBQWdCLEVBQUUsRUFBRTtRQUNyQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQ3RCLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEU7SUFDSCxDQUFDLENBQUM7SUFFRixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUMvQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUNsRCxNQUFNLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQztJQUNKLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE1BQU0sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFNUQsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBRWxDLE9BQU8sQ0FDTCxvQkFBQyxjQUFjLENBQUMsUUFBUSxJQUN0QixLQUFLLEVBQUU7WUFDTCxHQUFHLGFBQWE7WUFDaEIsVUFBVSxFQUFFLFVBQVU7WUFDdEIsSUFBSSxFQUFFLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVE7WUFDN0MsT0FBTyxFQUFFLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVc7WUFDdEQsZ0JBQWdCLEVBQUUsR0FBRztZQUNyQixNQUFNO1NBQ1A7UUFFQSxPQUFPO1FBQ1AsT0FBTyxDQUNnQixDQUMzQixDQUFDO0FBQ0osQ0FBQyxDQUNGLENBQUM7QUFFRixJQUFJLE9BQU8sRUFBRTtJQUNYLE9BQU8sQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUM7Q0FDeEM7QUFFRCxlQUFlLE9BT2QsQ0FBQyJ9