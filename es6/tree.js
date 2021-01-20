//tree
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data <= this.data) {
      this._toLeft(data)
    } else {
      this._toRight(data);
    }
  }

  _toLeft(data) {
    if (this.left) {
      this.left.insert(data)
    } else {
      this.left = new Node(data);
    }
  }

  _toRight(data) {
    if (this.right) {
      this.right.insert(data)
    } else {
      this.right = new Node(data);
    }
  }
}

const a = new Node(3)
const b = new Node(5)
const c = new Node(2)
const d = new Node(6)
const e = new Node(1)

a.insert(b)
a.insert(c)
b.insert(d)
b.insert(e)