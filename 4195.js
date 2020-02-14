function solution(params) {
  const input = params.split("\n")
  const caseCnt = parseInt(input.splice(0, 1))

  for (let i = 0; i < caseCnt; i++) {
    const n = parseInt(input.splice(0, 1))
    const graph = new Map()
    for (let j = 0; j < n; j++) {
      const element = input.splice(0, 1)[0].split(" ")
      if (graph.get(element[0])) {
        graph.get(element[0]).push(element[1])
      } else {
        graph.set(element[0], [element[1]])
      }

      if (graph.get(element[1])) {
        graph.get(element[1]).push(element[0])
      } else {
        graph.set(element[1], [element[0]])
      }
      countFriends(graph, element)
    }
  }

  function countFriends(graph, element) {
    // element의 친구인것만
    const friends = new Set([element[0]])
    const q = [element[0]]
    while (q.length > 0) {
      const item = q.shift()
      const list = graph.get(item)
      for (let i in list) {
        if (!friends.has(list[i])) {
          q.push(list[i])
          friends.add(list[i])
        }
      }
    }

    console.log(friends.size)
  }
}

solution(`2
3
Fred Barney
Barney Betty
Betty Wilma
3
Fred Barney
Betty Wilma
Barney Betty`)

// ! 그래프의 연결된 노드가 몇 개냐
// -> 시간초과가 뜸
