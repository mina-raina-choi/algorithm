function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())
  // 바로 윗 행과 겹치지 않게
  const dp = new Array(n).fill(null).map(a => new Array(3).fill(0))

  for (let i = 0; i < n; i++) {
    const elem = input[i].split(" ").map(a => +a)
    if (i == 0) dp[0] = [...elem]
    // 현재의 열과 겹치지 않는 이전 행에서의 열의 합 중 작은값
    else {
      dp[i] = [
        elem[0] + Math.min(dp[i - 1][1], dp[i - 1][2]),
        elem[1] + Math.min(dp[i - 1][0], dp[i - 1][2]),
        elem[2] + Math.min(dp[i - 1][0], dp[i - 1][1])
      ]
    }
  }

  console.log(Math.min(...dp[n - 1]))
}

// ! 어떤 값을 배열에 담을지,,, 관계식은 어떻게?
solution(`3
26 40 83
49 60 57
13 89 99`)
