class Graph {
  constructor() {
    // 顶点
    this.verteces = [];
    // 边：邻接表
    this.adjList = new Map(); 
  }

  // 添加顶点
  addVertex(vertex) {
    // 将顶点添加到数组中保存
    this.verteces.push(vertex);
    // 创建一个邻接表中的数组
    this.adjList.set(vertex, []);
  };

  // 添加边
  addEdge(v1, v2) {
    this.adjList.get(v1)?.push(v2);
    // 相互连接
    this.adjList.get(v2)?.push(v1);
  };

  traverse() {
    this.verteces.forEach(vertex => {
      const edge = this.adjList.get(vertex);

      console.log(`${vertex} -> ${edge.join(' ')}`);
    })
  };

  // 广度优先
  bfs() {
    // 1.判断是否有顶点
    if(!this.verteces.length) return;

    // 2.创建队列结构访问每一个顶点
    const queue = [];
    queue.push(this.verteces[0]);

    // 3.创建Set结构，记录某一个顶点是否被访问过
    const visited = new Set();
    visited.add(this.verteces[0]);

    // 4.遍历队列中每一个顶点
    while(queue.length) {
      // 访问队列中第一个顶点
      const vertex = queue.shift();
      console.log(vertex);

      // 相邻的顶点, 获取到顶点相邻的顶点
      const neighbors = this.adjList.get(vertex);
      if(!neighbors) continue;
      for(const nei of neighbors) {
        if(!visited.has(nei)) {
          visited.add(nei);
          queue.push(nei);
        };
      }
    }
  };

  // 深度优先
  dfs() {
    // 1.判断有没有顶点，没有直接返回
    if(!this.verteces.length) return;
    // 2.创建栈结构
    const stack = [];
    stack.push(this.verteces[0]);

    // 3.创建Set结构
    const visited = new Set();
    visited.add(this.verteces[0]);

    // 4.从第一个顶点开始访问
    while(stack.length) {
      const vertex = stack.pop();
      console.log('vertex', vertex);

      const neighbors = this.adjList.get(vertex);
      if(!neighbors) continue;
      for(let i = neighbors.length - 1; i >= 0; i--) {
        const nei = neighbors[i];
        if(!visited.has(nei)) {
          visited.add(nei);
          stack.push(nei);
        }
      }
    }
  };
}

const graph = new Graph();

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addVertex("G")
graph.addVertex("H")
graph.addVertex("I")

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

graph.traverse();

// console.log('----------bfs----------')
// graph.bfs();
console.log('----------dfs----------')
graph.dfs();