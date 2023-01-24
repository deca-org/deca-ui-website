"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuid = void 0;
const uuid_1 = require("uuid");
/**
 * Generates random UUID
 */
const uuid = (prefix) => {
    const genUUID = (0, uuid_1.v4)();
    if (prefix) {
        return `${prefix}-${genUUID}`;
    }
    else {
        return genUUID;
    }
};
exports.uuid = uuid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9VdGlscy9yYW5kb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0JBQW9DO0FBRXBDOztHQUVHO0FBQ0ksTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFlLEVBQUUsRUFBRTtJQUN0QyxNQUFNLE9BQU8sR0FBRyxJQUFBLFNBQU0sR0FBRSxDQUFDO0lBQ3pCLElBQUksTUFBTSxFQUFFO1FBQ1YsT0FBTyxHQUFHLE1BQU0sSUFBSSxPQUFPLEVBQUUsQ0FBQztLQUMvQjtTQUFNO1FBQ0wsT0FBTyxPQUFPLENBQUM7S0FDaEI7QUFDSCxDQUFDLENBQUM7QUFQVyxRQUFBLElBQUksUUFPZiJ9