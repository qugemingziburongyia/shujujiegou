require('./lib/litertools')
class ListNode {
  constructor(key) {
    //   指向前一个节点
    this.prev = null;
    // 指向下一个节点
    this.next = null;
    // 数据(或者用于查找的键)
    this.key = key;
  }
}
class List {
  constructor() {
    this.head = null;
  }
  static createNode(key) {
    return new ListNode(key);
  }
  /**
   * 插入头
   * @param {*} node 
   */
  insert(node) {
    node.next = this.head;
    if (this.head) {
      this.head.prev = node;
    }
    this.head = node;
  }
  // 查找
//   search(key) {
//     let node = this.head;
//     while(node!==null && node.key !== key) {
//         node = node.next;
//     }
//     return node;
//   }
search(key) {
    return this.transverse().find(node => node.key == key)
}
  // 删除节点
  delete(node) {
    const {prev,next} = node;
    // 建议, 在不通的js引擎回收机制不同
    // delete node.prev
    // delete node.next
    if(node == this.head) {
        this.head = next;
    }
    if(prev) {
        next.prev = prev;
    }
    if(next) {
        prev.next = next;
    }
  }

  /**
   * 顺序遍历链表
   */
  *transverse() {
      let p =this.head;
      while(p) {
          yield p;
          p = p.next;
      }
  }

}
