function solution(inputString) {
  var input = inputString.trim().split("\n")

  var conditions = input[0].split(" ")
  var cases = input[1].split(" ").map(a => +a)
  //5 3 7
  //3 5 10
  var n = parseInt(conditions[0])
  var start = parseInt(conditions[1])
  var max = parseInt(conditions[2])
  // 3 * 10
  const dp = new Array(n + 1).fill(null).map(a => new Array(max).fill(false))
  //   console.log(dp)
  dp[0][start] = true
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= max; j++) {
      if (!dp[i - 1][j]) {
        continue
      }
      const temp = cases[i - 1]
      if (0 <= j - temp) {
        dp[i][j - temp] = true
      }
      if (j + temp <= 10) {
        dp[i][j + temp] = true
      }
    }
  }
  //   console.log(dp[n])
  let answer = -1
  for (let i = max; i >= 0; i--) {
    if (dp[n][i]) {
      answer = i
      break
    }
  }
  console.log(answer)
}

solution3(`3 5 10
5 3 7`)

function solution2(inputString) {
  var input = inputString.trim().split("\n")

  var conditions = input[0].split(" ").map(a => +a)
  var volumes = input[1].split(" ").map(a => +a)
  //5 3 7
  //3 5 10
  var n = conditions[0]
  var start = conditions[1]
  var max = conditions[2]

  const dp = new Array(n + 1).fill(null).map(a => new Array())
  console.log("dp", dp)
  dp[0].push(start)

  for (let i = 0; i < volumes.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      // 연주할 수 있는 볼륨이면 dp[i+1]에 넣기
      if (dp[i][j] + volumes[i] >= 0 && dp[i][j] + volumes[i] <= max) {
        dp[i + 1].push(dp[i][j] + volumes[i])
      }

      if (dp[i][j] - volumes[i] >= 0 && dp[i][j] - volumes[i] <= max) {
        dp[i + 1].push(dp[i][j] - volumes[i])
      }
    }
  }

  console.log(dp[n].length > 0 ? Math.max(...dp[n]) : -1)
}

function solution3(inputString) {
  var input = inputString.trim().split("\n")

  var conditions = input[0].split(" ").map(a => +a)
  var volumes = input[1].split(" ").map(a => +a)
  //5 3 7

  //3 5 10
  var n = conditions[0]
  var start = conditions[1]
  var max = conditions[2]

  const dp = new Array(n + 1).fill(null).map(a => new Array(max).fill(false))

  dp[0][start] = true

  for (let i = 0; i < n; i++) {
    const changeVolume = volumes[i]

    for (let j = 0; j <= max; j++) {
      if (!dp[i][j]) continue
      if (j + changeVolume >= 0 && j + changeVolume <= max) {
        dp[i + 1][j + changeVolume] = true
      }

      if (j - changeVolume >= 0 && j - changeVolume <= max) {
        dp[i + 1][j - changeVolume] = true
      }
    }
  }
  let answer = -1
  for (let i = max; i >= 0; i--) {
    if (dp[n][i]) {
      answer = i
      break
    }
  }
  console.log(answer)
}

// n, s, m = map(int, input().split())
// array = list(map(int, input().split()))
// dp = [[0] * (m + 1) for _ in range(n + 1)]
// dp[0][s] = 1
// for i in range(1, n + 1):
// for j in range(m + 1):
// if dp[i - 1][j] == 0:
// continue
// if j - array[i - 1] >= 0:
// dp[i][j - array[i - 1]] = 1
// if j + array[i - 1] <= m:
// dp[i][j + array[i - 1]] = 1

// result = -1
// for i in range(m, -1, -1):
// if dp[n][i] == 1:
// result = i
// break
// print(result)
