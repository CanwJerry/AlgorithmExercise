class ArrayStack {
  constructor() {
    this.data = [];
  };

  push(element) {
    this.data.push(element);
  };

  pop() {
    return this.data.pop();
  };

  peek() {
    return this.data[this.data.length - 1];
  };

  get isEmpty() {
    return this.data.length === 0;
  };

  get size() {
    return this.data.length;
  };
}

export default ArrayStack;