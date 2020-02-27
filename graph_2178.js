function solution(params) {
  const input = params.split("\n")
  const conditions = input
    .shift()
    .split(" ")
    .map(a => +a)

  const n = conditions[0],
    m = conditions[1]
  const startNode = [0, 0]
  const endNode = [n - 1, m - 1]
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ]

  //   console.log(n, m)
  const visited = new Array(n).fill(null).map(a => new Array(m).fill(false))
  const array = new Array(n).fill(null).map(a => new Array(m).fill(0))
  const dist = new Array(n).fill(null).map(a => new Array(m).fill(1))

  for (let i = 0; i < n; i++) {
    // y
    const elem = input[i].split("").map(a => +a)
    for (let j = 0; j < m; j++) {
      // x
      array[i][j] = elem[j]
    }
  }

  bfs(startNode)

  console.log("dist", dist)
  // console.log(dist[endNode[0]][endNode[1]])

  function bfs(startNode) {
    const q = [startNode]
    while (q.length > 0) {
      const [x, y] = q.shift()
      visited[y][x] = true

      for (let i = 0; i < 4; i++) {
        const element = directions[i]
        const nx = element[1] + x
        const ny = element[0] + y

        if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue

        if (!visited[ny][nx] && array[ny][nx]) {
          //   console.log("nx, ny", nx, ny)
          visited[ny][nx] = true
          q.push([nx, ny])
          dist[ny][nx] = dist[y][x] + 1
        }
      }
    }
  }
}

solution(`4 6
101111
101010
101011
111011`)

solution(`4 6
110110
110110
111111
111101`)

solution(`2 25
1011101110111011101110111
1110111011101110111011101`)

solution(`7 7
1011111
1110001
1000001
1000001
1000001
1000001
1111111`)
