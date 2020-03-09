/*
 * @Description: 队列
 * @Autor: xuzp4
 * @Date: 2020-03-08 17:02:07
 * @LastEditors: xuzp4
 * @LastEditTime: 2020-03-08 17:20:05
 */

// 闭环,先入先出
class Queue {
  constructor(max = 1000) {
    this.max = max;
    this.data = new Array(max);
    this.head = 0;
    this.tail = 0;
    this.size = 0;
  }
  /**
   *入列
   */
  enqueue(x) {
    // overflow
    if (this.size === this.max) {
      throw "stackoverflow";
    }
    this.data[this.tail] = x; // 尾加
    if (this.tail === this.max - 1) {  // 尾指针到达尾部,返回第一个
      this.tail = 0;
    }
    this.tail++;
    this.size++;
  }
  /**
   * 出列
   */
  dequeue() {
    // undeflow
    if (this.size === 0) {
      throw "stackunderflow";
    }
    const x = this.data[this.head];
    this.head++;
    this.size--;
    return x;
  }

  get length() {
    return this.size;
  }
}

module.exports = Queue;
