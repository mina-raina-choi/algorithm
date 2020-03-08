function solution(S) {
  const stack = []
  for (let i = 0; i < S.length; i++) {
    const elem = S[i]
    if (elem == ")") {
      if (stack.length > 0) {
        const item = stack[stack.length - 1]
        if (item == "(") {
          stack.pop()
        }
      } else {
        stack.push(elem)
      }
    } else {
      stack.push(elem)
    }
  }
  console.log(stack)
  return stack.length == 0 ? 1 : 0
}

solution("(()(())())")
solution("())")
solution("")
