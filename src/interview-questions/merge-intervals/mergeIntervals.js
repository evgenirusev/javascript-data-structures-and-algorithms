// Given a collection of intervals, merge all overlapping intervals.

function mergeIntervals(intervals) {
    let intervalIndex = 0;
    while (intervalIndex < intervals.length - 1) {
        const interval1 = intervals[intervalIndex];
        const interval2 = intervals[intervalIndex + 1];

        if (areOverlapping(interval1, interval2)) {
            mergeIntoInterval2(intervals, intervalIndex, intervalIndex + 1);
        }

        intervalIndex++;
    }

    return intervals.filter(interval => interval);
}

function areOverlapping(interval1, interval2) {
    return interval1[1] >= interval2[0] 
        || interval1[0] === interval2[0];
}

function mergeIntoInterval2(intervals, interval1Index, interval2Index) {
    const interval1 = intervals[interval1Index];
    const interval2 = intervals[interval2Index];

    interval2[0] = interval1[0] < interval2[0] ? interval1[0] : interval2[0];
    interval2[1] = interval1[1] < interval2[1] ? interval2[1] : interval2[1];

    intervals[interval1Index] = null;
}

module.exports = mergeIntervals;
