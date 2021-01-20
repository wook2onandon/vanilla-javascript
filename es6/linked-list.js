//이중linked-list
class Subway {
  name;
  prev;
  next;

  constructor(name, next = null) {
    this.name = name;
    this.next = next
  }

  appendNext(child) {
    this.next = child
    child.setPrev(this)
  }

  setPrev(prev) {
    this.prev = prev
  }

}

const a = new Subway('A')
const b = new Subway('B')
const e = new Subway('E')
const f = new Subway('F')
const j = new Subway('J')

a.appendNext(b)
b.appendNext(e)
e.appendNext(f)
f.appendNext(j)
console.log(b);

// 선형linked - list
class Subway {
  name;
  next;

  constructor(name, next = null) {
    this.name = name;
    this.next = next
  }

  appendNext(child) {
    this.next = child
  }

}

const a = new Subway('A')
const b = new Subway('B')
const e = new Subway('E')
const f = new Subway('F')
const j = new Subway('J')

//원형linked-list
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
