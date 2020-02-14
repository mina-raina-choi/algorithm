// 처음에 생각했던 방법
// 다익스트라 알고리즘에서 최단거리만 저장하던 것을 모든 거리를 배열로 저장해 그 중 2번째로 큰값을 리턴하는 방법
// 메모리초과

// 인터넷을 찾아보니
// 거의 최단거리의 풀이법이 있더라.
// 다익스트라를 두번 하는 방법으로
// 첫번째 다익스트라 돌린 결과 중 최단거리에 속하는 경로를 제외하고 다시 다익스트라를 돌리는 방법이다.

function solution(inputString) {
  const inputs = inputString.split("\n")
  for (let i = 0; i < inputs.length; i++) {
    const condition = inputs.splice(0, 1).map(a => a.split(" ").map(a => +a))[0]
    const condition2 = inputs.splice(0, 1).map(a => a.split(" ").map(a => +a))[0]

    const N = condition[0] // 장소수
    const M = condition[1] // 도로수
    const startNode = condition2[0]
    const endNode = condition2[1]

    const pairs = inputs.splice(0, M)

    const graph = setGraph(pairs)

    const distance = new Array(N + 1).fill(undefined).map(u => [])
    const visited = new Array(N).fill(undefined).map(u => false)

    dijkstra(startNode, graph, distance, endNode, visited)
    const min = distance[endNode].sort()[0]

    const answer = distance[endNode].filter(a => a > min)
    console.log(answer[0] ? answer[0] : -1)
  }
}

function dijkstra(startNode, graph, distance, endNode, visited) {
  // 우선순위 큐 사용.
  const heap_data = []
  visited[startNode] = true
  heap_data.push([[0], startNode])
  // sort
  heap_data.sort((a, b) => a[0][1] - b[0][1])
  // distance 배열에 각 index별로 도달할 수 있는 모든 cost를 저장
  distance[startNode].push(0)

  while (heap_data.length > 0) {
    const [distArray, now] = heap_data.shift()

    // 충분히 다 돌고 가야해
    if (now === endNode && visited.slice(1).every(a => a === true)) {
      break
    }
    // 만약 지금까지 찾은 최단경로보다 더 짧은 경우가 있다면
    // 현재의 정점을 꺼내, 그 정점과 연결된 모든 정점과의 거리 확인
    if (graph.get(now)) {
      distArray.forEach(dist => {
        graph.get(now).forEach(element => {
          // [node , cost]
          cost = dist + element[1]

          distance[element[0]].push(cost)
          visited[element[0]] = true

          heap_data.push([distance[element[0]], element[0]])
        })
      })
    }
  }
}

function setGraph(pairs) {
  const inputs = pairs.map(a => a.split(" ").map(a => +a))

  const graph = new Map()
  const reverseGraph = new Map()
  // 0 1 1
  for (let i = 0; i < inputs.length; i++) {
    const element = inputs[i]
    const key = element[0],
      node = element[1],
      value = element[2]

    if (graph.has(key)) {
      graph.get(key).push([node, value])
    } else {
      graph.set(key, [[node, value]])
    }

    if (reverseGraph.has(node)) {
      reverseGraph.get(node).push([key, value])
    } else {
      reverseGraph.set(node, [[key, value]])
    }
  }
  return [graph, reverseGraph]
}

function dijkstra(startNode, distance, adjList, dropped) {
  const heap_data = []
  heap_data.push([0, startNode])
  distance[startNode] = 0
  while (heap_data.length > 0) {
    const [dist, now] = heap_data.shift()
    if (distance[now] < dist) continue
    adjList.get(now) &&
      adjList.get(now).forEach(element => {
        // console.log("element", element)
        const cost = dist + element[1]
        // dropped : 최단거리 제외
        if (distance[element[0]] > cost && !dropped[now][element[0]]) {
          distance[element[0]] = cost
          heap_data.push([cost, element[0]])
        }
      })
  }
}

function bfs(endNode, startNode, reverseAdjList, distance, dropped) {
  const q = []
  q.push(endNode)
  while (q.length > 0) {
    const now = q.shift()
    if (now === startNode) continue
    reverseAdjList.get(now).forEach(element => {
      const [prev, cost] = element
      if (distance[now] === distance[prev] + cost) {
        dropped[prev][now] = true
        q.push(prev)
      }
    })
  }
}

function solution(inputString) {
  const inputs = inputString.split("\n")
  for (let i = 0; i < inputs.length; i++) {
    const condition = inputs.splice(0, 1).map(a => a.split(" ").map(a => +a))[0]
    const condition2 = inputs.splice(0, 1).map(a => a.split(" ").map(a => +a))[0]

    const N = condition[0] // 장소수
    const M = condition[1] // 도로수
    const startNode = condition2[0]
    const endNode = condition2[1]

    const pairs = inputs.splice(0, M)

    const [graph, reverseGraph] = setGraph(pairs)

    const distance = new Array(N + 1).fill(undefined).map(u => Infinity)
    const dropped = new Array(N + 1).fill(undefined).map(u => new Array(N + 1).fill(false))

    dijkstra(startNode, distance, graph, dropped)

    bfs(endNode, startNode, reverseGraph, distance, dropped)
    const newdistance = new Array(N + 1).fill(undefined).map(u => Infinity)
    dijkstra(startNode, newdistance, graph, dropped)

    console.log(newdistance[endNode] != Infinity ? newdistance[endNode] : -1)
  }
}

solution(`7 9
0 6
0 1 1
0 2 1
0 3 2
0 4 3
1 5 2
2 6 4
3 6 2
4 6 4
5 6 1
4 6
0 2
0 1 1
1 2 1
1 3 1
3 2 1
2 0 3
3 0 2
6 8
0 1
0 1 1
0 2 2
0 3 3
2 5 3
3 4 2
4 1 1
5 1 1
3 0 1
0 0`)
