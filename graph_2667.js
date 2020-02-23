function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())
  const array = input.map(a => a.split("").map(a => +a))
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ]

  let count = 0
  const houses = []

  // 집 하나하나를 돌면서 몇개의 단지가 그려지는 지 체크
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (array[i][j] == 1) {
        count += 1
        bfs([i, j])
        // houses.push(dfs([i, j]))
      }
    }
  }

  houses.sort((a, b) => a - b)
  console.log(count)
  for (let i = 0; i < houses.length; i++) {
    console.log(houses[i])
  }

  function bfs(startNode) {
    const q = [startNode]
    let houseCnt = 1
    while (q.length > 0) {
      const [x, y] = q.shift()
      array[x][y] = 0
      for (let i = 0; i < 4; i++) {
        const [move_x, move_y] = directions[i]
        const nx = x + move_x,
          ny = y + move_y

        if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue
        if (array[nx][ny] == 1) {
          q.push([nx, ny])
          array[nx][ny] = 0
          houseCnt += 1
        }
      }
    }
    // console.log("houseCnt", houseCnt)
    houses.push(houseCnt)
  }

  function dfs(startNode) {
    const [x, y] = startNode
    let houseCnt = 1
    array[x][y] = 0
    for (let i = 0; i < 4; i++) {
      const [mx, my] = directions[i]
      const nx = x + mx,
        ny = y + my

      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue
      if (array[nx][ny] == 1) {
        array[nx][ny] = 0
        houseCnt += dfs([nx, ny])
      }
    }
    return houseCnt
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
console.log("")

solution(`5
11000
11001
11000
11111
11111`)
