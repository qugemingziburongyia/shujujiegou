/*
 * @Description: 
 * @Autor: xuzp4
 * @Date: 2020-03-09 21:06:25
 * @LastEditors: xuzp4
 * @LastEditTime: 2020-03-09 21:59:26
 */

const {assert} = require('chai')
const BinaryTree = require('./BinaryTree')

describe('测试二叉树',() => {
    it('insert',() => {
        const tree = new BinaryTree()
        tree.insert(2)
        tree.insert(3)
        tree.insert(10)
        tree.insert(1)
        // const it = tree.transverse();
        // console.log([...it].map(x=>x.toString()).join(''))
        assert.deepEqual([...tree.transverse()].map(x => x.key),[1,2,3,10])
    })
})



  