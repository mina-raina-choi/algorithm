// 연속합
function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())
  const array = input
    .shift()
    .split(" ")
    .map(a => +a)

  const dp = [...array]

  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i], dp[i - 1] + array[i])
  }

  //   console.log(n, array, dp)
  console.log(Math.max(...dp))
}

solution(`10
10 -4 3 1 5 6 -35 12 21 -1`)
