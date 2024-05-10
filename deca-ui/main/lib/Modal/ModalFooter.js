"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const react_1 = __importStar(require("react"));
const Modal_1 = require("./Modal");
const Modal_styles_1 = require("./Modal.styles");
const ModalFooter = react_1.default.forwardRef((_a, ref) => {
    var { children, className = '', css, as, autoGap } = _a, props = __rest(_a, ["children", "className", "css", "as", "autoGap"]);
    const context = (0, react_1.useContext)(Modal_1.ModalContext);
    const preClass = 'decaModalFooter';
    return (react_1.default.createElement(Modal_styles_1.StyledModalFooter, Object.assign({ autoGap: autoGap !== undefined ? autoGap : context.autoGap, ref: ref, className: (0, clsx_1.default)(className, `${preClass}-root`), as: as, css: css }, props), children));
});
if (Utils_1.__DEV__) {
    ModalFooter.displayName = 'DecaUI.ModalFooter';
}
exports.default = ModalFooter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWxGb290ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL01vZGFsL01vZGFsRm9vdGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxzQ0FJb0I7QUFDcEIsZ0RBQXdCO0FBQ3hCLCtDQUEwQztBQUUxQyxtQ0FBc0Q7QUFDdEQsaURBQW1EO0FBZ0NuRCxNQUFNLFdBQVcsR0FBeUIsZUFBSyxDQUFDLFVBQVUsQ0FDeEQsQ0FDRSxFQU9zQixFQUN0QixHQUF1QixFQUN2QixFQUFFO1FBVEYsRUFDRSxRQUFRLEVBQ1IsU0FBUyxHQUFHLEVBQUUsRUFDZCxHQUFHLEVBQ0gsRUFBRSxFQUNGLE9BQU8sT0FFYSxFQURqQixLQUFLLGNBTlYsaURBT0MsQ0FEUztJQUlWLE1BQU0sT0FBTyxHQUFHLElBQUEsa0JBQVUsRUFBQyxvQkFBWSxDQUFrQixDQUFDO0lBRTFELE1BQU0sUUFBUSxHQUFHLGlCQUFpQixDQUFDO0lBRW5DLE9BQU8sQ0FDTCw4QkFBQyxnQ0FBaUIsa0JBQ2hCLE9BQU8sRUFBRSxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQzFELEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsY0FBSSxFQUFDLFNBQVMsRUFBRSxHQUFHLFFBQVEsT0FBTyxDQUFDLEVBQzlDLEVBQUUsRUFBRSxFQUFFLEVBQ04sR0FBRyxFQUFFLEdBQUcsSUFDSixLQUFLLEdBRVIsUUFBUSxDQUNTLENBQ3JCLENBQUM7QUFDSixDQUFDLENBQ0YsQ0FBQztBQUVGLElBQUksZUFBTyxFQUFFO0lBQ1gsV0FBVyxDQUFDLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQztDQUNoRDtBQUVELGtCQUFlLFdBQVcsQ0FBQyJ9