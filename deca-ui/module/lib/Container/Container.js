import { __DEV__, } from '../Utils';
import clsx from 'clsx';
import React from 'react';
import { StyledContainer } from './Container.styles';
const Container = React.forwardRef(({ as, css, className = '', children, px = 'sm', responsive = true, fluid = false, ...containerProps }, ref) => {
    const preClass = 'decaContainer';
    return (React.createElement(StyledContainer, { as: as, css: css, className: clsx(className, `${preClass}-root`), px: px, responsive: responsive, fluid: fluid, ref: ref, ...containerProps }, children));
});
if (__DEV__) {
    Container.displayName = 'DecaUI.Container';
}
export default Container;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9Db250YWluZXIvQ29udGFpbmVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBR0wsT0FBTyxHQUNSLE1BQU0sWUFBWSxDQUFDO0FBQ3BCLE9BQU8sSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUN4QixPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFFMUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBMENyRCxNQUFNLFNBQVMsR0FBdUIsS0FBSyxDQUFDLFVBQVUsQ0FDcEQsQ0FDRSxFQUNFLEVBQUUsRUFDRixHQUFHLEVBQ0gsU0FBUyxHQUFHLEVBQUUsRUFDZCxRQUFRLEVBQ1IsRUFBRSxHQUFHLElBQUksRUFDVCxVQUFVLEdBQUcsSUFBSSxFQUNqQixLQUFLLEdBQUcsS0FBSyxFQUNiLEdBQUcsY0FBYyxFQUNDLEVBQ3BCLEdBQXVCLEVBQ3ZCLEVBQUU7SUFDRixNQUFNLFFBQVEsR0FBRyxlQUFlLENBQUM7SUFFakMsT0FBTyxDQUNMLG9CQUFDLGVBQWUsSUFDZCxFQUFFLEVBQUUsRUFBRSxFQUNOLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxRQUFRLE9BQU8sQ0FBQyxFQUM5QyxFQUFFLEVBQUUsRUFBRSxFQUNOLFVBQVUsRUFBRSxVQUFVLEVBQ3RCLEtBQUssRUFBRSxLQUFLLEVBQ1osR0FBRyxFQUFFLEdBQUcsS0FDSixjQUFjLElBRWpCLFFBQVEsQ0FDTyxDQUNuQixDQUFDO0FBQ0osQ0FBQyxDQUNGLENBQUM7QUFFRixJQUFJLE9BQU8sRUFBRTtJQUNYLFNBQVMsQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLENBQUM7Q0FDNUM7QUFFRCxlQUFlLFNBQVMsQ0FBQyJ9