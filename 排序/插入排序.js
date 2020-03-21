/*
 * @Description: 插入排序
 * @Autor: xuzp4
 * @Date: 2020-03-15 17:10:08
 * @LastEditors: xuzp4
 * @LastEditTime: 2020-03-15 18:11:01
 */
let arr = [23,4,5,6,5,7,34,76,7675,45,46,5,6,6577,65,776,68,768,7,867,8,76,867]
function insert(arr,i,A) {
    let p = i-1;
    while(p>=0 && arr[p] > A) {
        arr[p+1] = arr[p];
        p--;
    }
    arr[p+1] = A;
}

// 二分法插入  
//  1,2,3,4,5  3
// function er_insert(arr,i,x) {
//     let l = 0,
//     r = i-1,
//     guess;
//     arr.splice(i,1)
//     while(l<=r) {
//         guess = Math.floor((l+r)/2)
//         if(arr[guess] === x) {
//             arr.splice(guess,0,x);
//             return;
//         } else if(arr[guess] > x) {
//             r = guess-1
//         } else {
//             l = guess+1
//         }
//     }
//     arr.splice(l,0,x)
// }

function insert_arr(arr) {
    for(let i = 0; i < arr.length;i++) {
        // insert(arr,i,arr[i])
        er_insert(arr,i,arr[i])
    }
    return arr;
}
console.log(insert_arr(arr))