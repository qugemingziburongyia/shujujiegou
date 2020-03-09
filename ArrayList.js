require('./lib/litertools')
class ArrayList {
  constructor(max = 1000) {
    this.data = new Array(max * 3);
    // 头指针
    this.head = null;
    this.free = 0;
    for (let i = 0; i < max - 1; i++) {
      this.data[i * 3] = (i + 1) * 3;
    }
    // free链表的最后一个节点的next指向null
    this.data[(max - 1) * 3] = null;
  }

  malloc() {
    // 内存溢出
    if (this.free === null) {
      throw "out of memory";
    }
    const x = this.free;

    // 相当于free链表的第一个被删除了,用来存储x
    this.free = this.data[this.free];
    return x;
  }
  // 回收内存
  mfree(addr) {
    this.data[addr] = this.free;
    this.free = addr;
  }
  saerch(key) {
      return this.transverse().find(k => k===key)
  }
  *transverse() {
    let p = this.head;
    while (p !== null) {
        yield this.data[p+1]
        p = this.data[p]
    }
  }
  insert(key) {
    const addr = this.malloc();
    this.data[addr] = this.head; // node.next =head
    this.data[addr + 2] = null; // node.prev = null
    this.data[addr + 1] = key;
    // 如果头节点存在
    if (this.head !== null) {
      this.data[this.head + 2] = addr;
    }
    this.head = addr;
  }
  delete(addr) {
    // 维护链表关系
    //  0   1   2    3    4    5    6   7   8   9
    // n-6 a         9   b   p-0   c      p-0
    const next = this.data[addr];  
    const prev = this.data[addr + 2];
    if (prev !== null) {
      this.data[prev + 0] = next;
    }
    if (next !== null) {
      this.data[next + 2] = prev;
    }
    // 回收内存
    this.mfree(addr);
  }
}

module.exports = ArrayList;
