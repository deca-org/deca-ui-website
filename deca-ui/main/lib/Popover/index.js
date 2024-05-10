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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Popover = void 0;
const Popover_1 = __importDefault(require("./Popover"));
exports.Popover = Popover_1.default;
const PopoverContent_1 = __importDefault(require("./PopoverContent"));
const PopoverTrigger_1 = __importDefault(require("./PopoverTrigger"));
Popover_1.default.Trigger = PopoverTrigger_1.default;
Popover_1.default.Content = PopoverContent_1.default;
__exportStar(require("./Popover"), exports);
exports.default = Popover_1.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL1BvcG92ZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBZ0M7QUFRdkIsa0JBUkYsaUJBQU8sQ0FRRTtBQVBoQixzRUFBOEM7QUFDOUMsc0VBQThDO0FBRTlDLGlCQUFPLENBQUMsT0FBTyxHQUFHLHdCQUFjLENBQUM7QUFDakMsaUJBQU8sQ0FBQyxPQUFPLEdBQUcsd0JBQWMsQ0FBQztBQUVqQyw0Q0FBMEI7QUFFMUIsa0JBQWUsaUJBQU8sQ0FBQyJ9