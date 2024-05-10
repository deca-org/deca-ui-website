import { mergeRefs, __DEV__ } from '../Utils';
import React, { useContext } from 'react';
import { PopoverContext } from './Popover';
const PopoverTrigger = ({ children }) => {
    const context = useContext(PopoverContext);
    // enforce single child
    const child = React.Children.only(children);
    if (context.action === 'click') {
        const extendedOnClick = () => {
            context.setOpen && context.setOpen((prevState) => !prevState);
            child.props.onClick && child.props.onClick();
        };
        return React.cloneElement(child, {
            ...child.props,
            onClick: extendedOnClick,
            ref: mergeRefs(context.reference, child.ref, context.triggerRef),
        });
    }
    else {
        const extendedOnMouseEnter = () => {
            context.setOpen && context.setOpen(true);
            child.props.onMouseEnter && child.props.onMouseEnter();
        };
        const extendedOnMouseLeave = () => {
            context.setOpen && context.setOpen(false);
            child.props.onMouseLeave && child.props.onMouseLeave();
        };
        return React.cloneElement(child, {
            ...child.props,
            onMouseEnter: extendedOnMouseEnter,
            onMouseLeave: extendedOnMouseLeave,
            ref: mergeRefs(context.reference, child.ref, context.triggerRef),
        });
    }
};
if (__DEV__) {
    PopoverTrigger.displayName = 'DecaUI.PopoverTrigger';
}
export default PopoverTrigger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9wb3ZlclRyaWdnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL1BvcG92ZXIvUG9wb3ZlclRyaWdnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ2hELE9BQU8sS0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBRTFDLE9BQU8sRUFBRSxjQUFjLEVBQW1CLE1BQU0sV0FBVyxDQUFDO0FBYTVELE1BQU0sY0FBYyxHQUFHLENBQUMsRUFBRSxRQUFRLEVBQVMsRUFBRSxFQUFFO0lBQzdDLE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxjQUFjLENBQW9CLENBQUM7SUFFOUQsdUJBQXVCO0lBQ3ZCLE1BQU0sS0FBSyxHQUFRLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRWpELElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxPQUFPLEVBQUU7UUFDOUIsTUFBTSxlQUFlLEdBQUcsR0FBRyxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM5RCxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQy9DLENBQUMsQ0FBQztRQUVGLE9BQU8sS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUU7WUFDL0IsR0FBRyxLQUFLLENBQUMsS0FBSztZQUNkLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLEdBQUcsRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUM7U0FDakUsQ0FBQyxDQUFDO0tBQ0o7U0FBTTtRQUNMLE1BQU0sb0JBQW9CLEdBQUcsR0FBRyxFQUFFO1lBQ2hDLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3pELENBQUMsQ0FBQztRQUVGLE1BQU0sb0JBQW9CLEdBQUcsR0FBRyxFQUFFO1lBQ2hDLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQyxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3pELENBQUMsQ0FBQztRQUVGLE9BQU8sS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUU7WUFDL0IsR0FBRyxLQUFLLENBQUMsS0FBSztZQUNkLFlBQVksRUFBRSxvQkFBb0I7WUFDbEMsWUFBWSxFQUFFLG9CQUFvQjtZQUNsQyxHQUFHLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDO1NBQ2pFLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsSUFBSSxPQUFPLEVBQUU7SUFDWCxjQUFjLENBQUMsV0FBVyxHQUFHLHVCQUF1QixDQUFDO0NBQ3REO0FBRUQsZUFBZSxjQUFjLENBQUMifQ==