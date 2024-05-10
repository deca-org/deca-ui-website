import { useRef, useEffect } from 'react';
/**
 * Executes callback function if window is clicked outside of specified element. Exceptions argument allows for other specified elements to be clicked without the callback function executing
 */
export const useClickOutside = (handler, exceptions) => {
    const domNode = useRef(null);
    useEffect(() => {
        const conditionalHandler = (e) => {
            if (exceptions !== undefined &&
                exceptions.length !== 0) {
                exceptions.map((i) => {
                    if (i.current &&
                        !i.current.isSameNode(e.target) &&
                        domNode.current &&
                        !domNode.current.contains(e.target)) {
                        handler();
                    }
                });
            }
            else {
                if (domNode.current && !domNode.current.contains(e.target)) {
                    handler();
                }
            }
        };
        document.addEventListener('mousedown', conditionalHandler);
        return () => {
            document.removeEventListener('mousedown', conditionalHandler);
        };
    });
    return domNode;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL1V0aWxzL2hvb2tzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQWMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBR2pEOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLENBQzdCLE9BQW1CLEVBQ25CLFVBQWtFLEVBQ2xFLEVBQUU7SUFDRixNQUFNLE9BQU8sR0FBRyxNQUFNLENBQWMsSUFBSSxDQUFDLENBQUM7SUFFMUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxDQUFhLEVBQUUsRUFBRTtZQUMzQyxJQUNFLFVBQVUsS0FBSyxTQUFTO2dCQUN2QixVQUFrQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQ2hEO2dCQUNDLFVBQWtDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7b0JBQzVDLElBQ0UsQ0FBQyxDQUFDLE9BQU87d0JBQ1QsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBYyxDQUFDO3dCQUN2QyxPQUFPLENBQUMsT0FBTzt3QkFDZixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFjLENBQUMsRUFDM0M7d0JBQ0EsT0FBTyxFQUFFLENBQUM7cUJBQ1g7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBYyxDQUFDLEVBQUU7b0JBQ2xFLE9BQU8sRUFBRSxDQUFDO2lCQUNYO2FBQ0Y7UUFDSCxDQUFDLENBQUM7UUFFRixRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDM0QsT0FBTyxHQUFHLEVBQUU7WUFDVixRQUFRLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDLENBQUMifQ==