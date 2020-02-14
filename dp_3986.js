function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input[0])
  const strs = input.slice(1)
  let answer = 0
  //   console.log(n, strs)
  for (let i = 0; i < strs.length; i++) {
    const elem = strs[i]
    // 짝수
    if (elem.length % 2 != 0) continue

    // 1. 나비모양
    if (butterfly(elem)) answer++
    //  2. 계속 둘둘
    else if (twoInARow(elem)) answer++
    // 3. 문자사이가 두개씩
    else if (betweenTwo(elem)) answer++
  }

  console.log(answer)

  function butterfly(elem) {
    let ret = true
    const len = elem.length
    for (let i = 0; i < len / 2; i++) {
      if (elem[i] != elem[len - i - 1]) {
        ret = false
        break
      }
    }
    return ret
  }

  function twoInARow(elem) {
    let ret = true
    const len = elem.length
    for (let i = 0; i < len - 1; ) {
      if (elem[i] != elem[i + 1]) {
        ret = false
        break
      }
      i += 2
    }
    return ret
  }

  // 이걸 어떠케? => 둘둘씩 짝이 맞으면 없애보자
  function betweenTwo(elem) {
    let len = elem.length

    let i = 0
    while (len && elem.length > 0) {
      if (elem[i] == elem[i + 1]) {
        elem = elem.replace(elem.slice(i, i + 2), "")
        i = 0
      } else {
        i++
      }
      len--
    }

    return elem.length > 0 ? false : true
  }
}

solution2(`3
ABAB
AABB
ABBA`)

solution2(`3
ABBABB
ABBBBA
AAAAABBAAAAA`)

solution2(`1
BABBAB`)

function solution2(params) {
  const input = params.split("\n")
  const n = parseInt(input[0])
  const strs = input.slice(1)
  let answer = 0

  for (let i = 0; i < n; i++) {
    const stack = []
    const elem = strs[i]
    stack.push(elem[0])
    for (let j = 1; j < elem.length; j++) {
      const element = elem[j]
      //   console.log("element", element, stack[stack - 1])
      if (element == stack[stack.length - 1]) {
        stack.pop()
      } else {
        stack.push(element)
      }
    }
    if (stack.length == 0) {
      answer++
    }
  }
  console.log(answer)
}
