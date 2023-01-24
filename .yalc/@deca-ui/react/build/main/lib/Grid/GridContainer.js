"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("../Utils");
const clsx_1 = __importDefault(require("clsx"));
const react_1 = __importDefault(require("react"));
const Grid_styles_1 = require("./Grid.styles");
const GridContainer = react_1.default.forwardRef((_a, ref) => {
    var { as, css, className = '', children, spacing = 'sm', justifyContent, alignItems, n, xs, sm, md, lg, xl } = _a, gridContainerProps = __rest(_a, ["as", "css", "className", "children", "spacing", "justifyContent", "alignItems", "n", "xs", "sm", "md", "lg", "xl"]);
    const preClass = 'decaGridContainer';
    return (react_1.default.createElement(Grid_styles_1.StyledGridContainer, Object.assign({ as: as, css: css, className: (0, clsx_1.default)(className, `${preClass}-root`), ref: ref, spacing: spacing, justifyContent: justifyContent, alignItems: alignItems }, gridContainerProps), react_1.default.Children.map(children, (child) => {
        return react_1.default.cloneElement(child, {
            n: child.props.n ? child.props.n : n,
            xs: child.props.xs ? child.props.xs : xs,
            sm: child.props.sm ? child.props.sm : sm,
            md: child.props.md ? child.props.md : md,
            lg: child.props.lg ? child.props.lg : lg,
            xl: child.props.xl ? child.props.xl : xl,
        });
    })));
});
if (Utils_1.__DEV__) {
    GridContainer.displayName = 'DecaUI.GridContainer';
}
exports.default = GridContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JpZENvbnRhaW5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvR3JpZC9HcmlkQ29udGFpbmVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esc0NBSW9CO0FBQ3BCLGdEQUF3QjtBQUN4QixrREFBMEI7QUFHMUIsK0NBQW9EO0FBc0VwRCxNQUFNLGFBQWEsR0FBMkIsZUFBSyxDQUFDLFVBQVUsQ0FDNUQsQ0FDRSxFQWV3QixFQUN4QixHQUF1QixFQUN2QixFQUFFO1FBakJGLEVBQ0UsRUFBRSxFQUNGLEdBQUcsRUFDSCxTQUFTLEdBQUcsRUFBRSxFQUNkLFFBQVEsRUFDUixPQUFPLEdBQUcsSUFBSSxFQUNkLGNBQWMsRUFDZCxVQUFVLEVBQ1YsQ0FBQyxFQUNELEVBQUUsRUFDRixFQUFFLEVBQ0YsRUFBRSxFQUNGLEVBQUUsRUFDRixFQUFFLE9BRW9CLEVBRG5CLGtCQUFrQixjQWR2QixvSEFlQyxDQURzQjtJQUl2QixNQUFNLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQztJQUVyQyxPQUFPLENBQ0wsOEJBQUMsaUNBQW1CLGtCQUNsQixFQUFFLEVBQUUsRUFBRSxFQUNOLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsY0FBSSxFQUFDLFNBQVMsRUFBRSxHQUFHLFFBQVEsT0FBTyxDQUFDLEVBQzlDLEdBQUcsRUFBRSxHQUFHLEVBQ1IsT0FBTyxFQUFFLE9BQU8sRUFDaEIsY0FBYyxFQUFFLGNBQWMsRUFDOUIsVUFBVSxFQUFFLFVBQVUsSUFDbEIsa0JBQWtCLEdBRXJCLGVBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUNqQixRQUE0RCxFQUM1RCxDQUFDLEtBQXVELEVBQUUsRUFBRTtRQUMxRCxPQUFPLGVBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFO1lBQy9CLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsRUFBRSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN4QyxFQUFFLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3hDLEVBQUUsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDeEMsRUFBRSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN4QyxFQUFFLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO1NBQ3pDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FDRixDQUNtQixDQUN2QixDQUFDO0FBQ0osQ0FBQyxDQUNGLENBQUM7QUFFRixJQUFJLGVBQU8sRUFBRTtJQUNYLGFBQWEsQ0FBQyxXQUFXLEdBQUcsc0JBQXNCLENBQUM7Q0FDcEQ7QUFFRCxrQkFBZSxhQUFhLENBQUMifQ==