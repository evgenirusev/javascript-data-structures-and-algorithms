const mergeTwoLists = require('./mergeTwoLists');

describe("mergeTwoLists", () => {
  it('should merge two sorted lists - Test Case 1', () => {
    const l1 = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 4,
          next: null
        }
      }
    };
    const l2 = {
      val: 1,
      next: {
        val: 3,
        next: {
          val: 4,
          next: null
        }
      }
    };
    const expectedOutput = {
      val: 1,
      next: {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 3,
            next: {
              val: 4,
              next: {
                val: 4,
                next: null
              }
            }
          }
        }
      }
    };
    expect(mergeTwoLists(l1, l2)).toEqual(expectedOutput);
  });

  it('should merge two sorted lists - Test Case 2', () => {
    const l3 = null;
    const l4 = null;
    const expectedOutput = null;
    expect(mergeTwoLists(l3, l4)).toEqual(expectedOutput);
  });

  it('should merge two sorted lists - Test Case 3', () => {
    const l5 = null;
    const l6 = {
      val: 0,
      next: null
    };
    const expectedOutput = {
      val: 0,
      next: null
    };
    expect(mergeTwoLists(l5, l6)).toEqual(expectedOutput);
  });
});
