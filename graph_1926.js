function solution(params) {
  const input = params.split("\n")
  // 세로, 가로
  const [n, m] = input
    .shift()
    .split(" ")
    .map(a => +a)

  const pairs = input.map(a => a.split(" ").map(a => +a))

  let graphCnt = 0,
    max = 0
  const visited = new Array(n).fill(null).map(a => new Array(m).fill(false))
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ]

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (pairs[i][j] == 1 && !visited[i][j]) {
        const area = bfs([i, j])
        // console.log(area)
        max = Math.max(max, area)
        graphCnt += 1
      }
    }
  }

  console.log(graphCnt)
  console.log(max)

  function bfs(startNode) {
    const q = [startNode]

    let max = 1
    while (q.length > 0) {
      const [x, y] = q.shift()
      visited[x][y] = true
      for (let i = 0; i < 4; i++) {
        const [move_x, move_y] = directions[i]
        const nx = x + move_x,
          ny = y + move_y
        if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue
        if (pairs[nx][ny] == 1 && !visited[nx][ny]) {
          visited[nx][ny] = true
          q.push([nx, ny])
          max += 1
        }
      }
    }
    return max
  }
}

solution(`6 5
1 1 1 1 1
1 1 1 0 0
0 1 0 0 0
1 0 0 1 1
1 0 0 0 1
0 0 1 1 1`)

solution(`1 1
0`)
