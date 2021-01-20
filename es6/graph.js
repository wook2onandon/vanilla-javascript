//방향그래프
class Node {
  name;
  next;

  constructor(name, next = null,) {
    this.name = name;
    this.next = next;
  }

  appendNext(next) {
    this.next = next;
  }
}

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')

a.appendNext(b)
b.appendNext(c)
c.appendNext(d)
d.appendNext(a)

// //무방향그래프
class Node {
  name;
  next;
  prev;

  constructor(name, next = null) {
    this.name = name;
    this.next = next;
  }

  appendNext(next) {
    this.next = next;
    next.setPrev(this);
  }

  setPrev(prev) {
    this.prev = prev;
  }
}

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')
a.appendNext(b)
b.appendNext(c)
c.appendNext(d)
d.appendNext(a)
console.log(a);

class Graph {
  nodes;

  constructor() {
    this.nodes = {};
  }

  addNode(node) {
    this.nodes[node] = this.nodes[node] || [];
  }

  addEdge(fromNode, toNode) {
    this.nodes[fromNode].push(toNode)
    this.nodes[toNode].push(fromNode)
  }
}

const a = new Graph()
a.addNode(0)
a.addNode(1)
a.addNode(2)
a.addNode(3)
a.addEdge(0, 1)
a.addEdge(1, 2)
a.addEdge(2, 3)
a.addEdge(3, 0)
console.log(a);

