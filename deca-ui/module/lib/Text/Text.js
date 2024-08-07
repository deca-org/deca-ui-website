import { ThemeContext } from '../Theme';
import { __DEV__, } from '../Utils';
import React from 'react';
import StyledText from './Text.styles';
const Text = React.forwardRef(({ as, css, children, weight, size, lineHeight, center, mono = false, ...textProps }, ref) => {
    const preClass = 'decaText';
    const { dark } = React.useContext(ThemeContext);
    return (React.createElement(StyledText, { as: as, css: css, className: `${preClass}-root`, ref: ref, weight: weight, center: center, size: size, isDark: dark, lineHeight: lineHeight, mono: mono, ...textProps }, children));
});
if (__DEV__) {
    Text.displayName = 'DecaUI.Text';
}
export default Text;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvVGV4dC9UZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRTFDLE9BQU8sRUFJTCxPQUFPLEdBQ1IsTUFBTSxZQUFZLENBQUM7QUFDcEIsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBRTFCLE9BQU8sVUFBVSxNQUFNLGVBQWUsQ0FBQztBQTBGdkMsTUFBTSxJQUFJLEdBQWtCLEtBQUssQ0FBQyxVQUFVLENBQzFDLENBQ0UsRUFDRSxFQUFFLEVBQ0YsR0FBRyxFQUNILFFBQVEsRUFDUixNQUFNLEVBQ04sSUFBSSxFQUNKLFVBQVUsRUFDVixNQUFNLEVBQ04sSUFBSSxHQUFHLEtBQUssRUFDWixHQUFHLFNBQVMsRUFDQyxFQUNmLEdBQXVCLEVBQ3ZCLEVBQUU7SUFDRixNQUFNLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFFNUIsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFaEQsT0FBTyxDQUNMLG9CQUFDLFVBQVUsSUFDVCxFQUFFLEVBQUUsRUFBRSxFQUNOLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLEdBQUcsUUFBUSxPQUFPLEVBQzdCLEdBQUcsRUFBRSxHQUFHLEVBQ1IsTUFBTSxFQUFFLE1BQU0sRUFDZCxNQUFNLEVBQUUsTUFBTSxFQUNkLElBQUksRUFBRSxJQUFJLEVBQ1YsTUFBTSxFQUFFLElBQUksRUFDWixVQUFVLEVBQUUsVUFBVSxFQUN0QixJQUFJLEVBQUUsSUFBSSxLQUNOLFNBQVMsSUFFWixRQUFRLENBQ0UsQ0FDZCxDQUFDO0FBQ0osQ0FBQyxDQUNGLENBQUM7QUFFRixJQUFJLE9BQU8sRUFBRTtJQUNYLElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDO0NBQ2xDO0FBRUQsZUFBZSxJQUFJLENBQUMifQ==