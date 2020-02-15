function solution(params) {
  const input = params.split("\n")
  const conditions = input
    .shift()
    .split(" ")
    .map(a => +a)

  const m = conditions[0],
    n = conditions[1]
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ]
  let startNode = []
  let visited = new Array(n).fill(null).map(a => new Array(m).fill(false))
  let array = new Array(n).fill(null).map(a => new Array(m).fill(0))
  const days = new Array(n).fill(null).map(a => new Array(m).fill(Infinity))

  let allZero = true
  for (let i = 0; i < n; i++) {
    const elem = input[i].split(" ").map(a => +a)
    for (let j = 0; j < m; j++) {
      if (elem[j] == 1) {
        allZero = false
        // ! startNode가 여러개일 수 있음.
        startNode.push([i, j])
      } else if (elem[j] == -1) {
        allZero = false
      }
      array[i][j] = elem[j]
    }
  }

  // 모든 토마토가 0 이면 0
  if (allZero) console.log(0)
  // 익은 토마토가 하나도 없으면 -1
  if (!startNode) console.log(0)

  startNode.forEach(a => {
    visited = new Array(n).fill(null).map(a => new Array(m).fill(false))
    bfs(a)
  })

  let day = -1

  outer: for (let i = 0; i < days.length; i++) {
    inner: for (let j = 0; j < days[i].length; j++) {
      if (array[i][j] != -1 && days[i][j] == Infinity) {
        // console.log("모두 안익음")
        day = 0
        break outer
      }
      day = days[i][j] != Infinity ? Math.max(days[i][j], day) : day
    }
  }
  console.log(day - 1)
  function bfs(startNode) {
    const q = [startNode]
    days[startNode[0]][startNode[1]] = 1
    while (q.length > 0) {
      const [y, x] = q.shift()
      for (let i = 0; i < 4; i++) {
        const [cx, cy] = directions[i]
        const nx = x + cx
        const ny = y + cy

        if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue
        // if (array[ny][nx] == -1) {
        //   visited[ny][nx] = true
        //   continue
        // }
        if (!visited[ny][nx] && array[ny][nx] != -1) {
          visited[ny][nx] = true
          array[ny][nx] = 1
          days[ny][nx] = Math.min(days[y][x] + 1, days[ny][nx])
          q.push([ny, nx])
        }
      }
    }
  }
}

solution(`6 4
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 1`)

solution(`6 4
0 -1 0 0 0 0
-1 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 1`)

solution(`6 4
1 -1 0 0 0 0
0 -1 0 0 0 0
0 0 0 0 -1 0
0 0 0 0 -1 1`)

solution(`5 5
-1 1 0 0 0
0 -1 -1 -1 0
0 -1 -1 -1 0
0 -1 -1 -1 0
0 0 0 0 0`)

solution(`2 2
1 -1
-1 1`)

// ! 시간초과
