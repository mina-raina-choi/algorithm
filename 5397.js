function solution(params) {
  const input = params.split("\n")
  const caseCnt = parseInt(input[0])

  const arrowLeft = "<"
  const arrowRight = ">"
  const backSpace = "-"

  for (let i = 0; i < caseCnt; i++) {
    const stack = input[i + 1].split("")
    let pwd = []
    let cursor = 0

    stack.forEach(char => {
      if (arrowLeft == char) {
        if (cursor > 0) {
          cursor--
        }
      } else if (arrowRight == char) {
        if (cursor < pwd.length) {
          cursor++
        }
      } else if (backSpace == char) {
        // 지우기
        if (cursor > 0) {
          // cursor 위치에서 pop
          const prev = pwd.slice(0, cursor - 1)
          const temp = pwd.slice(cursor)
          pwd = [...prev, ...temp]
          cursor--
        }
      } else {
        // cursor 위치에
        const temp = pwd.slice(cursor)
        const prev = pwd.slice(0, cursor)
        pwd = [...prev, char, ...temp]
        cursor++
      }
    })

    console.log(pwd.join(""))
  }
}
// ! 시간초과

solution2(`1
j><>-<u->xb<<a`)

// ! 새로운 아이디어 배열2개로
// ! 이것도 시간초과 - 파이썬으로 하면 통과
function solution2(params) {
  const input = params.split("\n")
  const caseCnt = parseInt(input[0])

  for (let i = 0; i < caseCnt; i++) {
    const stack = input[i + 1].split("")

    const left = []
    const right = []

    // 1. 문자면 left에 push
    // 2. - 이면 left에서 pop
    // 3. > : right -> left
    // 4. < : left -> right
    stack.forEach(char => {
      if (">" == char) {
        if (right.length > 0) left.push(right.shift())
      } else if ("<" == char) {
        // !unshift 유의
        if (left.length > 0) right.unshift(left.pop())
      } else if ("-" == char) {
        if (left.length > 0) left.pop()
      } else {
        left.push(char)
      }
    })

    console.log([...left, ...right].join(""))
  }
}
