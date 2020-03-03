// 你有一个用于表示一片土地的整数矩阵land，该矩阵中每个点的值代表对应地点的海拔高度。若值为0则表示水域。由垂直、水平或对角连接的水域为池塘。池塘的大小是指相连接的水域的个数。编写一个方法来计算矩阵中所有池塘的大小，返回值需要从小到大排序。
// 示例：
// 输入：
// [
//     [0,2,1,0],
//     [0,1,0,1],
//     [1,1,0,1],
//     [0,1,0,1]
// ]
// 输出： [1,2,4]
// 提示：
// 0 < len(land) <= 1000
// 0 < len(land[i]) <= 1000
/**
 * @param {number[][]} land
 * @return {number[]}
 */
var pondSizes = function(land) {
    let res = [];
    const dfs = function (land, i, j) {
        if (i < 0 || i >= land.length || j < 0 || j >= land[0].length || land[i][j] !== 0) return 0;
        let direction = [[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1]];
        land[i][j] = 1;  // 此处关键，遍历过的地方需要置1，否则会形成无限循环
        let area = 1;
        for (let k = 0; k < 8; k++) {
            area += dfs(land, i + direction[k][0], j + direction[k][1]);
        }
        return area;
    };
    for (let i = 0; i < land.length; i++) {
        for (let j = 0; j < land[0].length; j++) {
            if (land[i][j] === 0) {
                let a = dfs(land, i, j);
                res.push(a);
            }
        }
    }
    return res.sort((a, b) => a - b);
};
let result = pondSizes([
    [0,2,1,0],
    [0,1,0,1],
    [1,1,0,1],
    [0,1,0,1]
]);
console.log(result);