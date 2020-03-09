const { assert } = require("chai");
const Stack = require("./stack");

describe("测试堆栈", () => {
  it("LIFO", () => {
    const s = new Stack(1000);
    for (let i = 1; i <= 5; i++) {
      s.push(i);
    }
    for (let i = 5; i >= 1; i--) {
      assert.equal(s.pop(), i);
    }
  });
  it("stackoverflow-1", () => {
    const s = new Stack(1000);
    let error = null;
    try {
      for (let i = 0; i < 1001; i++) {
        s.push(i);
      }
    } catch (ex) {
      error = ex;
    }
    assert.equal(error, "stackoverflow");
  });
  it("stackoverflow-2", () => {
    const s = new Stack(1000);
    let error = null;
    try {
      for (let i = 0; i < 999; i++) {
        s.push(i);
      }
    } catch (ex) {
      error = ex;
    }
    assert.equal(error, null);
  });
  it("stackunderflow", () => {
    const s = new Stack();
    let error = null;
    try {
      s.pop();
    } catch (ex) {
      error = ex;
    }
    assert.equal(error, "stackunderflow");
  });
  it("性能测试", () => {
    const s = new Stack(1000000);
    const t = new Date().getTime();
    for (let i = 0; i < 1000000; i++) {
      s.push(i);
    }
    for (let i = 0; i < 1000000; i++) {
        s.pop();
      }
    assert.equal(new Date().getTime() - t < 50, true, "性能不达标");
  });
});
