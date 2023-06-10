const containsNearbyDuplicate = require('./containsNearbyDuplicates.js');

describe('containsNearbyDuplicate', () => {
	it('returns true when there are nearby duplicates', () => {
		const nums = [1, 2, 3, 1];
		const k = 3;
		expect(containsNearbyDuplicate(nums, k)).toBe(true);
	});	
	it('returns false when there are no nearby duplicates', () => {
		const nums = [1, 2, 3, 4, 5];
		const k = 2;
		expect(containsNearbyDuplicate(nums, k)).toBe(false);
	});	
	it('returns true when there are nearby duplicates with the same value', () => {
		const nums = [1, 0, 1, 1];
		const k = 1;
		expect(containsNearbyDuplicate(nums, k)).toBe(true);
	});	
	it('returns false for an empty array', () => {
		const nums = [];
		const k = 1;
		expect(containsNearbyDuplicate(nums, k)).toBe(false);
	});	
	it('returns false for a single element array', () => {
		const nums = [5];
		const k = 1;
		expect(containsNearbyDuplicate(nums, k)).toBe(false);
	});	
	it('returns false when k is greater than the array length', () => {
		const nums = [1, 2, 3, 4, 5];
		const k = 6;
		expect(containsNearbyDuplicate(nums, k)).toBe(false);
	});
});