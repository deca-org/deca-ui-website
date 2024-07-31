import { __DEV__, } from '../Utils';
import clsx from 'clsx';
import React, { useContext } from 'react';
import { ModalContext } from './Modal';
import { StyledModalFooter } from './Modal.styles';
const ModalFooter = React.forwardRef(({ children, className = '', css, as, autoGap, ...props }, ref) => {
    const context = useContext(ModalContext);
    const preClass = 'decaModalFooter';
    return (React.createElement(StyledModalFooter, { autoGap: autoGap !== undefined ? autoGap : context.autoGap, ref: ref, className: clsx(className, `${preClass}-root`), as: as, css: css, ...props }, children));
});
if (__DEV__) {
    ModalFooter.displayName = 'DecaUI.ModalFooter';
}
export default ModalFooter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWxGb290ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL01vZGFsL01vZGFsRm9vdGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQ0wsT0FBTyxHQUdSLE1BQU0sWUFBWSxDQUFDO0FBQ3BCLE9BQU8sSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUN4QixPQUFPLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUUxQyxPQUFPLEVBQUUsWUFBWSxFQUFpQixNQUFNLFNBQVMsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWdDbkQsTUFBTSxXQUFXLEdBQXlCLEtBQUssQ0FBQyxVQUFVLENBQ3hELENBQ0UsRUFDRSxRQUFRLEVBQ1IsU0FBUyxHQUFHLEVBQUUsRUFDZCxHQUFHLEVBQ0gsRUFBRSxFQUNGLE9BQU8sRUFDUCxHQUFHLEtBQUssRUFDWSxFQUN0QixHQUF1QixFQUN2QixFQUFFO0lBQ0YsTUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBa0IsQ0FBQztJQUUxRCxNQUFNLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQztJQUVuQyxPQUFPLENBQ0wsb0JBQUMsaUJBQWlCLElBQ2hCLE9BQU8sRUFBRSxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQzFELEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxRQUFRLE9BQU8sQ0FBQyxFQUM5QyxFQUFFLEVBQUUsRUFBRSxFQUNOLEdBQUcsRUFBRSxHQUFHLEtBQ0osS0FBSyxJQUVSLFFBQVEsQ0FDUyxDQUNyQixDQUFDO0FBQ0osQ0FBQyxDQUNGLENBQUM7QUFFRixJQUFJLE9BQU8sRUFBRTtJQUNYLFdBQVcsQ0FBQyxXQUFXLEdBQUcsb0JBQW9CLENBQUM7Q0FDaEQ7QUFFRCxlQUFlLFdBQVcsQ0FBQyJ9