function solution(params) {
  const input = params.split("\n")
  const conditions = input[0].split(" ").map(a => +a)
  const n = conditions[0]
  const s = conditions[1]

  const array = input[1].split(" ").map(a => +a)

  const dp = new Array(n).fill(null).map((a, i) => [array[i]])

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      for (let k = 0; k < dp[j].length; k++) {
        dp[i].push(dp[i][0] + dp[j][k])
      }
    }
  }

  let answer = 0
  dp.forEach(a =>
    a.forEach(a => {
      if (a == s) answer++
    })
  )

  console.log(answer)
}

solution(`5 0
-7 -3 -2 5 8`)

// 부분수열의 합...
// 연속하지 않아도 됨...
