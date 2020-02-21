// bfs로 풀어도되고, dp로풀면 코드가 짧아짐
// dp[i] : i를 1로 만드는데 필요한 최소 연산횟수라고 하면,
// dp[1] = 0,
// 2~n까지는 어떻게 구할 수 있을까?

// DP로 해결하기 위해서는 일단 배열에 어떤 값을 넣어야 할지,
// 또 관계식은 어떻게 될지를 잘 생각해야한다...

// dp[10] 은 dp[5] +1, dp[9] +1 중 작은 값
function solution(params) {
  const n = parseInt(params)
  const dp = new Array(n + 1).fill(0)
  dp[1] = 0
  dp[2] = 1
  dp[3] = 1

  for (let i = 4; i < n + 1; i++) {
    const array = [dp[i - 1] + 1]
    if (i % 2 == 0) {
      array.push(dp[i / 2] + 1)
    }

    if (i % 3 == 0) {
      array.push(dp[i / 3] + 1)
    }
    dp[i] = Math.min(...array)
  }

  console.log(dp[n])
}

solution(`10`)
