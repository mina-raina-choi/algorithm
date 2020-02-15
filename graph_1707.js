function solution(params) {
  const input = params.split("\n")

  const testCase = parseInt(input.shift())
  const RED = -1
  const BLUE = 1
  for (let i = 0; i < testCase; i++) {
    const element = input
      .shift()
      .split(" ")
      .map(a => +a)
    const v = element[0],
      e = element[1]
    const graph = setGraph(input.splice(0, e))

    const colors = new Array(v + 1).fill(0)
    const isBi = checkBi(v, colors)

    console.log(isBi ? "YES" : "NO")

    function checkBi(v, colors) {
      let isBi = true
      // 탐색, 비연결 그래프일때도 전체 탐색하기 위해서
      for (let i = 1; i < v + 1; i++) {
        if (!isBi) break

        if (colors[i] == 0) {
          isBi = bfs(i, graph, RED, colors)
          // console.log("startNode", i, "result : ", isBi)
        }
      }
      return isBi
    }
  }

  // 양방향 그래프
  function setGraph(params) {
    const map = new Map()
    for (let i = 0; i < params.length; i++) {
      const element = params[i].split(" ").map(a => +a)
      if (map.get(element[0])) {
        map.get(element[0]).push(element[1])
      } else {
        map.set(element[0], [element[1]])
      }

      if (map.get(element[1])) {
        map.get(element[1]).push(element[0])
      } else {
        map.set(element[1], [element[0]])
      }
    }
    console.log(map)
    return map
  }

  function bfs(startNode, graph, RED, colors) {
    const q = [startNode]
    colors[startNode] = RED

    while (q.length > 0) {
      const node = q.shift()
      const new_nodes = graph.get(node)
      //   console.log("node color >> ", node, colors[node])
      for (let i = 0; i < new_nodes.length; i++) {
        let n_node = new_nodes[i]
        if (colors[n_node] == 0) {
          colors[n_node] = colors[node] * -1
          q.push(n_node)
        } else {
          // 방문했던 정점중에서
          // 서로 인접한 정점의 색깔이 같으면 이분그래프 아님
          if (colors[n_node] + colors[node] != 0) {
            return false
          }
        }
      }
    }
    return true
  }
}

solution(`2
3 2
1 3
2 3
4 4
1 2
2 3
3 4
4 2`)

// 이분그래프
// 이분 그래프는 BFS를 할 때 같은 레벨의 정점끼리는 모조건 같은 색으로 칠해진다.
// 인접한 정점끼리 서로 다른 색으로 칠해서 모든 정점을 두 가지 색으로만 칠할 수 있는 그래프.
