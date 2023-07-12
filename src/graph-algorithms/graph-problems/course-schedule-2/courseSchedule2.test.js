const courseSchedule2 = require('./courseSchedule2');

describe('courseSchedule2', () => {
    it('should return the correct order for a valid course schedule', () => {
        const numCourses = 4;
        const prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]];
        const expectedOrder = [0, 1, 2, 3];

        expect(courseSchedule2(numCourses, prerequisites)).toEqual(expectedOrder);
    });

    it('should return an empty array for an invalid course schedule with cycles', () => {
        const numCourses = 3;
        const prerequisites = [[1, 0], [0, 2], [2, 1]];
        const expectedOrder = [];

        expect(courseSchedule2(numCourses, prerequisites)).toEqual(expectedOrder);
    });

    it('should return the correct order for a course schedule with single course and no prerequisites', () => {
        const numCourses = 1;
        const prerequisites = [];
        const expectedOrder = [0];

        expect(courseSchedule2(numCourses, prerequisites)).toEqual(expectedOrder);
    });

    it('should return an empty array for an invalid course schedule with more prerequisites than courses', () => {
        const numCourses = 2;
        const prerequisites = [[1, 0], [0, 1], [0, 1]];
        const expectedOrder = [];

        expect(courseSchedule2(numCourses, prerequisites)).toEqual(expectedOrder);
    });
});
