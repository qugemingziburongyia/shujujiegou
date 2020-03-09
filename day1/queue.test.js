/*
 * @Description:
 * @Autor: xuzp4
 * @Date: 2020-03-08 17:02:13
 * @LastEditors: xuzp4
 * @LastEditTime: 2020-03-08 17:37:36
 */
const { assert } = require("chai");
let Queue = null;
if (process.env.QUEUE === "stack_to_queue") {
  Queue = require("./stack-to-queue");
} else {
  Queue = require("./queue");
    
}

describe("测试堆栈", () => {
  it("LIFO", () => {
    const s = new Queue(1000);
    for (let i = 1; i <= 5; i++) {
      s.enqueue(i);
    }
    for (let i = 1; i <= 5; i++) {
      assert.equal(s.dequeue(), i);
    }
  });
  it("stackoverflow-1", () => {
    const s = new Queue(1000);
    let error = null;
    try {
      for (let i = 0; i < 1001; i++) {
        s.enqueue(i);
      }
    } catch (ex) {
      error = ex;
    }
    assert.equal(error, "stackoverflow");
  });
  it("stackoverflow-2", () => {
    const s = new Queue(1000);
    let error = null;
    try {
      for (let i = 0; i < 1000; i++) {
        s.enqueue(i);
      }
    } catch (ex) {
      error = ex;
    }
    assert.equal(error, null);
  });
  it("stackunderflow", () => {
    const s = new Queue();
    let error = null;
    try {
      s.dequeue();
    } catch (ex) {
      error = ex;
    }
    assert.equal(error, "stackunderflow");
  });
  it("性能测试", () => {
    const s = new Queue(1000000);
    const t = new Date().getTime();
    for (let i = 0; i < 1000000; i++) {
      s.enqueue(i);
    }
    for (let i = 0; i < 1000000; i++) {
      s.dequeue();
    }
    assert.equal(new Date().getTime() - t < 50, true, "性能不达标");
  });
});
