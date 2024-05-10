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
const ModalBody = react_1.default.forwardRef((_a, ref) => {
    var { children, className = '', css, as, autoGap } = _a, props = __rest(_a, ["children", "className", "css", "as", "autoGap"]);
    const context = (0, react_1.useContext)(Modal_1.ModalContext);
    const preClass = 'decaModalBody';
    return (react_1.default.createElement(Modal_styles_1.StyledModalBody, Object.assign({ autoGap: autoGap !== undefined ? autoGap : context.autoGap, ref: ref, className: (0, clsx_1.default)(className, `${preClass}-root`), as: as, css: css }, props), children));
});
if (Utils_1.__DEV__) {
    ModalBody.displayName = 'DecaUI.ModalBody';
}
exports.default = ModalBody;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWxCb2R5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9Nb2RhbC9Nb2RhbEJvZHkudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHNDQUlvQjtBQUNwQixnREFBd0I7QUFDeEIsK0NBQTBDO0FBRTFDLG1DQUFzRDtBQUN0RCxpREFBaUQ7QUFnQ2pELE1BQU0sU0FBUyxHQUF1QixlQUFLLENBQUMsVUFBVSxDQUNwRCxDQUNFLEVBQTJFLEVBQzNFLEdBQXVCLEVBQ3ZCLEVBQUU7UUFGRixFQUFFLFFBQVEsRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsT0FBTyxPQUErQixFQUExQixLQUFLLGNBQXRELGlEQUF3RCxDQUFGO0lBR3RELE1BQU0sT0FBTyxHQUFHLElBQUEsa0JBQVUsRUFBQyxvQkFBWSxDQUFrQixDQUFDO0lBRTFELE1BQU0sUUFBUSxHQUFHLGVBQWUsQ0FBQztJQUVqQyxPQUFPLENBQ0wsOEJBQUMsOEJBQWUsa0JBQ2QsT0FBTyxFQUFFLE9BQU8sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFDMUQsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBQSxjQUFJLEVBQUMsU0FBUyxFQUFFLEdBQUcsUUFBUSxPQUFPLENBQUMsRUFDOUMsRUFBRSxFQUFFLEVBQUUsRUFDTixHQUFHLEVBQUUsR0FBRyxJQUNKLEtBQUssR0FFUixRQUFRLENBQ08sQ0FDbkIsQ0FBQztBQUNKLENBQUMsQ0FDRixDQUFDO0FBRUYsSUFBSSxlQUFPLEVBQUU7SUFDWCxTQUFTLENBQUMsV0FBVyxHQUFHLGtCQUFrQixDQUFDO0NBQzVDO0FBRUQsa0JBQWUsU0FBUyxDQUFDIn0=