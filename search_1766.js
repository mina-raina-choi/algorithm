function solution(params) {
  const input = params.split("\n")
  const condis = input
    .shift()
    .split(" ")
    .map(a => +a)
  const n = condis[0],
    m = condis[1]
  // 먼저풀면 좋은 문제
  for (let i = 0; i < m; i++) {
    const element = input.shift().split(" ")
  }
}

solution(`4 2
4 2
3 1`)

// ! 먼저 최소힙으로 정렬한 뒤, 조건에 해당하는 노드끼리 바꾸기?
