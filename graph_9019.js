function solution(params) {
  const input = params.split("\n")
  const testCase = parseInt(input.shift())
  const directions = ["D", "S", "L", "R"]

  for (let i = 0; i < testCase; i++) {
    const element = input[i].split(" ").map(a => +a)
    const before = element[0],
      after = element[1]
    const visited = new Array(10000).fill(false)

    const result = bfs(before, after, visited)
    console.log(result ? result : "")
  }

  function bfs(startNode, endNode, visited) {
    const q = [[startNode, ""]]

    while (q.length > 0) {
      const [node, str] = q.shift()
      if (node == endNode) {
        //   console.log("count", count)
        // console.log(node, str)
        return str
      }
      for (let i = 0; i < 4; i++) {
        const type = directions[i]
        let newNode
        if (type == "D") {
          newNode = (node * 2) % 10000
        } else if (type == "S") {
          newNode = node == 0 ? 9999 : node - 1
        } else if (type == "L") {
          // 왼쪽이동
          const temp = parseInt(node / 1000)
          newNode = node * 10 - temp * 10000 + temp
        } else if (type == "R") {
          // 오른쪽이동
          const temp = node % 10
          newNode = parseInt(node / 10) + temp * 1000
        }

        if (!visited[newNode] && newNode >= 0 && newNode < 10000) {
          visited[newNode] = true
          //   console.log("newNode", newNode)
          q.push([newNode, str + type])
        }
      }
    }
  }
}

solution(`3
1234 3412
1000 1
1 16`)

solution(`1 
1 16 `)

// ! 어떻게 어디에다 DSLR 을 담지?
// 큐를 pair[number, string] 형태로 선언하여 현재 숫자와 여태까지의 변화를 저장하도록 하면 풀 수 있는 문제
