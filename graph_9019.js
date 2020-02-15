function solution(params) {
  const input = params.split("\n")
  const testCase = parseInt(input.shift())
  const directions = ["D", "S", "L", "R"]
  const visited = new Array(10000).fill(false)
  const array = new Array(10000).fill(null).map(a => [])

  for (let i = 0; i < testCase; i++) {
    const element = input[i].split(" ").map(a => +a)
    console.log(element)
    const before = element[0],
      after = element[1]
    const count = bfs(before, after)
    console.log("count", count)
  }

  function bfs(startNode, endNode) {
    const q = [startNode]
    let count = 0
    let array = []
    while (q.length > 0) {
      const node = q.shift()
      for (let i = 0; i < 4; i++) {
        const type = directions[i]
        let newNode
        if (type == "D") {
          newNode = parseInt((node * 2) % 10000)
        } else if (type == "S") {
          newNode = node - 1 == 0 ? 9999 : parseInt(node - 1)
        } else if (type == "L") {
          // 왼쪽이동
          const temp = parseInt(node / 1000)
          newNode = parseInt(node * 10 - temp * 10000 + temp)
        } else if (type == "R") {
          // 오른쪽이동
          const temp = parseInt(node % 10)
          newNode = parseInt(parseInt(node / 10) + temp * 1000)
        }

        array.push(type)
        console.log("newNode", newNode)
        if (newNode == endNode) {
          console.log("찾음")
          return array
        }
        if (!visited[newNode]) {
          count++
          q.push(newNode)
        }
      }
      return array
    }
  }
}

solution(`3
1234 3412
1000 1
1 16`)

// ! 어떻게 어디에다 DSLR 을 담지?
