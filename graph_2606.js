function getSortedGraph(inputString) {
  const pairs = inputString.split("\n").map(a => a.split(" ").map(a => Number(a)))
  console.log(pairs)
  let adjList = new Map()

  pairs.forEach(pair => {
    if (adjList.get(pair[0])) {
      adjList.get(pair[0]).push(pair[1])
    } else {
      adjList.set(pair[0], [pair[1]])
    }

    if (adjList.get(pair[1])) {
      adjList.get(pair[1]).push(pair[0])
    } else {
      adjList.set(pair[1], [pair[0]])
    }
  })

  adjList.forEach(value => {
    value.sort()
  })
  console.log(adjList)
  return adjList
}

function dfs(startNode, graph, visited) {
  visited[startNode] = true
  var get_neighbours = graph.get(startNode)

  for (let i in get_neighbours) {
    var element = get_neighbours[i]
    if (!visited[element]) dfs(element, graph, visited)
  }
}

// const graph = getSortedGraph(`1 2
// 2 3
// 1 5
// 5 2
// 5 6
// 4 7`)

// let count = 0

// const visited = []
// dfs(1, graph, visited)
// console.log(visited.filter(a => a).length - 1)

function solution(params) {
  const input = params.split("\n")
  const computer_count = parseInt(input.shift())
  const edge_count = parseInt(input.shift())
  const pairs = input.map(a => a.split(" ").map(a => Number(a)))
  // console.log(computer_count, edge_count, pairs)

  const graph = setGraph(pairs)
  const visited = new Array(computer_count).fill(false)
  let count = 0

  dfs(1)
  console.log(count)

  function dfs(startNode) {
    const new_nodes = graph.get(startNode)
    visited[startNode] = true
    for (let i = 0; i < new_nodes.length; i++) {
      const node = new_nodes[i]
      if (node <= 100 && !visited[node]) {
        count++
        // console.log(node)
        dfs(node)
        visited[node] = true
      }
    }
  }

  function setGraph(pairs) {
    const map = new Map()
    for (let i = 0; i < pairs.length; i++) {
      const node = pairs[i]

      if (map.get(node[0])) {
        map.get(node[0]).push(node[1])
      } else {
        map.set(node[0], [node[1]])
      }

      if (map.get(node[1])) {
        map.get(node[1]).push(node[0])
      } else {
        map.set(node[1], [node[0]])
      }
    }
    // console.log(map)
    return map
  }
}

solution(`7
6
1 2
2 3
1 5
5 2
5 6
4 7`)
