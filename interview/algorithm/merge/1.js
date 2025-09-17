function merge(intervals) {
    if (intervals.length <= 1) return intervals;
    // start 按第一项排序
    //快排  On(log n)    
    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        const lastMergedInterval = merged[merged.length - 1];
        if (currentInterval[0] <= lastMergedInterval[1]) {
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], 
                currentInterval[1]);
        } else {
            merged.push(currentInterval);
        }
    }
    return merged;
}