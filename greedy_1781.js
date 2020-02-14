function solution(inputString) {
  const input = inputString.split("\n")

  const n = Number(input[0])

  const pairs = input
    .slice(1)
    .map(a => a.split(" ").map(a => +a))
    .sort((a, b) => a[0] - b[0])

  let count = 0
  let deadlineObj = new Map()

  // 데드라인 : [받을 수 있는 컵라면 수]
  for (let i = 0; i < pairs.length; i++) {
    let elem = pairs[i]
    if (deadlineObj.get(elem[0])) {
      deadlineObj.get(elem[0]).push(elem[1])
    } else {
      deadlineObj.set(elem[0], [elem[1]])
    }
  }

  // 데드라인이 같은 것들 중 보상이 제일 큰 것으로 선택
  for (let i = 0; i < n; i++) {
    if (deadlineObj.get(i + 1)) {
      let cups = deadlineObj.get(i + 1)
      let max = Math.max(...cups)
      let maxIndex = cups.indexOf(max)
      cups.splice(maxIndex, 1)
      count += max
    }
  }

  for (let i = 0; i < deadlineObj.size; i++) {
    if (!deadlineObj.get(i + 1)) {
      deadlineObj.forEach(function(v, k) {
        // 아직 데드라인이 지나지 않은 것 중에 가장 큰 값으로
        if (i + 1 < k) {
          count += Math.max(...v)
        }
      })
    }
  }

  console.log(count)
}

solution(`7
1 9
1 100
2 300
2 99
3 100
5 100
5 999`)

solution2(`9
5 5
4 6
4 12
3 8
4 18
2 10
2 5
1 7
1 14`)

// console.log(999 + 100 + 300 + 100 + 99)

// wrong : 1499
// correct : 1599

// 백준에서는 왜 또 틀렸다고 나올까........

// 문제를 푸는데는 단위 시간 1이 걸리며 이 조건을 고려해야겠구나
// 그리고 문제를 모두 다 풀어야함~!

// 기본적으로 deadline 이 명시된 시간에는 그 데드라인까지 풀어야하는 문제중 가장 컵라면을 많이 주는 것을 선택하고,
// 비는 타이밍에 아직 데드라인 전인 것들을 풀면 컵라면을 더 받을 수 있다.

// 두번째 예외케이스 처리를 못함..

// 데드라인을 넘기면 문제를 풀지 못함

function solution2(inputString) {
  const input = inputString.split("\n")

  const pairs = input
    .slice(1)
    .map(a => a.split(" ").map(a => +a))
    .sort((a, b) => a[0] - b[0])

  const q = []

  // 컵라면의 갯수를 배열 q에 넣는데, 이 배열의 크기가 데드라인을 초과하는 경우 최소원소를 제거한다.

  let count = 0

  for (let i = 0; i < pairs.length; i++) {
    const elem = pairs[i]
    q.push(elem[1])
    if (elem[0] < q.length) {
      // 최소 원소 제거
      q.sort((a, b) => a - b)
      q.splice(0, 1)
    }
  }

  count = q.reduce((a, b) => a + b, 0)

  console.log(count)
}
