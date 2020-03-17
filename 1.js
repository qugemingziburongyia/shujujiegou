/*
 * @Description:
 * @Autor: xuzp4
 * @Date: 2020-03-07 15:10:12
 * @LastEditors: xuzp4
 * @LastEditTime: 2020-03-07 16:21:33
 */

// 当前index 12  pageSize 10
let index = 12,
  pageSize = 10;
let a = Math.ceil((index + 1) / pageSize);
console.log(a);

// 2. 20-30的随机数
var b = Math.round(Math.random() * 10 + 20);
console.log(b);

// 判断一个数是否素数
function is_prime(n) {
  if (n <= 1) return false;
  let is_prime = true;
  let N = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= N; i++) {
    if (n % i === 0) {
      is_prime = false;
      break;
    }
  }
  return is_prime;
}


function solve(arr,N) {
    const s = new Set();
    for(let i = 0; i <= arr.length;i++) {
        for(let j = i+1; j <= arr.length; j++) {
            const remain = arr.slice(i,j).reduce((x,y) => x+y,0) % N
            s.add(remain);
        }
    }
    console.log(s)
    return s.has(0)
}

// console.log(solve([1,2,3],4))
function fibonacci0(n) {
  return n===1 || n ===2 ? 1 : fibonacci0(n-1) + fibonacci0(n-2)
}


function fibonacci(n) {
  return Array(n).fill().reduce(([a,b],_) => {
    return [b,a+b]
  },[0,1])[1]
}
// console.log(fibonacci(9));

function *sieve_premise(n) {
  let numbers = Array.from({length:n-2},(_,i) => i+2) // N
  let p = null;
  while(p = numbers.shift()) {
    yield p;
    numbers =  numbers.filter(t => t % p !== 0) // N
  }
  return numbers
}
const it = sieve_premise(100000)
console.log([...it]) 


