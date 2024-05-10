import { v4 as uuidv4 } from 'uuid';
/**
 * Generates random UUID
 */
export const uuid = (prefix) => {
    const genUUID = uuidv4();
    if (prefix) {
        return `${prefix}-${genUUID}`;
    }
    else {
        return genUUID;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9VdGlscy9yYW5kb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEVBQUUsSUFBSSxNQUFNLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFcEM7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFlLEVBQUUsRUFBRTtJQUN0QyxNQUFNLE9BQU8sR0FBRyxNQUFNLEVBQUUsQ0FBQztJQUN6QixJQUFJLE1BQU0sRUFBRTtRQUNWLE9BQU8sR0FBRyxNQUFNLElBQUksT0FBTyxFQUFFLENBQUM7S0FDL0I7U0FBTTtRQUNMLE9BQU8sT0FBTyxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQyxDQUFDIn0=