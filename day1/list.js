/**
 * 节点
 */
class ListNode {
  constructor(key) {
    // 指向前一个节点
    this.prev = null;
    // 指向下一个节点
    this.next = null;
    // 数据
    this.key = key;
  }
}

/**
 * 链表(双向)
 */

class List {
    constructor() {
        this.head = null;
    }
    static createNode(key) {
        return new ListNode(key)
    }
    // 插入
    insert(node) {
        node.prev = null;
        node.next = this.head;
        if(this.head) {
            this.head.prev = node;
        }
        this.head = node;
    }

    search(key) {
        let node = this.head;
        while(node !== null && node.key !== key) {
            node = node.next;
        }
        return node;
    }

    delete(node) {
        let {prev,next} = node;
        delete node.prev;
        delete node.next;
        if(node === this.head) {
            this.head = next;
        }
        if(prev) {
            prev.next = next;
        }
        if(next) {
            next.prev = prev;
        }

    }
    // 数组的插入模拟
    // insert(arr,x) {
    //     for(let i = 1; i < arr.length; i++) {
    //         arr[i] = arr[i-1]
    //     }
    //     arr[0] = x;
    // }
}

module.exports = List;