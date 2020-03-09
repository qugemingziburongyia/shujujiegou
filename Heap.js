function left(i) {
  return i * 2 + 1;
}
function right(i) {
  return i * 2 + 2;
}

function swap(arr, i, j) {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

class Heapify {
  constructor(arr) {
    this.data = [...arr];
    this.size = this.data.length;
  }

  /**
   * 重构堆
   * [1,2,3,4,5]
   *   1
   *  2  3
   * 4 5
   * @param {*} i
   */
  rebuildHeap() {
    const L = Math.floor(this.size / 2);
    for (let i = L - 1; i >= 0; i--) {
      this.maxHeapify(i);
    }
  }

  isHeap() {
    const L = Math.floor(this.size / 2);
    for (let i = 0; i < L; i++) {
      const l = this.data[left(i)] || Number.MIN_SAFE_INTEGER;
      const r = this.data[right(i)] || Number.MAX_SAFE_INTEGER;
      const max = Math.max(this.data[i], l, r);
      if (max !== this.data[i]) {
        return false;
      }
    }
    return true;
  }
  sort() {
    for (let i = this.size - 1; i > 0; i--) {
      swap(this.data, 0, this.size - 1);
      this.size--;
      this.maxHeapify(0);
    }
  }

  /**
   * 假设堆其他大方都满足性质
   * 唯独根节点,重构堆性质
   */
  maxHeapify(i) {
    let max = i;
    if (i >= this.size) return;
    // 求左右节点中较大的序号
    const l = left(i);
    const r = right(i);
    if (l<this.size && this.data[l] > this.data[max]) {
      max = l;
    }
    if (r<this.size && this.data[r] > this.data[max]) {
      max = r;
    }
    // 如果当前节点最大,已经是最大堆
    if (max === i) {
      return;
    }
    swap(this.data, i, max);
    // 递归向下继续执行
    this.maxHeapify(max);
  }
}

module.exports = Heapify;
