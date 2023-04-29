const nQueenProblem = require('./n-queen-problem');

describe('nQueenProblem', () => {
	it('returns correct number of solutions for n = 1', () => {
		expect(nQueenProblem(1)).toEqual([['Q']]);
	});

	it('returns correct number of solutions for n = 4', () => {
		expect(nQueenProblem(4)).toEqual(
			[
				['.Q..', '...Q', 'Q...', '..Q.'],
				['..Q.', 'Q...', '...Q', '.Q..']
			]
		);
	});

	it('returns correct number of solutions for n = 8', () => {
		expect(nQueenProblem(8).length).toEqual(92);
	});

	it('throws error if n is not an integer', () => {
		expect(() => nQueenProblem('3')).toThrow();
		expect(() => nQueenProblem(3.5)).toThrow();
	});
});
