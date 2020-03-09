/*
 * @Description:
 * @Autor: xuzp4
 * @Date: 2020-03-08 17:25:12
 * @LastEditors: xuzp4
 * @LastEditTime: 2020-03-08 17:33:33
 */

const Stack = require("./stack");

class Queue {
  constructor(max) {
    this.s1 = new Stack(max);
    this.s2 = new Stack(max);
  }
  enqueue(x) {
    this.s1.push(x);
  }
  dequeue() {
      
    if (this.s2.length > 0) {
      return this.s2.pop();
    }
    while (this.s1.length) {
      this.s2.push(this.s1.pop());
    }
    return this.s2.pop();
  }
}

module.exports = Queue;
