function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift()) //N(1 ≤ N ≤ 10,000)
  const MAX = 10000
  const occupied = new Array(MAX).fill(false)
  //노드 번호와 해당 노드의 왼쪽 자식 노드와 오른쪽 자식 노드의 번호가 순서
  // 노드들의 번호는 1부터 N까지이며, 자식이 없는 경우에는 자식 노드의 번호에 -1

  const graph = setGraph(input)
  console.log(graph)

  function dfs(graph) {}

  function setGraph(input) {
    console.log(input)
    const map = new Map()
    for (let i = 0; i < n; i++) {
      const elem = input
        .shift()
        .split(" ")
        .map(a => +a)

      if (elem[1] != -1 && elem[2] != -1) map.set(elem[0], [elem[1], elem[2]])
      else if (elem[1] != -1) {
        map.set(elem[0], [elem[1]])
      } else if (elem[2] != -1) {
        map.set(elem[0], [elem[2]])
      }
    }
    return map
  }
}

// 트리의 너비 :  그 레벨에 할당된 노드 중 가장 오른쪽에 위치한 노드의 열 번호에서 가장 왼쪽에 위치한 노드의 열 번호를 뺀 값 더하기 1
// 트리의 높이 : 루트노드 1, 그 후 1씩 더하기
solution(`19
1 2 3
2 4 5
3 6 7
4 8 -1
5 9 10
6 11 12
7 13 -1
8 -1 -1
9 14 15
10 -1 -1
11 16 -1
12 -1 -1
13 17 -1
14 -1 -1
15 18 -1
16 -1 -1
17 -1 19
18 -1 -1
19 -1 -1`)

// ! 아이디어...
