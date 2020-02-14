function solution(params) {
  const input = params.split(" ").map(a => +a)
  const startNode = input[0]
  const sister = input[1]

  const MAX = 100001
  let positionArray = new Array(MAX).fill(0)
  let q = []

  q.push(startNode)

  while (q.length > 0) {
    const now_pos = q.shift()
    if (now_pos === sister) {
      console.log(positionArray[now_pos])
      break
    }

    const next_pos_list = [now_pos - 1, now_pos + 1, now_pos * 2]
    for (const next_pos in next_pos_list) {
      const neigh = next_pos_list[next_pos]

      if (0 <= neigh < MAX && positionArray[neigh] === 0) {
        positionArray[neigh] = positionArray[now_pos] + 1
        q.push(neigh)
      }
    }
  }
}

solution2(`5 17`)

// ! bfs에서 depth를 어떻게 계산할 것인가!!
function solution2(params) {
  const input = params.split(" ").map(a => +a)
  const startNode = input[0]
  const endNode = input[1]
  // console.log(startNode, endNode)
  const MAX = 100000
  const countArray = new Array(MAX + 1).fill(0)

  bfs(startNode)

  // 10만 미만
  function bfs(startNode) {
    const q = [startNode]
    countArray[startNode] = 0
    while (q.length > 0) {
      const node = q.shift()
      if (node == endNode) {
        console.log(countArray[endNode])
        break
      }
      const new_nodes = [node - 1, node + 1, 2 * node]
      for (let i = 0; i < 3; i++) {
        const elem = new_nodes[i]
        if (elem >= 0 && elem <= MAX && !countArray[elem]) {
          countArray[elem] = countArray[node] + 1
          q.push(elem)
        }
      }
    }
  }
}
