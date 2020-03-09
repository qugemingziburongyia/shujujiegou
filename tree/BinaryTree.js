/*
 * @Description:
 * @Autor: xuzp4
 * @Date: 2020-03-09 20:29:10
 * @LastEditors: xuzp4
 * @LastEditTime: 2020-03-09 21:59:07
 */
const BinaryTreeNode = require("./BinaryTreeNode");
class BinaryTree {
  constructor() {
    this.root = null; // 指针
  }
  insert(key, value) {
    const node = new BinaryTreeNode(key, value);
    
    let p = this.root;
    // 尾指针
    let tail = this.root;
    while (tail) {
      p = tail;
      if (tail && key < tail.key) {
        tail = tail.left;
      } else {
        tail = tail.right;
      }
    }
    // tail === null,没法插入
    if (!p) {
      this.root = node;
      return
    }
    // 插入
    if (p.key < key) {
      p.right = node;
    } else {
      p.left = node;
    }
    node.p = p;
    node.level = (p.level+1)
  }
  transverse() {
      return this.__transverse(this.root)
  }
  *__transverse (node) {
    if (!node) return;
    yield* this.__transverse(node.left);
    yield node;
    yield* this.__transverse(node.right);
  }

}

module.exports = BinaryTree