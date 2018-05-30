class Graph {
  constructor() {
    this.nodes = [];
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.edges = [];
  }

  addEdge(node) {
    this.edges.push(node);
  }
}

const bFS = (start, goal) => {
  const marked = {};
  let current = [start];

  for (const curr of current) {
    marked[curr.val] = true;
    for (const edge of curr.edges) {
      if (edge === goal) {
        return true;
      }
      if (!marked[edge.val]) {
        current.push(edge);
      }
    }
  }

  return false;
};

const hasRouteBetween = (node1, node2) => {
  let route = false;

  if (bFS(node1, node2) || bFS(node2, node1)) {
    route = true;
  }

  return route;
};

const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const E = new Node('E');
A.addEdge(B);
B.addEdge(C);
B.addEdge(D);
B.addEdge(E);
C.addEdge(A);

const A2 = new Node('A2');
const B2 = new Node('B2');
const C2 = new Node('C2');
const D2 = new Node('D2');

A2.addEdge(B2);
A2.addEdge(C2);
B2.addEdge(C2);
D2.addEdge(C2);

const A3 = new Node('A3');
const B3 = new Node('B3');
const C3 = new Node('C3');
const D3 = new Node('D3');

A3.addEdge(B3);
C3.addEdge(A3);
C3.addEdge(D3);

console.log('ROUTES (connection node1 -> node2):', hasRouteBetween(A, E) === true);
console.log('ROUTES (no connection):', hasRouteBetween(A2, D2) === false);
console.log('ROUTES (connection node2 -> node1):', hasRouteBetween(A3, C3) === true);


/*
class Graph {
  constructor() {
    this.nodes = [];
  }

  add(node) {
    this.nodes.push(node);
  }

  getNodes() {
    return this.nodes;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.edges = [];
  }

  addEdge(node) {
    this.edges.push(node);
  }

  getEdges() {
    return this.edges;
  }
}

class QueueNode {
  constructor(node) {
    this.node = node;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  add(node) {
    const queueNode = new QueueNode(node);
    if (this.first) {
      this.last.next = queueNode;
      this.last = queueNode;
    } else {
      this.first = queueNode;
      this.last = queueNode;
    }
  }

  remove() {
    let node = null;

    if (this.first === this.last) {
      node = this.first;
      this.first = this.last = null;
    } else if (this.first) {
      node = this.first;
      this.first = this.first.next;
    }

    return node ? node.node : null;
  }

  isEmpty() {
    return this.first === null;
  }
}

const hasRouteBetween = (graph, start, goal) => {
  if (start === goal) {
    return true;
  }
  debugger;
  const state = {
    visiting: 'visiting',
    unvisited: 'unvisited',
    visited: 'visited',
  };

  const list = graph.getNodes();

  for (const node of list) {
    node.state = state.unvisited;
  }

  start.state = state.visiting;

  const queue = new Queue();
  queue.add(start);

  let u = null;
  while (!queue.isEmpty()) {
    u = queue.remove();

    for (const v of u.getEdges()) {
      if (v.state === state.unvisited) {
        if (v === goal) {
          return true;
        } else {
          v.state = state.visiting;
          queue.add(v);
        }
      }
    }

    u.state = state.visited;
  }

  return false;
};

const graph1 = new Graph();
const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const E = new Node('E');
A.addEdge(B);
B.addEdge(C);
B.addEdge(D);
B.addEdge(E);
C.addEdge(A);
graph1.add(A);
graph1.add(B);
graph1.add(C);
graph1.add(D);
graph1.add(E);

const graph2 = new Graph();
const A2 = new Node('A2');
const B2 = new Node('B2');
const C2 = new Node('C2');
const D2 = new Node('D2');
A2.addEdge(B2);
A2.addEdge(C2);
B2.addEdge(C2);
D2.addEdge(C2);
graph2.add(A2);
graph2.add(B2);
graph2.add(C2);
graph2.add(D2);

const graph3 = new Graph();
const A3 = new Node('A3');
const B3 = new Node('B3');
const C3 = new Node('C3');
const D3 = new Node('D3');
A3.addEdge(B3);
C3.addEdge(A3);
C3.addEdge(D3);
graph3.add(A3);
graph3.add(B3);
graph3.add(C3);
graph3.add(D3);

console.log('ROUTES (connection node1 -> node2):', hasRouteBetween(graph1, A, E) === true);
console.log('ROUTES (no connection):', hasRouteBetween(graph2, A2, D2) === false);
console.log('ROUTE (connection node2 -> node1):', hasRouteBetween(graph3, A3, C3) === true);
*/