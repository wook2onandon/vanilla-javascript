
//이중연결리스트
const Subway = (name) => {
  let _name, _next, _prev;
  _name = name;
  _next = null;
  _prev = null;
  return {
    _name,
    _next,
    _prev
  }
}

const DoubleLinkedList = () => {
  let _length, _head, _tail;
  _length = 0;
  _head = null;
  _tail = null;
}

const append = (value) => {
  const node = Subway(value);
  let current = _head;
  if (!current) {
    _head = node;
    _length++;
    return node;
  } else {
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    _length++;
    return node;
  }
}

const seoul = Subway('seoul')
const daegu = Subway('daegu')
DoubleLinkedList()
console.log(DoubleLinkedList()); 