function solution(params) {
  const input = params.split("\n")
  const caseCnt = parseInt(input.shift())
  const stack = []
  for (let i = 0; i < caseCnt; i++) {
    const elem = input[i].split(" ")
    if (elem[0] == "push") {
      stack.push(elem[1])
    } else if (elem[0] == "pop") {
      const result = stack.pop()
      console.log(result ? result : -1)
    } else if (elem[0] == "size") {
      console.log(stack.length)
    } else if (elem[0] == "empty") {
      const result = stack.length == 0 ? 1 : 0
      console.log(result)
    } else if (elem[0] == "top") {
      const result = stack.length == 0 ? -1 : stack[stack.length - 1]
      console.log(result)
    }
  }
}

// solution(`14
// push 1
// push 2
// top
// size
// empty
// pop
// pop
// pop
// size
// empty
// pop
// push 3
// empty
// top`)

solution(`7
pop
top
push 123
top
pop
top
pop`)
