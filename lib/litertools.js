const GeneratorFunction = Object.getPrototypeOf((function*() {})()).constructor;

/**
 * 扩展iterator方法:查询
 */

GeneratorFunction.prototype.find = function(condition) {
  let p = null;
  while (!(p = this.next()).done) {
    if (condition(p.value)) {
      return p.value;
    }
  }
  return null;
};
