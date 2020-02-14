function solution(inputString) {
  const input = inputString.split("\n")

  const conditions = input[0].split(" ").map(a => +a)

  const n = conditions[0] // 옮겨야하는 책
  const m = conditions[1] // 최대 한꺼번에 들 수 있는 책개수
  const points = input[1].split(" ").map(a => +a)

  const positives = points.filter(a => a > 0).sort()
  const negatives = points.filter(a => a < 0).sort((a, b) => a - b)

  let distance = 0
  console.log(positives, negatives)

  // 그룹핑을 먼저 해볼까
  let groups = []

  while (positives.length > 0) {
    groups.push(positives.shift())
    for (let i = 0; i < m - 1; i++) {
      positives.shift()
    }
  }

  while (negatives.length > 0) {
    groups.push(negatives.shift())
    for (let i = 0; i < m - 1; i++) {
      negatives.shift()
    }
  }

  // for (let i = 0; i < positives.length; i++) {
  //   if (i % m === 0) {
  //     groups.push(positives[i])
  //   }
  // }

  // for (let i = 0; i < negatives.length; i++) {
  //   if (i % m === 0) {
  //     groups.push(negatives[i])
  //   }
  // }
  console.log(groups)

  groups = groups.map(a => Math.abs(a)).sort((a, b) => b - a)

  const max = groups[0]

  distance = groups.reduce((a, b) => a + b * 2, 0)
  distance -= max

  console.log(distance)
}

// 가장 먼거리 묶음은 마지막에 (0으로 돌아올 필요가 없으므로)
// 음수 / 양수 모음으로 나눠서 M개씩
// => 메인 아이디어

solution(`7 2
-37 2 -6 -39 -29 11 -28`)

// 또 틀림...
