import ArrayQueue from './04.基于数组封装队列.mjs';

function hotProtato(nameList, num) {
  const Queue = new ArrayQueue();

  for(let name of nameList) {
    Queue.enqueue(name);
  }

  while(Queue.size > 1) {
    for(let i = 1; i < num; i++) {
      Queue.enqueue(Queue.dequeue());
    }

    Queue.dequeue();
  }

  return Queue.dequeue();
}

const name = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i', 'j', 'k', 'h'];

console.log(hotProtato(name, 3));