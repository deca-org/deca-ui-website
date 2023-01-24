/**
 * Assigns a value to a ref function or object
 *
 * @param ref the ref to assign to
 * @param value the value
 */
export function assignRef(ref, value) {
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
/**
 * Combine multiple React refs into a single ref function.
 * This is used mostly when you need to allow consumers forward refs to
 * internal components
 *
 * @param refs refs to assign to value to
 */
export function mergeRefs(...refs) {
    return (node) => {
        refs.forEach((ref) => assignRef(ref, node));
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvVXRpbHMvcmVmcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxTQUFTLENBQUksR0FBbUMsRUFBRSxLQUFRO0lBQ3hFLElBQUksR0FBRyxJQUFJLElBQUk7UUFBRSxPQUFPO0lBRXhCLElBQUksT0FBTyxHQUFHLEtBQUssVUFBVSxFQUFFO1FBQzdCLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNYLE9BQU87S0FDUjtJQUVELElBQUk7UUFDRCxHQUF3QyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7S0FDM0Q7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLEtBQUssYUFBYSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0tBQ25FO0FBQ0gsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILE1BQU0sVUFBVSxTQUFTLENBQUksR0FBRyxJQUFpQztJQUMvRCxPQUFPLENBQUMsSUFBYyxFQUFFLEVBQUU7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUMsQ0FBQztBQUNKLENBQUMifQ==