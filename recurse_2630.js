// ! 쿼드 트리와 동일한 문제
function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())
  const array = input.map(a => a.split(" ").map(a => +a))
  //   console.log("array", array)
  let whiteCnt = 0,
    blueCnt = 0

  quadTree([0, 0], n)
  console.log(whiteCnt)
  console.log(blueCnt)

  function quadTree(startIndex, n) {
    const [x, y] = startIndex
    // console.log("x, y", x, y)
    let isBreak = false
    const first = array[y][x]
    outer: for (let i = x; i < n + x; i++) {
      inner: for (let j = y; j < n + y; j++) {
        if (first != array[j][i]) {
          isBreak = true
          // 4분면으로 나눠서 탐색
          const newN = n / 2
          quadTree([x, y], newN)
          quadTree([x + newN, y], newN)
          quadTree([x, y + newN], newN)
          quadTree([x + newN, y + newN], newN)
          break outer
        }
      }
    }

    if (!isBreak) {
      if (first == 0) whiteCnt++
      else blueCnt++
    }
  }
}

// 첫째 줄에는 잘라진 햐얀색 색종이의 개수를 출력하고, 둘째 줄에는 파란색 색종이의 개수를 출력한다.

solution(`8
1 1 0 0 0 0 1 1
1 1 0 0 0 0 1 1
0 0 0 0 1 1 0 0
0 0 0 0 1 1 0 0
1 0 0 0 1 1 1 1
0 1 0 0 1 1 1 1
0 0 1 1 1 1 1 1
0 0 1 1 1 1 1 1`)
