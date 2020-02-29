function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())

  const map = new Map()
  // graph 만들기
  for (let i = 0; i < n; i++) {
    const elem = input[i]
      .replace(/  /g, " ")
      .split(" ")
      .map(a => +a)
    for (let j = 0; j < n; j++) {
      const cost = elem[j]
      if (i != j) {
        if (map.get(i + 1)) {
          map.get(i + 1).push([j + 1, cost])
        } else {
          map.set(i + 1, [[j + 1, cost]])
        }
      }
    }
  }
  // console.log(map)

  let visited
  let sum = Infinity

  // 그래프 탐색
  for (let i = 1; i < n + 1; i++) {
    visited = new Array(n + 1).fill(false)
    dfs(i, i, 0, 0)
  }

  console.log(sum)

  function dfs(start, nowNode, sofar, cnt) {
    // 시작한 도시로 돌아왔을 때
    if (cnt == n && start == nowNode) {
      // 값이 작은 비용을 sum에 기록
      sum = Math.min(sum, sofar)
      return
    }
    const neighbors = map.get(nowNode)

    console.log(`${nowNode} neighbors =>>>`, neighbors)

    for (let i = 0; i < neighbors.length; i++) {
      const [newNode, cost] = neighbors[i]

      // 경우에 따라서 도시 i에서 도시 j로 갈 수 없는 경우도 있으며 이럴 경우 W[i][j]=0
      if (cost == 0) continue
      if (!visited[newNode]) {
        visited[newNode] = true
        sofar += cost
        cnt += 1
        // console.log(start, newNode, sofar, cnt)
        dfs(start, newNode, sofar, cnt)

        // 다른 케이스들을 탐색하기 위해서 다시 visited 초기화!
        // sofar 원래대로, cnt도 -1
        visited[newNode] = false
        sofar -= cost
        cnt -= 1
      }
    }
  }
}

// solution(`4
// 0 10 15 20
// 5  0  9 10
// 6 13  0 12
// 8  8  9  0`)

solution(`2
0 1000000
1000000 0`)

// ! 원래의 도시로 돌아와야하는구나!
