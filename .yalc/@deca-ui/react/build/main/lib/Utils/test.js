"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = exports.remToPx = void 0;
const polished_1 = require("polished");
const color_1 = require("./color");
const remToPx = (remVal) => {
    return parseFloat(remVal.slice(0, -3)) * 16 + 'px';
};
exports.remToPx = remToPx;
// all of these methods are helper functions for cypress test files
class Test {
    // turn hex to rgb or rgba
    static color(inputColor) {
        const cssColor = (0, polished_1.cssVar)(`--colors-${inputColor}`);
        if (cssColor.charAt(0) === '#') {
            const rgbObj = (0, color_1.hexRgb)(cssColor);
            const r = rgbObj.red;
            const g = rgbObj.green;
            const b = rgbObj.blue;
            const a = rgbObj.alpha;
            if (cssColor.length > 7) {
                return `rgba(${r}, ${g}, ${b}, ${a})`;
            }
            return `rgb(${r}, ${g}, ${b})`;
        }
        return cssColor;
    }
    static size(inputSize) {
        const inputArr = inputSize.split(' ');
        if (inputArr.length === 1) {
            const cssSpace = (0, polished_1.cssVar)(`--sizes-${inputSize}`);
            return (0, exports.remToPx)(cssSpace);
        }
        for (let i = 0; i < inputArr.length; i++) {
            if (Number.isInteger(parseInt(inputArr[i]))) {
                inputArr[i] = (0, polished_1.cssVar)(`--sizes-${inputArr[i]}`).slice(0, -3);
            }
        }
        return eval(inputArr.join('')) * 16 + 'px';
    }
    static space(inputSpace) {
        const inputArr = inputSpace.split(' ');
        if (inputArr.length === 1) {
            const cssSpace = (0, polished_1.cssVar)(`--space-${inputSpace}`);
            return (0, exports.remToPx)(cssSpace);
        }
        for (let i = 0; i < inputArr.length; i++) {
            if (Number.isInteger(parseInt(inputArr[i]))) {
                inputArr[i] = (0, polished_1.cssVar)(`--space-${inputArr[i]}`).slice(0, -3);
            }
        }
        return eval(inputArr.join('')) * 16 + 'px';
    }
    static fontSize(inputFontSize) {
        const cssFontSize = (0, polished_1.cssVar)(`--fontSizes-${inputFontSize}`);
        return (0, exports.remToPx)(cssFontSize);
    }
    static borderRadius(inputBorderRadius) {
        const cssBorderRadius = (0, polished_1.cssVar)(`--radii-${inputBorderRadius}`);
        return cssBorderRadius;
    }
    static font(inputFont) {
        const cssFont = (0, polished_1.cssVar)(`--fonts-${inputFont}`);
        return cssFont;
    }
    static breakpoint(inputBreakpoint) {
        const cssBreakpoint = (0, polished_1.cssVar)(`--breakpoints-${inputBreakpoint}`);
        return parseInt(cssBreakpoint.slice(0, -2));
    }
    static lineHeight(inputLineHeight) {
        const cssLineHeight = (0, polished_1.cssVar)(`--lineHeights-${inputLineHeight}`);
        return (0, exports.remToPx)(cssLineHeight);
    }
    static fontWeight(inputFontWeight) {
        const cssFontWeight = (0, polished_1.cssVar)(`--fontWeights-${inputFontWeight}`);
        return cssFontWeight;
    }
}
exports.Test = Test;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvVXRpbHMvdGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBa0M7QUFDbEMsbUNBQWlDO0FBRTFCLE1BQU0sT0FBTyxHQUFHLENBQUMsTUFBdUIsRUFBRSxFQUFFO0lBQ2pELE9BQU8sVUFBVSxDQUFFLE1BQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztBQUNqRSxDQUFDLENBQUM7QUFGVyxRQUFBLE9BQU8sV0FFbEI7QUFFRixtRUFBbUU7QUFDbkUsTUFBYSxJQUFJO0lBQ2YsMEJBQTBCO0lBQzFCLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBa0I7UUFDN0IsTUFBTSxRQUFRLEdBQUcsSUFBQSxpQkFBTSxFQUFDLFlBQVksVUFBVSxFQUFFLENBQUMsQ0FBQztRQUNsRCxJQUFLLFFBQW1CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUMxQyxNQUFNLE1BQU0sR0FBRyxJQUFBLGNBQU0sRUFBQyxRQUFrQixDQUFDLENBQUM7WUFDMUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNyQixNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDdEIsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUN2QixJQUFLLFFBQW1CLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDbkMsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ3ZDO1lBQ0QsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7U0FDaEM7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFpQjtRQUMzQixNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDekIsTUFBTSxRQUFRLEdBQUcsSUFBQSxpQkFBTSxFQUFDLFdBQVcsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUNoRCxPQUFPLElBQUEsZUFBTyxFQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMzQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUksSUFBQSxpQkFBTSxFQUFDLFdBQVcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDekU7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBQzdDLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQWtCO1FBQzdCLE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN6QixNQUFNLFFBQVEsR0FBRyxJQUFBLGlCQUFNLEVBQUMsV0FBVyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1lBQ2pELE9BQU8sSUFBQSxlQUFPLEVBQUMsUUFBUSxDQUFDLENBQUM7U0FDMUI7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzNDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBSSxJQUFBLGlCQUFNLEVBQUMsV0FBVyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN6RTtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDN0MsQ0FBQztJQUVELE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBcUI7UUFDbkMsTUFBTSxXQUFXLEdBQUcsSUFBQSxpQkFBTSxFQUFDLGVBQWUsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUMzRCxPQUFPLElBQUEsZUFBTyxFQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxNQUFNLENBQUMsWUFBWSxDQUFDLGlCQUF5QjtRQUMzQyxNQUFNLGVBQWUsR0FBRyxJQUFBLGlCQUFNLEVBQUMsV0FBVyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7UUFDL0QsT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBaUI7UUFDM0IsTUFBTSxPQUFPLEdBQUcsSUFBQSxpQkFBTSxFQUFDLFdBQVcsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUMvQyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxlQUF1QjtRQUN2QyxNQUFNLGFBQWEsR0FBRyxJQUFBLGlCQUFNLEVBQUMsaUJBQWlCLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDakUsT0FBTyxRQUFRLENBQUUsYUFBd0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxlQUF1QjtRQUN2QyxNQUFNLGFBQWEsR0FBRyxJQUFBLGlCQUFNLEVBQUMsaUJBQWlCLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDakUsT0FBTyxJQUFBLGVBQU8sRUFBQyxhQUFhLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxlQUF1QjtRQUN2QyxNQUFNLGFBQWEsR0FBRyxJQUFBLGlCQUFNLEVBQUMsaUJBQWlCLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDakUsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztDQUNGO0FBM0VELG9CQTJFQyJ9