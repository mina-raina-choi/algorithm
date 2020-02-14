// function getGraph(inputPairs) {
//   const pairs = inputPairs.split("\n").map(a => a.split(" ").map(a => +a))
//   console.log(pairs)
//   let graph = {}
//   pairs.forEach(pair => {
//     if (graph[pair[0]]) {
//       graph[pair[0]].push(pair[1])
//     } else {
//       graph[pair[0]] = [pair[1]]
//     }

//     if (graph[pair[1]]) {
//       graph[pair[1]].push(pair[0])
//     } else {
//       graph[pair[1]] = [pair[0]]
//     }
//   })

//   Object.values(graph).forEach(a => a.sort())
//   console.log(graph)
//   return graph
// }

// // stack, queue
// // 단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문
// // 이 조건에 맞지 않는다.
// function dfs(graph, startNode) {
//   let visited = [],
//     needToVisit = []
//   needToVisit.push(startNode)
//   while (needToVisit.length > 0) {
//     console.log("needToVisit", needToVisit)
//     // 새로 들어온 것들중 작은 순으로
//     const node = needToVisit.pop()
//     console.log("node", node)

//     const found = visited.find(a => a === node)
//     if (found === undefined) {
//       visited.push(node)
//       needToVisit.push(...graph[node])
//     }
//   }
//   console.log("dfs visited", visited)
// }

// // queue, queue
// function bfs(graph, startNode) {
//   let visited = [],
//     needToVisit = []
//   needToVisit.push(startNode)
//   while (needToVisit.length > 0) {
//     const node = needToVisit.shift()
//     const found = visited.find(a => a === node)
//     if (found === undefined) {
//       visited.push(node)
//       needToVisit.push(...graph[node])
//     }
//   }
//   console.log("bfs visited", visited)
// }

// const graph = getGraph(`5 4
// 5 2
// 1 2
// 3 4
// 3 1`)

// dfs(graph, 3)
// bfs(graph, 3)
// // 3 1 2 5 4
// // 3 1 4 2 5
// // 1 2 4 3
// // 1 2 3 4

class Graph {
  // defining vertex array and
  // adjacent list
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices
    this.AdjList = new Map()
  }

  // functions to be implemented
  addNode(v) {
    // initialize the adjacent list with a
    // null array
    this.AdjList.set(v, [])
  }
  addEdge(v, w) {
    // get the list for vertex v and put the
    // vertex w denoting edge between v and w
    this.AdjList.get(v).push(w)

    // Since graph is undirected,
    // add an edge from w to v also
    this.AdjList.get(w).push(v)
    // sort가 들어가야함
  }

  sortNode() {
    this.AdjList.forEach(value => {
      value.sort()
    })
  }

  // Prints the vertex and adjacency list
  printGraph() {
    // get all the vertices
    var get_keys = this.AdjList.keys()

    // iterate over the vertices
    for (var i of get_keys) {
      // great the corresponding adjacency list
      // for the vertex
      var get_values = this.AdjList.get(i)
      var conc = ""

      // iterate over the adjacency list
      // concatenate the values into a string
      for (var j of get_values) conc += j + " "

      // print the vertex and its adjacency list
      console.log(i + " -> " + conc)
    }
  }

  dfs(startingNode) {
    var visited = []
    for (var i = 0; i < this.noOfVertices; i++) visited[i] = false
    console.log("dfs", this.noOfVertices, visited)

    this.DFSUtil(startingNode, visited)
  }

  // Recursive function which process and explore
  // all the adjacent vertex of the vertex with which it is called
  DFSUtil(vert, visited) {
    visited[vert] = true
    console.log(vert)

    var get_neighbours = this.AdjList.get(vert)

    for (var i in get_neighbours) {
      var get_elem = get_neighbours[i]
      if (!visited[get_elem]) this.DFSUtil(get_elem, visited)
    }
  }

  bfs(startingNode) {
    // create a visited array
    var visited = []
    for (var i = 0; i < this.noOfVertices; i++) visited[i] = false

    // Create an object for queue
    // FIFO
    var q = []

    // add the starting node to the queue
    visited[startingNode] = true
    q.push(startingNode)

    // loop until queue is element
    while (q.length > 0) {
      // get the element from the queue
      var getQueueElement = q.shift()

      // passing the current vertex to callback funtion
      console.log(getQueueElement)

      // get the adjacent list for current vertex
      var get_List = this.AdjList.get(getQueueElement)

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
}

let g = new Graph()
g.addNode("5")
g.addNode("1")
g.addNode("2")
g.addNode("3")
g.addNode("4")

g.addEdge("5", "4")
g.addEdge("5", "2")
g.addEdge("1", "2")
g.addEdge("3", "4")
g.addEdge("3", "1")

g.printGraph()

g.sortNode()

g.dfs("3")
g.bfs("3")
// 3 1 2 5 4
// 3
// 1
// 4
// 2
// 5
