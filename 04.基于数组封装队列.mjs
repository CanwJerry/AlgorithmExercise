class ArrayQueue {
  constructor() {
    this.data = [];
  };

  enqueue(element) {
    this.data.push(element);
  };

  dequeue() {
    return this.data.shift();
  };

  peek() {
    return this.data[0];
  };

  get isEmpty() {
    return this.data.length === 0;
  };
  
  get size() {
    return this.data.length;
  };
}

export default ArrayQueue;