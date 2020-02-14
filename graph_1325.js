// function getGraph(inputString) {
//   const pairs = inputString.split("\n").map(a => a.split(" ").map(a => +a))

//   const graph = new Map()

//   pairs.forEach(element => {
//     element[1]
//     if (graph.get(element[1])) {
//       graph.get(element[1]).push(element[0])
//     } else {
//       graph.set(element[1], [element[0]])
//     }
//   })
//   return graph
// }

// const m = 4
// const n = 5
// const graph = getGraph(`3 1
// 3 2
// 4 3
// 5 3`)

// const counts = {}

// graph.forEach((_, key, graph) => {
//   const visited = []
//   dfs(key, graph, visited)
//   counts[key] = visited.filter(a => a).length
// })

// const maxCount = Math.max(...Object.values(counts))
// console.log("counts", maxCount, Object.values(counts))
// const values = []
// Object.keys(counts)
//   .sort()
//   .forEach(a => {
//     if (counts[a] === maxCount) {
//       values.push(a)
//     }
//   })
// console.log(values.join(" "))

// function dfs(startNode, graph, visited) {
//   visited[startNode] = true
//   var get_neighbours = graph.get(startNode)

//   for (let i in get_neighbours) {
//     var element = get_neighbours[i]
//     if (!visited[element]) dfs(element, graph, visited)
//   }
// }

function solution(params) {
  const input = params.split("\n")
  const conditions = input
    .shift()
    .split(" ")
    .map(a => +a)
  const n = conditions[0]
  const m = conditions[1]
  const map = new Map()
  for (let i = 0; i < m; i++) {
    const element = input[i].split(" ").map(a => +a)
    if (map.get(element[1])) {
      map.get(element[1]).push(element[0])
    } else {
      map.set(element[1], [element[0]])
    }
  }
  // console.log(map)
  let answer = []
  let max = -1

  for (let i = 1; i <= n; i++) {
    const visited = new Array(n + 1).fill(false)
    // startNode i 에서의 노드 개수
    const count = bfs(i, visited)
    if (count > max) {
      answer = [i]
      max = count
    } else if (count == max) {
      answer.push(i)
    }
  }

  console.log(answer.join(" "))

  function bfs(startNode, visited) {
    const q = [startNode]
    visited[startNode] = true
    let count = 0
    while (q.length > 0) {
      const node = q.shift()
      const new_nodes = map.get(node)
      for (let i in new_nodes) {
        const element = new_nodes[i]
        if (!visited[element]) {
          count++
          q.push(element)
          visited[element] = true
        }
      }
    }
    return count
  }

  function dfs(startNode, visited) {
    visited[startNode] = true
    const new_nodes = map.get(startNode)
    for (let i in new_nodes) {
      const element = new_nodes[i]
      if (!visited[element]) {
        dfs(element, visited)
        visited[element] = true
      }
    }
  }
}

solution(`5 4
3 1
3 2
4 3
5 3`)
