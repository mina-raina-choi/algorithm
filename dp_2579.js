function solution(params) {
  const input = params.split("\n").map(a => +a)
  const n = input.shift()

  // dp[i]는 i번째 계단까지 오를 때 얻을 수 있는 최대 점수
  // 이 최대점수가 연속된 계단의 합에서 나왔는지 아닌지가 필요하겠네?
  const dp = new Array(n + 1).fill(0)
  dp[1] = [input[0], false]
  dp[2] = [dp[1][0] + input[1], true]

  for (let i = 2; i < n; i++) {
    const maxes = [dp[i - 1][0]]
    let temp = false
    if (dp[i - 1][1]) {
      maxes.push(input[i - 2])
    } else {
      maxes.push(dp[i - 1][0])
      temp = false
    }
    console.log(maxes)
    const max = Math.max(...maxes) + input[i - 1]
    console.log(max, input[i - 1])

    // const tt = dp.filter(a => a[0] == max)
    // console.log(tt)

    dp[i + 1] = [max, temp]
  }
  console.log(dp)
}

solution(`6
10
20
15
25
10
20`)

// solution(`11
// 1
// 6
// 4
// 7
// 3
// 7
// 5
// 2
// 1
// 5
// 3`)
