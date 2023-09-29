const isNStraightHand = require('./isNStraightHand');

describe("isNStraightHand", () => {

  it('returns true for valid input', () => {
    const hand = [1, 2, 3, 6, 2, 3, 4, 7, 8];
    const groupSize = 3;
    expect(isNStraightHand(hand, groupSize)).toBe(true);
  });

  it('returns false for invalid input', () => {
    const hand = [1, 2, 3, 6, 2, 3, 4, 7, 8];
    const groupSize = 4;
    expect(isNStraightHand(hand, groupSize)).toBe(false);
  });

  it('returns false for uneven group size', () => {
    const hand = [1, 2, 3, 6, 2, 3, 4, 7, 8];
    const groupSize = 2;
    expect(isNStraightHand(hand, groupSize)).toBe(false);
  });

  it('returns false for empty hand array', () => {
    const hand = [];
    const groupSize = 3;
    expect(isNStraightHand(hand, groupSize)).toBe(false);
  });

  it('returns true for a single-card hand', () => {
    const hand = [5];
    const groupSize = 1;
    expect(isNStraightHand(hand, groupSize)).toBe(true);
  });
});
