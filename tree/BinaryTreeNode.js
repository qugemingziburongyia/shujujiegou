/*
 * @Description:  
 * @Autor: xuzp4
 * @Date: 2020-03-09 20:28:34
 * @LastEditors: xuzp4
 * @LastEditTime: 2020-03-09 21:53:29
 */

 class BinaryTreeNode {
     constructor(key,value) {
         // 指向父节点
         this.p = null
         // 节点的高度
         this.level = 0
         // 左
         this.left = null;
         // 右
         this.right = null;
         // 键值
         this.key = key;
         // 卫星数据
         this.value = value;
     }
     toString() {
         let s = ''
         for(let i = 0; i < this.level;i++) {
            s+= "  "
         }
        return s + this.key + '\n'
      }
     
 }

 module.exports = BinaryTreeNode