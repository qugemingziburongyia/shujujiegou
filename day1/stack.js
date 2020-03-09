/*
 * @Description: 
 * @Autor: xuzp4
 * @Date: 2020-03-08 16:23:18
 * @LastEditors: xuzp4
 * @LastEditTime: 2020-03-08 17:26:31
 */
class Stack{
    constructor(max=1000) {
        this.top = -1;
        this.max = max;
        this.data = new Array(max);
    }
    push(x) {
        if(this.top === this.max-1 ) {
            throw "stackoverflow"
        }
        this.top++;
        this.data[this.top] = x;
    }
    pop() {
        if(this.top === -1) {
            throw 'stackunderflow';
        }
        const x = this.data[this.top]
        this.top--;
        return x;
    }
    get length() {
        return this.top+1
    }
}
module.exports = Stack;