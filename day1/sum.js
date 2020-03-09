/*
 * @Description: 
 * @Autor: xuzp4
 * @Date: 2020-03-08 19:25:21
 * @LastEditors: xuzp4
 * @LastEditTime: 2020-03-08 19:44:37
 */

//  function flattern(arr) {
//      return [].concat(...arr.map(item => {
//          isArray(item) ? flattern(item) : item;
//      }))
//  }

//  function *flattern(arr) {
//      for(let i = 0 ; i< arr.length; i++) {
//          if(Array.isArray(arr[i])) {
//             yield *flattern(arr[i])
//          } else {
//              yield arr[i]
//          }
//      }
//  }

 function *flattern(arr) {
     let stack = arr.slice();
     while(stack.length) {
        const item = stack.pop();
        if(item.constructor === Array) {
            stack = stack.concat(item);
        } else {
            yield item
        }
     }
 }
// console.log(flattern([1,2,3,[4,5],[2,[23,4,5]]]));
let f = flattern([1,2,3,[4,5],[2,[23,4,5]]])
console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.next())

// function feb(n) {
//     let stack = [n];
//     while(stack.length) {
//         const item = stack.pop();
//         if(item == 1 || item == 2) {
//             return item;
//         }else {
//             stack.push(item-1)
//             stack.push(item-2)
//         }
//     }
// }