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

solution(`9
0 0 0 1 1 1 -1 -1 -1
0 0 0 1 1 1 -1 -1 -1
0 0 0 1 1 1 -1 -1 -1
1 1 1 0 0 0 0 0 0
1 1 1 0 0 0 0 0 0
1 1 1 0 0 0 0 0 0
0 1 -1 0 1 -1 0 1 -1
0 -1 1 0 1 -1 0 1 -1
0 1 -1 1 0 -1 0 1 -1`)
