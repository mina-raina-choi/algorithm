// ! 반례들은 다 정답이 나오는데, 왜 틀렸다고 하지?
function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())

  const array = input.map(a => a.split("").map(a => +a))

  // console.log("array", array)
  const result = divideAndConquer(array)
  console.log(result)

  // 1. 나누기 , 탈출조건
  // 4등분으로 나누기
  function divideAndConquer(array) {
    if (array.length == 1) {
      return array[0][0]
    }
    const mid = array.length / 2
    const one = divideAndConquer(array.slice(0, mid).map(a => a.slice(0, mid)))
    const two = divideAndConquer(array.slice(0, mid).map(a => a.slice(mid)))
    const three = divideAndConquer(array.slice(mid).map(a => a.slice(0, mid)))
    const four = divideAndConquer(array.slice(mid).map(a => a.slice(mid)))
    return merge([one, two, three, four])
  }

  // 2. 문자열처리 &  합치기
  // 4사분면 중에 하나라도 0, 1이 아니면 그냥 문자열로 리턴
  function merge(array) {
    let ret
    let sum = 0

    for (let i = 0; i < 4; i++) {
      const item = array[i]
      if (typeof item == "number") {
        sum += item
      } else {
        sum = -1
        break
      }
    }

    // console.log("sum", sum)
    if (sum == 0) {
      // 0
      ret = 0
    } else if (sum == 4) {
      // 1
      ret = 1
    } else {
      ret = "(" + array.join("") + ")"
    }
    // console.log("ret", ret)
    return ret
  }
}

solution(`8
11110000
11110000
00011100
00011100
11110000
11110000
11110011
11110011`)

solution(`2
10
00`)

solution(`1
1`)

solution(`4
0000
0000
0000
0000`)

solution(`4
1010
1010
1010
1010`)

function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())

  const array = input.map(a => a.split("").map(a => +a))

  let answer = ""
  quadTree([0, 0], n)
  console.log(answer)

  // 사각형을 탐색해서 모든 숫자가 1 => 1, 0 -> 0, (1010)
  function quadTree(startIndex, n) {
    const [x, y] = startIndex
    const first = array[y][x]
    let isBreak = false
    outer: for (let i = x; i < x + n; i++) {
      inner: for (let j = y; j < y + n; j++) {
        const element = array[j][i]
        // 하나라도 같지 않으면, 재귀적으로 쿼드트리 또 탐색
        if (element != first) {
          isBreak = true
          answer += "("
          // 1,2,3,4 분면
          quadTree([x, y], n / 2)
          quadTree([x + n / 2, y], n / 2)
          quadTree([x, y + n / 2], n / 2)
          quadTree([x + n / 2, y + n / 2], n / 2)
          answer += ")"
          break outer
        }
      }
    }

    // 모두 같은 숫자로 되어 있으면
    if (!isBreak) {
      if (first == 1) answer += 1
      else answer += 0
    }
  }
}
