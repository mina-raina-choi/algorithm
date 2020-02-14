function solution(inputString) {
  //   4 7
  // 6 13
  // 4 8
  // 3 6
  // 5 12
  const input = inputString
    .toString()
    .trim()
    .split("\n")

  // 4 7
  const firstInput = input[0]
    .toString()
    .trim()
    .split(" ")
    .map(a => +a)

  const n = firstInput[0]
  const maxWeight = firstInput[1]

  const userInputs = []
  const dp = new Array(maxWeight + 1).fill(0, 0)

  for (let i = 1; i < input.length; i++) {
    const temp = input[i]
      .toString()
      .trim()
      .split(" ")
      .map(a => +a)

    userInputs.push(temp)
    // [([6, 13], [4, 8], [3, 6], [5, 12])]
  }

  for (let i = 0; i < n; i++) {
    const [weight, value] = userInputs[i]
    for (let j = 0; j <= maxWeight; j++) {
      if (j < weight) {
        // 이전 value를 그대로
      } else {
        dp[j] = Math.max(dp[j], dp[j - weight] + value)
      }
    }
  }

  console.log(Math.max(...dp))
}

solution(`4 7
6 13
4 8
3 6
5 12`)

function solution2(inputString) {
  const input = inputString
    .toString()
    .trim()
    .split("\n")

  // 4 7
  const firstInput = input[0]
    .toString()
    .trim()
    .split(" ")
    .map(a => +a)

  const n = firstInput[0]
  const maxWeight = firstInput[1]

  const pairs = input.slice(1).map(a => a.split(" ").map(a => +a))
  pairs.sort((a, b) => a[0] - b[0])
  const dp = new Array(maxWeight + 1).fill(0)

  pairs.forEach(a => {
    dp[a[0]] = a[1]
  })
  for (let i = pairs[0][0]; i <= maxWeight; i++) {
    for (let j = 0; j < i; j++) {
      // console.log("dp[j]", dp[j])
      dp[i] = Math.max(dp[i - j] + dp[j], dp[i])
    }
  }
  console.log(Math.max(...dp))
}

solution2(`4 7
6 13
4 8
3 6
5 12`)

// => 시간초과
