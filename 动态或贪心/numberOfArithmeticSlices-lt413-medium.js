// 如果一个数列至少有三个元素，并且任意两个相邻元素之差相同，则称该数列为等差数列。
// 例如，以下数列为等差数列:
//     1, 3, 5, 7, 9
// 7, 7, 7, 7
// 3, -1, -5, -9
// 以下数列不是等差数列。
// 1, 1, 2, 5, 7
// 数组 A 包含 N 个数，且索引从0开始。数组 A 的一个子数组划分为数组 (P, Q)，P 与 Q 是整数且满足 0<=P<Q<N 。
// 如果满足以下条件，则称子数组(P, Q)为等差数组：
// 元素 A[P], A[p + 1], ..., A[Q - 1], A[Q] 是等差的。并且 P + 1 < Q 。
// 函数要返回数组 A 中所有为等差数组的子数组个数。
//
// 示例:
//     A = [1, 2, 3, 4]
//
// 返回: 3, A 中有三个子等差数组: [1, 2, 3], [2, 3, 4] 以及自身 [1, 2, 3, 4]。
/**
 * @param {number[]} A
 * @return {number}
 * 这道题非常像求回文序列子序列个数有多少，故很容易的联想到使用中心扩展法。要构成等差数列，该数列长度至少为3。
 * 用中心扩展法发现很容易重复，需要去重，很繁琐，最简洁的方法是动态规划；
 * 本题的动态转移方程：dp[i] = dp[i - 1] + 1;
 * 这个状态转移方程想了很久，还是审题不够仔细，此处只需要考虑连续的元素即可。例如：[1,2,3,4,5]只需要考虑在[1,2,3,4]的基础上新增一个元素，新增后的不需要考虑[1,3,5]这个子数组。
 * dp表每个位置的值对应的是以这个位置为结尾的等差数组的数目；
 */
var numberOfArithmeticSlices = function(A) {
    let len = A.length;
    let dp = Array(len).fill(0);
    let sum = 0;
    for (let i = 2; i < len; i++) {
        if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
            dp[i] = dp[i - 1] + 1;
            sum += dp[i];
        }
    }
    return sum;
};
let result = numberOfArithmeticSlices([1,2,3,4,5]);
console.log(result);