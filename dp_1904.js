function solution(input) {
  const n = Number(input)
  dp = []
  dp[1] = 1
  dp[2] = 2

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 15746
  }

  console.log(dp[n])
}

solution(4)

// https://www.acmicpc.net/problem/1904
