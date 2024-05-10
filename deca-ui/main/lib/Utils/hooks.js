"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useClickOutside = void 0;
const react_1 = require("react");
/**
 * Executes callback function if window is clicked outside of specified element. Exceptions argument allows for other specified elements to be clicked without the callback function executing
 */
const useClickOutside = (handler, exceptions) => {
    const domNode = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
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
exports.useClickOutside = useClickOutside;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL1V0aWxzL2hvb2tzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlDQUFpRDtBQUdqRDs7R0FFRztBQUNJLE1BQU0sZUFBZSxHQUFHLENBQzdCLE9BQW1CLEVBQ25CLFVBQWtFLEVBQ2xFLEVBQUU7SUFDRixNQUFNLE9BQU8sR0FBRyxJQUFBLGNBQU0sRUFBYyxJQUFJLENBQUMsQ0FBQztJQUUxQyxJQUFBLGlCQUFTLEVBQUMsR0FBRyxFQUFFO1FBQ2IsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLENBQWEsRUFBRSxFQUFFO1lBQzNDLElBQ0UsVUFBVSxLQUFLLFNBQVM7Z0JBQ3ZCLFVBQWtDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFDaEQ7Z0JBQ0MsVUFBa0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtvQkFDNUMsSUFDRSxDQUFDLENBQUMsT0FBTzt3QkFDVCxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFjLENBQUM7d0JBQ3ZDLE9BQU8sQ0FBQyxPQUFPO3dCQUNmLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQWMsQ0FBQyxFQUMzQzt3QkFDQSxPQUFPLEVBQUUsQ0FBQztxQkFDWDtnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFjLENBQUMsRUFBRTtvQkFDbEUsT0FBTyxFQUFFLENBQUM7aUJBQ1g7YUFDRjtRQUNILENBQUMsQ0FBQztRQUVGLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUMzRCxPQUFPLEdBQUcsRUFBRTtZQUNWLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMsQ0FBQztBQXBDVyxRQUFBLGVBQWUsbUJBb0MxQiJ9