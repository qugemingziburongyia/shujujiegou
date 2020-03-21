/*
 * @Description: 算法5，排列组合
 * @Autor: xuzp4
 * @Date: 2020-03-15 12:33:31
 * @LastEditors: xuzp4
 * @LastEditTime: 2020-03-15 12:43:37
 */

function perm(A) {
    if (A.length === 1) return [A];
    return [].concat(...A.map((a, i) => perm(A.slice(0, i).concat(A.slice(i + 1))).map(p => [a].concat(p))))
}

console.log(perm([1,2,3,4,5,6,7,8]))