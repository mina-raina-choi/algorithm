function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())

  const array = new Array(n).fill(null).map(a => [])
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      array[i].push(parseInt(input[i][j]))
    }
  }

  console.log("array", array)
  const result = divideAndConquer(array)
  console.log(result[0])
  console.log(`(${result[0].join("")})`)

  // 1. 나누기 , 탈출조건
  // 4등분으로 나누기
  function divideAndConquer(array) {
    if (array.length == 2) {
      //   console.log("쪼개진", array)
      return array
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
    console.log("merge", array)
    const ret = []
    for (let i = 0; i < 4; i++) {
      let sum = 0
      let items = []
      for (let k = 0; k < array[0].length; k++) {
        const elem = array[i][k]
        items = [...items, ...elem]
      }

      for (let j = 0; j < items.length; j++) {
        const item = items[j]
        if (typeof item == "number") {
          sum += item
        } else {
          //   console.log("문자열있음")
          break
        }
      }
      //   console.log("sum", sum)
      if (sum == 0) {
        // 0
        ret[i] = 0
      } else if (sum == 4) {
        // 1
        ret[i] = 1
      } else {
        ret[i] = "(" + items.join("") + ")"
      }
    }
    console.log("ret", ret)
    return [ret]
  }
}

// solution(`8
// 11110000
// 11110000
// 00011100
// 00011100
// 11110000
// 11110000
// 11110011
// 11110011`)

solution(`2
00
00`)

solution(`4
0000
0000
0000
0000`)

// solution(`64
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000100000000000000000000000000000
// 0000000000000000000000000000000001000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000010000000000000000000000
// 0000000000000000000000000000000000000000010000000000000000000000
// 0000000000000000000000000000000000000001111110000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000010000000000000000000000000000000
// 0000000000000000000000000000000000110000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000111000000000000000000000000000000000000000
// 0000000000000000000000011000000000000000000000000000000000000000
// 0000000000000000000000001000000000000000000000000000000000000000
// 0000000000000000000000001100000000000000000000000000000000000000
// 0000000000000000000000001110000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000001000000000000000000000000000
// 0000000000000000000000000000000000010100000000000000000000000000
// 0000000000000000000000000000000000001000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000000`)
