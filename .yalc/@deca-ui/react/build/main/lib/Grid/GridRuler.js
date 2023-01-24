"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Utils_1 = require("../Utils");
const Grid_styles_1 = require("./Grid.styles");
const GridRuler = ({ spacing = 'sm' }) => {
    return (react_1.default.createElement(Grid_styles_1.StyledGridRuler, { spacing: spacing }, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (react_1.default.createElement(Grid_styles_1.StyledGridRulerItem, { key: i })))));
};
if (Utils_1.__DEV__) {
    GridRuler.displayName = 'DecaUI.GridRuler';
}
exports.default = GridRuler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JpZFJ1bGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9HcmlkL0dyaWRSdWxlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBMEI7QUFDMUIsc0NBQXFDO0FBQ3JDLCtDQUFxRTtBQVlyRSxNQUFNLFNBQVMsR0FBRyxDQUFDLEVBQUUsT0FBTyxHQUFHLElBQUksRUFBUyxFQUFFLEVBQUU7SUFDOUMsT0FBTyxDQUNMLDhCQUFDLDZCQUFlLElBQUMsT0FBTyxFQUFFLE9BQU8sSUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FDbEQsOEJBQUMsaUNBQW1CLElBQUMsR0FBRyxFQUFFLENBQUMsR0FBSSxDQUNoQyxDQUFDLENBQ2MsQ0FDbkIsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLElBQUksZUFBTyxFQUFFO0lBQ1gsU0FBUyxDQUFDLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQztDQUM1QztBQUVELGtCQUFlLFNBQVMsQ0FBQyJ9