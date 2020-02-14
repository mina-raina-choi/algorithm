function solution(params) {
  const input = params.split("")
  console.log(input)
  const stack = [input[0]]

  for (let i = 1; i < input.length; i++) {
    const elem = input[i]
    if (elem == ")") {
      if (stack[stack.length - 1] == "(") {
        stack.pop()
        stack.push(2)
        // 2를 넣어줘야하는데?
      } else {
        stack.push(elem)
      }
    } else if (elem == "]") {
      if (stack[stack.length - 1] == "[") {
        stack.pop()
        stack.push(3)
        // 3를 넣어줘야하는데?
      } else {
        stack.push(elem)
      }
    } else {
      stack.push(elem)
    }
  }
  console.log(stack)
}

solution(`(()[[]])([])`)
