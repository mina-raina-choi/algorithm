function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input[0])
  const pairs = input.slice(1)

  for (let i = 0; i < n; i++) {
    const elem = pairs[i]
    const stack = [elem[0]]
    for (let j = 1; j < elem.length; j++) {
      const char = elem[j]
      if (char == ")" && stack[stack.length - 1] == "(") {
        stack.pop()
      } else {
        stack.push(char)
      }
    }

    if (stack.length > 0) {
      console.log("NO")
    } else {
      console.log("YES")
    }
  }
}

solution(`6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(`)
