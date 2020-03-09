/*
 * @Description: 

 * @Autor: xuzp4
 * @Date: 2020-03-08 18:08:19
 * @LastEditors: xuzp4
 * @LastEditTime: 2020-03-08 18:11:22
 */



const List =require('./list');
const {assert} = require('chai');

describe('链表测试',() => {
    it('测试搜索',() => {
        const list = new List();
        for(let i = 1; i <= 10; i++) {
            const node = List.createNode(i);
            list.insert(node)
        }
        assert.equal(list.search(5).key,5)
    })
})