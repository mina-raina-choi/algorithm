function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())
  const nodes = input
    .shift()
    .split(" ")
    .map(a => +a)

  const startNode = nodes[0]
  const endNode = nodes[1]

  const edgeCount = parseInt(input.shift())
  const graph = setGraph(input)
  const edges = new Array(n + 1).fill(-1)
  const visited = new Array(n + 1).fill(false)
  //   console.log(graph)
  bfs(startNode)
  console.log(edges[endNode])
  function bfs(startNode) {
    const q = [startNode]
    edges[startNode] = 0
    visited[startNode] = true
    while (q.length > 0) {
      const elem = q.shift()
      const newNodes = graph.get(elem)
      for (let i in newNodes) {
        const node = newNodes[i]
        if (!visited[node]) {
          edges[node] = edges[elem] + 1
          visited[node] = true
          q.push(node)
        }
      }
    }
  }

  function setGraph(pairs) {
    const map = new Map()
    for (let i = 0; i < pairs.length; i++) {
      const elem = pairs[i].split(" ").map(a => +a)
      if (map.get(elem[0])) {
        map.get(elem[0]).push(elem[1])
      } else {
        map.set(elem[0], [elem[1]])
      }
      if (map.get(elem[1])) {
        map.get(elem[1]).push(elem[0])
      } else {
        map.set(elem[1], [elem[0]])
      }
    }
    return map
  }
}

solution(`9
7 3
7
1 2
1 3
2 7
2 8
2 9
4 5
4 6`)

solution(`7
4 7
6
1 2
1 3
2 4
2 5
2 6
3 7`)

solution(`3
1 2
1
2 3`)
