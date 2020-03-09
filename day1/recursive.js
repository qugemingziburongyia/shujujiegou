/*
 * @Description:1
 * @Autor: xuzp4
 * @Date: 2020-03-08 17:38:18
 * @LastEditors: xuzp4
 * @LastEditTime: 2020-03-08 17:41:05
 */

 const Stack = require('./stack')
function feb(n) {
    // O(2^n)
  return n > 2 ? feb(n - 1) + feb(n - 2) : 1;
}

function feb(n) {
    const s = new Stack();
    
}


function feb(n) {
    // O(n)
    let a = 1;
    let b = 1;
    for(let i = 2; i < n; i++) {
        const t = b;
        b = a + b;
        a = t;
    }
    return b;
}

