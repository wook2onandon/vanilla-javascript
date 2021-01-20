//tree
class Node {
  name;
  parent;
  leftChild;
  rightChild;

  constructor(name, leftChild = null, rightChild = null) {
    this.name = name;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }

  appendLeftChild(child) {
    this.leftChild = child;
    child.setParent(this)
  }

  appendRightChild(child) {
    this.rightChild = child;
    child.setParent(this)
  }

  setParent(node) {
    this.parent = node;
  }

}

const a = new Node(3)
const b = new Node(5)
const c = new Node(2)
const d = new Node(6)
const e = new Node(1)
const f = new Node(8)

a.appendLeftChild(b)
a.appendRightChild(c)
d.appendLeftChild(e)
d.appendRightChild(f)
console.log(a, d);