const canFinish = require('./courseSchedule');

describe("canFinish", () => {
    it('should return true when there are no prerequisites', () => {
        const numCourses = 3;
        const prerequisites = [];
        expect(canFinish(numCourses, prerequisites)).toBe(true);
    });

    it('should return true when it is possible to finish all courses', () => {
        const numCourses = 4;
        const prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]];
        expect(canFinish(numCourses, prerequisites)).toBe(true);
    });

    it('should return false when there is a cycle in the prerequisites', () => {
        const numCourses = 3;
        const prerequisites = [[1, 0], [0, 2], [2, 1]];
        expect(canFinish(numCourses, prerequisites)).toBe(false);
    });

    it('should return false when it is impossible to finish all courses due to circular dependencies', () => {
        const numCourses = 5;
        const prerequisites = [[1, 0], [2, 1], [3, 2], [4, 3], [0, 4]];
        expect(canFinish(numCourses, prerequisites)).toBe(false);
    });
});
