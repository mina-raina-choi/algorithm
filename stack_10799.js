function solution(params) {
  const stack = params.replace(/\(\)/g, "*").split("")
  const len = stack.length
  const newStack = []
  let answer = 0
  for (let i = 0; i < len; i++) {
    const elem = stack[i]
    newStack.push(elem)
    // 닫힌 괄호
    if (elem == ")") {
      let popped = newStack.pop()
      let starCnt = 0
      // 열린 괄호를 찾을 때까지 popped하고 그 중에 레이저인 것을 센다.
      while (popped != "(") {
        if (popped == "*") {
          starCnt++
        }
        popped = newStack.pop()
      }

      // 열린괄호
      answer += starCnt + 1
      // 다시 별넣어주기
      while (starCnt) {
        newStack.push("*")
        starCnt--
      }
    }
  }
  console.log(answer)
}

solution(`()(((()())(())()))(())`)
solution(`(((()(()()))(())()))(()())`)
