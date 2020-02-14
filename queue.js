// FIFO

class Queue {
  constructor() {
    this._array = []
  }

  enqueue(data) {
    this._array.push(data)
  }

  dequeue() {
    const first = this._array[0]
    this._array.shift()
    return first
  }

  size() {
    return this._array.length
  }

  get() {
    return this._array
  }
}

const q = new Queue()

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
console.log(q.get())
const del = q.dequeue()
console.log(del)
console.log(q.get())
