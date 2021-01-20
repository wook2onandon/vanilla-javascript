//이중linked-list
class Subway {
  name;
  prev;
  next;

  constructor(name, next = []) {
    this.name = name;
    this.next = next
  }

  appendNext(child) {
    this.next.push(child)
    child.setPrev(this)
  }

  setPrev(prev) {
    this.prev = prev
  }

}

const a = new Subway('A', [])
const b = new Subway('B', [])
const e = new Subway('E', [])
const f = new Subway('F', [])
const j = new Subway('J', [])

a.appendNext(b)
b.appendNext(e)
b.appendNext(f)
f.appendNext(j)

//선형linked-list
class Subway {
  name;
  next;

  constructor(name, next = []) {
    this.name = name;
    this.next = next
  }

  appendNext(child) {
    this.next.push(child)
  }

}

const a = new Subway('A', [])
const b = new Subway('B', [])
const e = new Subway('E', [])
const f = new Subway('F', [])
const j = new Subway('J', [])

//원형linked-list
class Subway {
  name;
  prev;
  next;

  constructor(name, next = []) {
    this.name = name;
    this.next = next
  }

  appendNext(child) {
    this.next.push(child)
    child.setPrev(this)
  }

  setPrev(prev) {
    this.prev = prev
  }

}

const a = new Subway('A', [])
const b = new Subway('B', [])
const e = new Subway('E', [])
const f = new Subway('F', [])
const j = new Subway('J', [])

a.appendNext(b)
b.appendNext(e)
b.appendNext(f)
f.appendNext(j)
j.appendNext(a)