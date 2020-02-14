// LIFO
class Stack {
  constructor() {
    this._array = []
  }

  push(item) {
    this._array.push(item)
  }

  pop() {
    return this._array.pop()
  }

  get() {
    return this._array
  }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.get())
const last = stack.pop()
console.log(last)
console.log(stack.get())
