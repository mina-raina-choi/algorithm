function solution(params) {
  const n = parseInt(params)
  const dp = new Array(n + 1).fill(0)
  dp[1] = 1
  dp[2] = 2

  for (let i = 3; i <= n; i++) {
    //계산하는 중간에 overflow 가 발생할 수있다. (2^31-1 보다 더 큰값이 들어오는것)
    // 그러므로 중간중간마다 나머지 연산. a%c + b%c = (a+b)%c
    dp[i] = (dp[i - 1] % 10007) + (dp[i - 2] % 10007)
  }
  console.log(dp[n] % 10007)
}

solution(`2`)
solution(`9`)

// 관계식 어떻게
// -> 직접 그려보면서 규칙찾음
// 첫째 줄에 2×n 크기의 직사각형을 채우는 방법의 수를 10,007로 나눈 나머지를 출력한다.
