"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeRefs = exports.assignRef = void 0;
/**
 * Assigns a value to a ref function or object
 *
 * @param ref the ref to assign to
 * @param value the value
 */
function assignRef(ref, value) {
    if (ref == null)
        return;
    if (typeof ref === 'function') {
        ref(value);
        return;
    }
    try {
        ref.current = value;
    }
    catch (error) {
        throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
    }
}
exports.assignRef = assignRef;
/**
 * Combine multiple React refs into a single ref function.
 * This is used mostly when you need to allow consumers forward refs to
 * internal components
 *
 * @param refs refs to assign to value to
 */
function mergeRefs(...refs) {
    return (node) => {
        refs.forEach((ref) => assignRef(ref, node));
    };
}
exports.mergeRefs = mergeRefs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvVXRpbHMvcmVmcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFPQTs7Ozs7R0FLRztBQUNILFNBQWdCLFNBQVMsQ0FBSSxHQUFtQyxFQUFFLEtBQVE7SUFDeEUsSUFBSSxHQUFHLElBQUksSUFBSTtRQUFFLE9BQU87SUFFeEIsSUFBSSxPQUFPLEdBQUcsS0FBSyxVQUFVLEVBQUU7UUFDN0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ1gsT0FBTztLQUNSO0lBRUQsSUFBSTtRQUNELEdBQXdDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztLQUMzRDtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsS0FBSyxhQUFhLEdBQUcsR0FBRyxDQUFDLENBQUM7S0FDbkU7QUFDSCxDQUFDO0FBYkQsOEJBYUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxTQUFnQixTQUFTLENBQUksR0FBRyxJQUFpQztJQUMvRCxPQUFPLENBQUMsSUFBYyxFQUFFLEVBQUU7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUMsQ0FBQztBQUNKLENBQUM7QUFKRCw4QkFJQyJ9