import { calorieCalc } from './function';

describe('function.js', () => {
	it('should return the calories from the macros you put in', () => {
		expect(calorieCalc(1, 2, 3).toBe(17));
	});
});
