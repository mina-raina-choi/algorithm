// solution(`2
// 3 2 2
// 2 1 5
// 3 2 5
// 3 3 1
// 2 1 2
// 3 1 8
// 3 2 4`)

function solution(inputString) {
  input = inputString.split("\n")
  const caseCount = Number(input[0])
  // n = 3, m = 2, start = 2

  let dependencyCount = 0
  let prev = 1
  for (let i = 0; i < caseCount; i++) {
    const conditions = input[i + prev].split(" ").map(a => +a)

    const nodeCount = conditions[0]
    dependencyCount = conditions[1] // 2
    const startNode = conditions[2]

    const pairs = input.splice(1 + 1 + i, dependencyCount)

    const distance = new Array(nodeCount + 1).fill(Infinity)

    const graph = setGraph(pairs)

    dijkstra(startNode, distance, graph)

    let count = 0
    let time = 0
    // console.log("distance", distance)
    for (let index = 0; index < distance.length; index++) {
      const element = distance[index]
      if (element !== Infinity) {
        count++
        if (element > time) {
          time = element
        }
      }
    }
    console.log(count, time)
  }
  function setGraph(pairs) {
    const inputs = pairs.map(a => a.split(" ").map(a => +a))

    const graph = new Map()

    for (let index = 0; index < inputs.length; index++) {
      const element = inputs[index]
      const node = element[0],
        value = element[2]

      if (graph.get(element[1])) {
        graph.get(element[1]).push([node, value])
      } else {
        graph.set(element[1], [[node, value]])
      }
    }
    return graph
  }
}

function solution2(params) {
  const input = params.split("\n")
  const caseCount = parseInt(input.shift())
  for (let i = 0; i < caseCount; i++) {
    const conditions = input
      .shift()
      .split(" ")
      .map(a => +a)

    const n = conditions[0],
      d = conditions[1],
      startNode = conditions[2]

    const map = setGraph(input.splice(0, d), d)

    // 해당 컴퓨터까지의 최단거리 기록
    const distances = new Array(n + 1).fill(Infinity)
    bfs(startNode, map, distances)
    const virus = distances.filter(a => a != Infinity)
    console.log(virus.length, Math.max(...virus))
  }

  // 최단거리...다익스트라 알고리즘에서는 visited를 체크 X
  function bfs(startNode, graph, distances) {
    // node 정보, 해당 노드까지의 최단거리를 q에 넣는다.
    // 우선순위 큐 : 무조건 FIFO이 아니라 우선순위가 높은 순부터 (여기서는 최단거리순으로)
    const q = [[0, startNode]]
    q.sort((a, b) => a[0][0] - b[0][0])
    distances[startNode] = 0
    while (q.length > 0) {
      const [dist, node] = q.shift()
      // 최단거리보다 현재 dist가 크면 무시
      if (distances[node] < dist) continue

      const new_nodes = graph.get(node)
      for (let i in new_nodes) {
        const element = new_nodes[i]
        const cost = dist + element.value
        // 새로운 최단거리가 나타나면
        if (distances[element.node] > cost) {
          distances[element.node] = cost
          q.push([cost, element.node])
        }
      }
    }
  }

  function setGraph(input, d) {
    const map = new Map()
    for (let j = 0; j < d; j++) {
      const element = input
        .shift()
        .split(" ")
        .map(a => +a)
      if (map.get(element[1])) {
        map.get(element[1]).push({ node: element[0], value: element[2] })
      } else {
        map.set(element[1], [{ node: element[0], value: element[2] }])
      }
    }
    return map
  }
}

solution2(`2
3 2 2
2 1 5
3 2 5
3 3 1
2 1 2
3 1 8
3 2 4`)
