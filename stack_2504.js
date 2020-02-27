function solution(params) {
  const input = params
    .replace(/\(\)/g, 2)
    .replace(/\[\]/g, 3)
    .split("")
  let len = input.length

  const newStack = []
  let isFirst = true

  while (isFirst || newStack.length > 0) {
    len--
    isFirst = false
    const popped = input.pop()
    console.log("popped", popped)
    // 시작 괄호
    if (popped == "(") {
      const temp = []
      let item = newStack.pop()
      while (item != ")") {
        temp.push(item)
        item = newStack.pop()
      }
      // 숫자하나만 있으면
      if (temp.length == 1 && !isNaN(Number(temp[0]))) {
        // 괄호사이에 숫자 하나만
        const num = 2 * Number(temp[0])
        newStack.push(num)
      }
      console.log("newStack ()", newStack)
    } else if (popped == "[") {
      let item = newStack.pop()
      const temp = []
      while (item != "]") {
        temp.push(item)
        item = newStack.pop()
      }

      // 숫자하나만 있으면
      if (temp.length == 1 && !isNaN(Number(temp[0]))) {
        // 괄호사이에 숫자 하나만
        const num = 3 * Number(temp[0])
        newStack.push(num)
      }
    } else if (!isNaN(Number(popped))) {
      const newPopped = newStack.pop()
      console.log("popped, newpopped", popped, newPopped)
      if (newPopped && !isNaN(Number(newPopped))) {
        const sum = Number(popped) + Number(newPopped)
        newStack.push(sum)
      } else {
        newStack.push(newPopped)
        newStack.push(popped)
      }
    } else {
      newStack.push(popped)
    }
    console.log("newStack last", newStack)
  }

  console.log(newStack)
}

// 만일 입력이 올바르지 못한 괄호열이면 반드시 0을 출력
// solution(`(()[[]])([])`)

solution(`(([])[])`)

// 0
// solution(`(()`)
