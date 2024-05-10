import React from 'react';
import { __DEV__ } from '../Utils';
import { StyledGridRuler, StyledGridRulerItem } from './Grid.styles';
const GridRuler = ({ spacing = 'sm' }) => {
    return (React.createElement(StyledGridRuler, { spacing: spacing }, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (React.createElement(StyledGridRulerItem, { key: i })))));
};
if (__DEV__) {
    GridRuler.displayName = 'DecaUI.GridRuler';
}
export default GridRuler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JpZFJ1bGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9HcmlkL0dyaWRSdWxlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVlyRSxNQUFNLFNBQVMsR0FBRyxDQUFDLEVBQUUsT0FBTyxHQUFHLElBQUksRUFBUyxFQUFFLEVBQUU7SUFDOUMsT0FBTyxDQUNMLG9CQUFDLGVBQWUsSUFBQyxPQUFPLEVBQUUsT0FBTyxJQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUNsRCxvQkFBQyxtQkFBbUIsSUFBQyxHQUFHLEVBQUUsQ0FBQyxHQUFJLENBQ2hDLENBQUMsQ0FDYyxDQUNuQixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsSUFBSSxPQUFPLEVBQUU7SUFDWCxTQUFTLENBQUMsV0FBVyxHQUFHLGtCQUFrQixDQUFDO0NBQzVDO0FBRUQsZUFBZSxTQUFTLENBQUMifQ==