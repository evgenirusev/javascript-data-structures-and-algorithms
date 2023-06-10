const maximumSubarray = require('./maximumSubarray');

describe('maximumSubarray', () => {
	it('should return the correct range for positive numbers', () => {
		const nums = [1, 2, 3, 4, 5];
		const expectedRange = [0, 4];
		expect(maximumSubarray(nums)).toEqual(expectedRange);
	});

	it('should return the correct range for negative numbers', () => {
		const nums = [-1, -2, -3, -4, -5];
		const expectedRange = [0, 0];
		expect(maximumSubarray(nums)).toEqual(expectedRange);
	});

	it('should return the correct range for a mix of positive and negative numbers', () => {
		const nums = [2, -1, 3, 4, -2, 1];
		const expectedRange = [0, 3];
		expect(maximumSubarray(nums)).toEqual(expectedRange);
	});

	it('should return the correct range when the maximum sum is at the end of the array', () => {
		const nums = [1, 2, 3, -10, 4, 5];
		const expectedRange = [4, 5];
		expect(maximumSubarray(nums)).toEqual(expectedRange);
	});

	it('should return the correct range when the maximum sum is at the beginning of the array', () => {
		const nums = [10, -2, -3, -4, -5];
		const expectedRange = [0, 0];
		expect(maximumSubarray(nums)).toEqual(expectedRange);
	});

	it('should return the correct range when the array contains only one element', () => {
		const nums = [5];
		const expectedRange = [0, 0];
		expect(maximumSubarray(nums)).toEqual(expectedRange);
	});
});