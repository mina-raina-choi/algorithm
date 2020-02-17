function solution(params) {
  const input = params.split("\n")
  const conditions = input
    .shift()
    .split(" ")
    .map(a => +a)
  const [n, m] = conditions
  const pairs = input.splice(0, m)
  const [startNode, endNode] = input[0].split(" ").map(a => +a)

  // 최대, 최소 무게
  let minWeight = 1000000000
  let maxWeight = 0

  const graph = setGraph(pairs)

  // 가운데 무게값
  let result = minWeight

  while (minWeight <= maxWeight) {
    let mid = parseInt((maxWeight + minWeight) / 2)
    if (bfs(mid)) {
      // mid 중량 이동가능하다면
      result = mid
      minWeight = mid + 1
    } else {
      maxWeight = mid - 1
    }
  }
  console.log(result)

  function bfs(mid) {
    const q = [startNode]
    const visited = new Array(n + 1).fill(false)
    visited[startNode] = true
    while (q.length > 0) {
      const node = q.shift()
      const nodes = graph.get(node)
      for (let node of nodes) {
        const [new_node, new_weight] = node
        if (!visited[new_node] && new_weight >= mid) {
          // console.log("new_node, new_weight", new_node, new_weight)
          q.push(new_node)
          visited[new_node] = true
        }
      }
    }
    return visited[endNode]
  }

  function setGraph(input) {
    const map = new Map()
    for (let i = 0; i < input.length; i++) {
      const [start, end, weight] = input[i].split(" ").map(a => +a)
      maxWeight = Math.max(maxWeight, weight)
      minWeight = Math.min(minWeight, weight)
      if (map.get(start)) {
        map.get(start).push([end, weight])
      } else {
        map.set(start, [[end, weight]])
      }
      if (map.get(end)) {
        map.get(end).push([start, weight])
      } else {
        map.set(end, [[start, weight]])
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

// bfs 와 이분탐색...
// 0 <= n, m <= 100,000  1<= c <=  1,000,000,000 의 범위를 가지므로 그냥 일반적인 bfs 탐색방법으로는 시간초과가 난다.
