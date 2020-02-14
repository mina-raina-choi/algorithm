function solution(params) {
  const input = params.split("\n")
  const conditions = input
    .shift()
    .split(" ")
    .map(a => +a)
  const n = conditions[0]
  const m = conditions[1]
  const pairs = input.splice(0, m)
  const nodes = input[0].split(" ").map(a => +a)
  const startNode = nodes[0],
    endNode = nodes[1]

  //   console.log(n, m, pairs, nodes)
  const graph = setGraph(pairs)
  const weights = new Array(n + 1).fill(-1)
  const visited = new Array(n + 1).fill(false)
  bfs(startNode, graph)
  //   console.log(weights)
  console.log(weights[endNode] == -1 ? 0 : weights[endNode])

  function bfs(startNode, graph) {
    const q = [[0, startNode]]
    weights[startNode] = 0
    visited[startNode] = true
    while (q.length > 0) {
      q.sort((a, b) => b[0] - a[0])
      const [weight, node] = q.shift()
      //   console.log("현재 탐색", node, weight)
      // 해당 node까지 운반가능한 최대무게가 더 크다면 무시
      if (weights[node] > weight) continue

      const nodes = graph.get(node)
      for (let i in nodes) {
        const [new_node, new_weight] = nodes[i]
        if (!visited[new_node] && new_weight > weights[new_node]) {
          weights[new_node] = new_weight
          q.push([new_weight, new_node])
          visited[new_node] = true
        }
      }
      console.log("weights", weights)
      console.log("visited", visited)
    }
  }

  function setGraph(input) {
    const map = new Map()
    for (let i = 0; i < input.length; i++) {
      const elem = input[i].split(" ").map(a => +a)
      if (map.get(elem[0])) {
        map.get(elem[0]).push([elem[1], elem[2]])
      } else {
        map.set(elem[0], [[elem[1], elem[2]]])
      }
      if (map.get(elem[1])) {
        map.get(elem[1]).push([elem[0], elem[2]])
      } else {
        map.set(elem[1], [[elem[0], elem[2]]])
      }
    }
    // console.log(map)
    return map
  }
}

solution(`3 3
1 2 2
3 1 3
2 3 2
1 3`)

solution(`3 1
1 3 1
1 2`)

// 시간초과...
// 어디서 어떻게 줄일 수 있을까?
// 시작섬에서 도착섬까지 운반할 수 있는 최대 중량
