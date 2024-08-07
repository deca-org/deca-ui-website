import { __DEV__, } from '../Utils';
import clsx from 'clsx';
import React, { useContext } from 'react';
import { ModalContext } from './Modal';
import { StyledModalBody } from './Modal.styles';
const ModalBody = React.forwardRef(({ children, className = '', css, as, autoGap, ...props }, ref) => {
    const context = useContext(ModalContext);
    const preClass = 'decaModalBody';
    return (React.createElement(StyledModalBody, { autoGap: autoGap !== undefined ? autoGap : context.autoGap, ref: ref, className: clsx(className, `${preClass}-root`), as: as, css: css, ...props }, children));
});
if (__DEV__) {
    ModalBody.displayName = 'DecaUI.ModalBody';
}
export default ModalBody;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWxCb2R5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9Nb2RhbC9Nb2RhbEJvZHkudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTCxPQUFPLEdBR1IsTUFBTSxZQUFZLENBQUM7QUFDcEIsT0FBTyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBQ3hCLE9BQU8sS0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBRTFDLE9BQU8sRUFBRSxZQUFZLEVBQWlCLE1BQU0sU0FBUyxDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWdDakQsTUFBTSxTQUFTLEdBQXVCLEtBQUssQ0FBQyxVQUFVLENBQ3BELENBQ0UsRUFBRSxRQUFRLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEtBQUssRUFBcUIsRUFDM0UsR0FBdUIsRUFDdkIsRUFBRTtJQUNGLE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQWtCLENBQUM7SUFFMUQsTUFBTSxRQUFRLEdBQUcsZUFBZSxDQUFDO0lBRWpDLE9BQU8sQ0FDTCxvQkFBQyxlQUFlLElBQ2QsT0FBTyxFQUFFLE9BQU8sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFDMUQsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLFFBQVEsT0FBTyxDQUFDLEVBQzlDLEVBQUUsRUFBRSxFQUFFLEVBQ04sR0FBRyxFQUFFLEdBQUcsS0FDSixLQUFLLElBRVIsUUFBUSxDQUNPLENBQ25CLENBQUM7QUFDSixDQUFDLENBQ0YsQ0FBQztBQUVGLElBQUksT0FBTyxFQUFFO0lBQ1gsU0FBUyxDQUFDLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQztDQUM1QztBQUVELGVBQWUsU0FBUyxDQUFDIn0=