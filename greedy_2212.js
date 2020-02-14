function solution(inputString) {
  const input = inputString.split("\n")
  const n = Number(input[0])
  const k = Number(input[1])
  const points = input[2]
    .split(" ")
    .map(a => +a)
    .sort((a, b) => a - b)

  const diffs = []
  if (k < n) {
    for (let i = 0; i < points.length - 1; i++) {
      const diff = points[i + 1] - points[i]
      diffs.push(diff)
    }

    diffs.sort((a, b) => b - a)
    for (let index = 0; index < k - 1; index++) {
      diffs[index] = 0
    }
  }

  const sum = diffs.reduce((a, b) => a + b, 0)
  console.log(sum)
}

// /첫째 줄에 센서의 개수 N(1<=N<=10,000), 둘째 줄에 집중국의 개수 K(1<=K<=1000)가 주어진다.
//셋째 줄에는 N개의 센서의 좌표가 한 개의 정수로 N개 주어진다. 각 좌표 사이에는 빈 칸이 하나 이상 있으며, 좌표의 절댓값은 1,000,000 이하이다.
solution(`6
2
1 6 9 3 6 7`)

// 센서들을 오름차순으로 정렬하고
// 최대 k개의 영역으로 나누는 것이 문제의 핵심
// 각 센서들 사이의 거리를 구하고
// 거리가 먼 순서대로 k-1개를 제거
// 남은 거리의 합을 구하면 정답이다.

// 문제를 이해하지 못했다...
