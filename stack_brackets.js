function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  let answer = 1
  let stack = []
  if (S.length > 0) {
    stack.push(S[0])
  }

  for (let i = 1; i < S.length; i++) {
    const elem = S[i]
    const item = stack[stack.length - 1]
    // console.log("elem, item", elem, item, stack)
    //
    if (elem == ")") {
      if (item == "(") {
        stack.pop()
      } else {
        stack.push(elem)
      }
    } else if (elem == "]") {
      if (item == "[") {
        stack.pop()
      } else {
        stack.push(elem)
      }
    } else if (elem == "}") {
      if (item == "{") {
        stack.pop()
      } else {
        stack.push(elem)
      }
    } else {
      stack.push(elem)
    }
  }

  stack.length == 0 ? (answer = 1) : (answer = 0)
  console.log(stack, answer)

  return answer
}

// 열리고 닫히고
solution(`{[()()]}`)
solution(`([)()]`)
solution(``)
