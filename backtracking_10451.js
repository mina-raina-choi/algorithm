function solution(params) {
  const input = params.split("\n")
  const testCase = parseInt(input.shift())
  for (let i = 0; i < testCase; i++) {
    const n = parseInt(input.shift())
    const array = input
      .shift()
      .split(" ")
      .map(a => +a)

    const map = new Map()
    for (let j = 0; j < n; j++) {
      map.set(j + 1, array[j])
    }
    // console.log(map)
    const visited = new Array(n + 1).fill(false)
    let cnt = 0

    for (let j = 1; j < n + 1; j++) {
      cycle(j, j, visited, map)
      function cycle(start, nowNode, visited, map) {
        if (start == map.get(nowNode)) {
          //   console.log("순열싸이클", start, nowNode, map.get(nowNode))
          cnt++
          return
        }
        visited[nowNode] = true
        const newNode = map.get(nowNode)
        if (!visited[newNode]) {
          visited[newNode] = true
          cycle(start, newNode, visited, map)
        }
      }
    }

    console.log(cnt)
  }
}

solution(`2
8
3 2 7 8 1 4 5 6
10
2 1 3 4 5 6 7 9 10 8`)
