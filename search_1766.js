function solution(params) {
  const input = params.split("\n")
  const condis = input
    .shift()
    .split(" ")
    .map(a => +a)
  const [n, m] = condis
  const n_MAX = 32000
  const m_MAX = 100000

  const answer = []

  const array = new Array(n + 1).fill(null).map(a => [])
  // 들어오는 화살표
  const indegree = new Array(n + 1).fill(0)
  const heap = []

  // 먼저풀면 좋은 문제
  for (let i = 0; i < m; i++) {
    const elem = input
      .shift()
      .split(" ")
      .map(a => +a)
    array[elem[0]].push(elem[1])
    // 들어오는 화살표
    indegree[elem[1]] += 1
  }

  //   console.log(array, indegree)

  indegree.forEach((a, i) => {
    // 진입차수가 0인 노드 heap에 추가
    if (a == 0 && i != 0) {
      heap.push(i)
    }
  })

  while (heap.length > 0) {
    // 문제쉬운순으로 정렬
    heap.sort()
    const item = heap.shift()
    answer.push(item)
    for (let i of array[item]) {
      // 들어오는간선개수 - 1
      indegree[i] -= 1
      // 진입차수가 0인 노드 추가
      if (indegree[i] == 0) {
        heap.push(i)
      }
    }
  }

  console.log(answer.join(" "))
}

solution(`4 2
4 2
3 1`)

solution(`4 4
4 1
1 3
1 2
4 2`)
//  위상정렬 : 순서가 정해져 있는 작업을 차례로 수행해야할 때, 순서를 결정해주는 알고리즘
// 1. 진입 차수가 0인 정점을 큐에 삽입
// 2. 큐에서 원소를 꺼내 해당 원소의 간선을 제거
// 3. 제거 이후에 진입 차수가 0인 정점을 큐에 삽입
// 4. 큐가 빌때까지 2~3을 반복

// !시간초과
