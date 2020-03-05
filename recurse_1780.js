// ! 쿼드트리랑 동일
function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())
  const array = input.map(a => a.split(" ").map(a => +a))
  let minusCnt = 0,
    zeroCnt = 0,
    plusCnt = 0

  nineth([0, 0], n)

  console.log(minusCnt)
  console.log(zeroCnt)
  console.log(plusCnt)

  function nineth(startIndex, n) {
    const [x, y] = startIndex
    const first = array[y][x]
    let isBreak = false

    outer: for (let i = x; i < x + n; i++) {
      inner: for (let j = y; j < y + n; j++) {
        if (first != array[j][i]) {
          isBreak = true
          const nn = n / 3
          // 재귀적으로 9등분해서 탐색
          nineth([x, y], nn)
          nineth([x + nn, y], nn)
          nineth([x + 2 * nn, y], nn)
          nineth([x, y + nn], nn)
          nineth([x, y + nn * 2], nn)
          nineth([x + 2 * nn, y + nn], nn)
          nineth([x + nn, y + nn], nn)
          nineth([x + nn, y + nn * 2], nn)
          nineth([x + 2 * nn, y + nn * 2], nn)
          break outer
        }
      }
    }

    if (!isBreak) {
      if (first == 1) {
        plusCnt++
      } else if (first == -1) {
        minusCnt++
      } else {
        zeroCnt++
      }
    }
  }
}

solution2(`9
0 0 0 1 1 1 -1 -1 -1
0 0 0 1 1 1 -1 -1 -1
0 0 0 1 1 1 -1 -1 -1
1 1 1 0 0 0 0 0 0
1 1 1 0 0 0 0 0 0
1 1 1 0 0 0 0 0 0
0 1 -1 0 1 -1 0 1 -1
0 -1 1 0 1 -1 0 1 -1
0 1 -1 1 0 -1 0 1 -1`)

function solution2(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())
  const array = input.map(a => a.split(" ").map(a => +a))

  // console.log(array)
  let minusCnt = 0,
    zeroCnt = 0,
    plusCnt = 0

  count(0, 0, n)

  console.log(minusCnt)
  console.log(zeroCnt)
  console.log(plusCnt)

  function count(x, y, n) {
    console.log("count", x, y, n)
    if (n < 1) return
    // 시작점 x,y 로부터 x+n, y+n 사이에 숫자가 동일한지 체크
    // 아니면 재귀로 다시 돌림
    let first = array[x][y]
    let allSame = true
    outer: for (let i = x; i < x + n; i++) {
      for (let j = y; j < y + n; j++) {
        const elem = array[i][j]
        if (first != elem) {
          allSame = false
          break outer
        }
      }
    }

    if (allSame) {
      if (first == 0) zeroCnt++
      else if (first == -1) minusCnt++
      else plusCnt++
    } else {
      const nn = n / 3
      count(x, y, nn)
      count(x + nn, y, nn)
      count(x + 2 * nn, y, nn)
      count(x, y + nn, nn)
      count(x, y + nn * 2, nn)
      count(x + 2 * nn, y + nn, nn)
      count(x + nn, y + nn, nn)
      count(x + nn, y + nn * 2, nn)
      count(x + 2 * nn, y + nn * 2, nn)
    }
  }
}
