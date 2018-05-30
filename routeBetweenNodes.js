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
    if (curr === goal) {
      return true;
    }
    for (const edge of curr.edges) {
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
console.log('ROUTE (connection node2 -> node1):', hasRouteBetween(A3, C3) === true);