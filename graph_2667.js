function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())

  const visited = new Array(n).fill(null).map(a => new Array(n).fill(false))
  const array = []

  for (let i = 0; i < n; i++) {
    const element = input
      .shift()
      .split("")
      .map(a => +a)
    array.push(element)
  }
  //   console.log(array, visited)
  let count = 0
  const houses = []

  // 집 하나하나를 돌면서 몇개의 단지가 그려지는 지 체크
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j] && array[i][j]) {
        ++count
        bfs([i, j])
      }
    }
  }

  console.log(count)
  houses.sort().forEach(a => console.log(a))

  function bfs(startNode) {
    const q = [startNode]
    const x = startNode[0],
      y = startNode[1]
    visited[x][y] = true
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1]
    ]
    let houseCnt = array[x][y]
    while (q.length > 0) {
      const [x, y] = q.shift()
      for (let i = 0; i < 4; i++) {
        const elem = directions[i]
        const nx = x + elem[0]
        const ny = y + elem[1]

        if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue
        if (!visited[nx][ny] && array[nx][ny]) {
          //   dfs([nx, ny], houseCnt)
          q.push([nx, ny])
          visited[nx][ny] = true
          houseCnt++
        }
      }
    }
    houses.push(houseCnt)
    // console.log(houseCnt)
  }
}

function dfs(startNode, houseCnt) {
  const x = startNode[0],
    y = startNode[1]
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ]

  visited[x][y] = true

  for (let i = 0; i < 4; i++) {
    const elem = directions[i]
    const nx = x + elem[0]
    const ny = y + elem[1]

    if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue
    if (!visited[nx][ny] && array[nx][ny]) {
      houseCnt++
      dfs([nx, ny], houseCnt)
    }
  }
}

solution(`7
0110100
0110101
1110101
0000111
0100000
0111110
0111000`)

console.log("")
solution(`5
00000
00000
00000
00000
00000`)
