function solution(inputString) {
  const input = inputString.split("\n")
  const conditions = input[0].split(" ").map(a => +a)
  const numberOfNodes = conditions[0]
  const numberOfEdges = conditions[1]
  const startNode = conditions[2]
  // 4 5 1

  console.log(input.slice(1))
  let graph = getSortedGraph(input.slice(1))
  console.log("ddd", graph.get(1))

  let visited = new Array(numberOfNodes + 1).fill(false)
  dfs(startNode, graph, visited)
  console.log("")
  bfs(startNode, numberOfNodes, graph)
  console.log("")
}

function bfs(startNode, numberOfNodes, graph) {
  // create a visited array
  let visited = new Array(numberOfNodes + 1).fill(false)

  // Create an object for queue
  // FIFO
  var q = []

  // add the starting node to the queue
  visited[startNode] = true
  console.log("visited ", visited)
  q.push(startNode)

  // loop until queue is element
  while (q.length > 0) {
    // get the element from the queue
    var getQueueElement = q.shift()

    // passing the current vertex to callback funtion
    process.stdout.write(getQueueElement + " ")

    // get the adjacent list for current vertex
    var get_List = graph.get(getQueueElement)

    // loop through the list and add the element to the
    // queue if it is not processed yet
    for (var i in get_List) {
      var neigh = get_List[i]

      if (!visited[neigh]) {
        visited[neigh] = true
        q.push(neigh)
      }
    }
  }
}

function dfs(startNode, graph, visited) {
  visited[startNode] = true
  process.stdout.write(startNode + " ")
  var get_neighbours = graph.get(startNode)
  for (var i in get_neighbours) {
    var get_elem = get_neighbours[i]
    if (!visited[get_elem]) dfs(get_elem, graph, visited)
  }
}

function getSortedGraph(inputPairs) {
  const pairs = inputPairs.map(a => a.split(" ").map(a => Number(a)))
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
  return adjList
}

solution2(`4 5 1
1 2
1 3
1 4
2 4
3 4`)

solution2(`5 5 3
5 4
5 2
1 2
3 4
3 1`)

solution2(`1000 1 1000
999 1000`)

function solution2(param) {
  const input = param.split("\n")
  const conditions = input
    .shift()
    .split(" ")
    .map(a => +a)
  const numberOfNodes = conditions[0]
  const numberOfEdges = conditions[1]
  const startNode = conditions[2]

  const graph = setGraph()

  let nodes = new Array()
  let visited = new Array(numberOfNodes + 1).fill(false)
  // dfs : 재귀적으로
  dfs(startNode)
  console.log(nodes.join(" "))

  function dfs(startNode) {
    // console.log(startNode)
    nodes.push(startNode)
    visited[startNode] = true
    const new_nodes = graph.get(startNode)
    for (let i = 0; i < new_nodes.length; i++) {
      const node = new_nodes[i]
      if (!visited[node]) {
        dfs(node)
      }
    }
  }
  nodes = new Array()
  visited = new Array(numberOfNodes + 1).fill(false)
  // bfs : q 이용
  bfs(startNode)
  console.log(nodes.join(" "))

  // 너비우선
  function bfs(startNode) {
    const q = [startNode]
    visited[startNode] = true
    // console.log(q)
    while (q.length > 0) {
      const node = q.shift()
      nodes.push(node)
      const new_nodes = graph.get(node)
      for (let i = 0; i < new_nodes.length; i++) {
        const new_node = new_nodes[i]
        if (!visited[new_node]) {
          q.push(new_node)
          visited[new_node] = true
        }
      }
    }
  }

  function setGraph() {
    const map = new Map()
    for (let i = 0; i < numberOfEdges; i++) {
      const node = input[i].split(" ").map(a => +a)
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

    // sort를 해줘야함
    map.forEach(value => {
      value.sort()
    })

    return map
  }
}
