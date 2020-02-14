function solution(inputString) {
  const input = inputString.split("\n").map(a => +a)
  let n = input[0]
  const pairs = input.slice(1)
  // 1부터 순서대로 담을 배열
  const stack = []
  // +, - 담을 배열
  const answer = []

  for (let i = 1; i <= n; i++) {
    answer.push("+")
    // 1부터 stack에 쌓아준다
    stack.push(i)
    while (stack.length > 0 && stack[stack.length - 1] === pairs[0]) {
      pairs.shift()
      stack.pop()
      answer.push("-")
    }
  }

  //   console.log(stack, answer)

  stack.length == 0 ? answer.forEach(a => console.log(a)) : console.log("NO")

  //! 시간 초과
  //   let index = 1
  //   while (n) {
  //     // 스택의 맨 위의 값과 출력해야하는 첫번째 값이 같을 경우 pop
  //     if (stack[stack.length - 1] === pairs[0]) {
  //       pairs.shift()
  //       stack.pop()
  //       answer.push("-")
  //     } else {
  //       answer.push("+")
  //       // 1부터 stack에 쌓아준다
  //       stack.push(index)
  //       index++
  //       n--
  //     }
  //   }

  //   let isAvailable = true

  //   for (let i = 0; i < stack.length; i++) {
  //     if (stack[i] == pairs.pop()) answer.push("-")
  //     else {
  //       isAvailable = false
  //       break
  //     }
  //   }

  //   isAvailable ? answer.forEach(a => console.log(a)) : console.log("NO")
}

solution(`8
4
3
6
8
7
5
2
1`)

solution(`5
1
2
5
3
4`)
