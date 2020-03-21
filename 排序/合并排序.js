/*
 * @Description: 
 * @Autor: xuzp4
 * @Date: 2020-03-15 22:16:32
 * @LastEditors: xuzp4
 * @LastEditTime: 2020-03-15 22:40:29
 */

function merge(A, p, q, r) {
    let A1 = A.slice(p, q) // 存放 左半边的临时空间
    let A2 = A.slice(q, r) // 存放 右半边的临时空间
    // 追加哨兵
    A1.push(Number.MAX_SAFE_INTEGER)
    A2.push(Number.MAX_SAFE_INTEGER)
    for (let k = p, i = 0, j = 0; k < r; k++) {
        A[k] = A1[i] < A2[j] ? A1[i++] : A2[j++];
    }
    return A;
}

function merge_sort(A, p, r) {
    if (r - p < 2) {
        return
    }
    const q = Math.ceil((p + r) / 2)
    merge_sort(A,p,q)
    merge_sort(A,q,r)
    merge(A,p,q,r)
}

const  A = Array.from({
    length: 10000000
}).map((_, i) => i).sort()
merge_sort(A,0,A.length)
console.log(A)