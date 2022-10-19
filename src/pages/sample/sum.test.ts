import { describe, expect, test } from '@jest/globals';
/**
 * It takes two numbers, adds them together, and returns the result
 * @param {number} a - number - this is the first number to be added
 * @param {number} b - number - this is the second parameter that is required to be a number.
 * @returns {number | Error} the summed value of a + b.
 */
export const sum = (a: number, b: number) => {
	try {
		const summed = a + b;
		return summed;
	} catch (e: any) {
		throw new Error('Could not sum the values from a +b because of error: ' + (e?.message || 'unknown error message.'));
	}
}
/* A test. */
describe('sum module', () => {
	test('adds 1 + 2 to equal 3', () => {
		expect(sum(1, 2)).toBe(3);
	});
});
