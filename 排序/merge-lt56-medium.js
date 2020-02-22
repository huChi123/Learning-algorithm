// 给出一个区间的集合，请合并所有重叠的区间。
// 示例 1:
// 输入: [[1,3],[2,6],[8,10],[15,18]]
// 输出: [[1,6],[8,10],[15,18]]
// 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
//     示例 2:
// 输入: [[1,4],[4,5]]
// 输出: [[1,5]]
// 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    let len = intervals.length;
    let i = 0;
    while (i < len - 1) {
        let curr = intervals[i];
        let next = intervals[i + 1];
        if (curr[1] >= next[0]) {
            if (curr[1] > next[1]) {
                intervals.splice(i + 1, 1);
            } else {
                intervals.splice(i, 2, [curr[0], next[1]]);
            }
            len--;
            continue;
        }
        i++;
    }
    return intervals;
};
let result = merge([[0, 1],[2,3]]);
console.log(result, 'jls');