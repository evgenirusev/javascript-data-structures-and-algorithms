const numberOfIslands = require('./numberOfIslands');

describe('Number of Islands', () => {
  it('should return 1 for the first example', () => {
    const grid = [
      ['1', '1', '1', '1', '0'],
      ['1', '1', '0', '1', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '0', '0', '0']
    ];
    expect(numberOfIslands(grid)).toBe(1);
  });

  it('should return 3 for the second example', () => {
    const grid = [
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1']
    ];
    expect(numberOfIslands(grid)).toBe(3);
  });

  it('should return 0 for an empty grid', () => {
    const grid = [];
    expect(numberOfIslands(grid)).toBe(0);
  });

  it('should return 0 for a grid with all water', () => {
    const grid = [
      ['0', '0', '0'],
      ['0', '0', '0'],
      ['0', '0', '0']
    ];
    expect(numberOfIslands(grid)).toBe(0);
  });

  it('should return 1 for a grid with a single island', () => {
    const grid = [
      ['1', '1', '1'],
      ['1', '1', '1'],
      ['1', '1', '1']
    ];
    expect(numberOfIslands(grid)).toBe(1);
  });
});
