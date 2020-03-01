function solution(params) {
  const n = parseInt(params.split("\n"))

  let cnt = 0
  countZero(n)
  console.log(cnt)

  function countZero(n) {
    for (let i = 1; i < n + 1; i++) {
      let temp = i
      while (temp % 5 == 0) {
        temp = temp / 5
        cnt++
      }
    }
  }

  //   const dp = new Array(n + 1).fill(0)

  //   for (let i = 1; i < n + 1; i++) {
  //     factorial(i)
  //     // console.log(item)
  //   }

  //   // Dp 이용
  //   function factorial(n) {
  //     if (n < 2) {
  //       dp[1] = 1
  //     } else {
  //       dp[n] = n * dp[n - 1]
  //     }
  //   }

  // 일반 재귀로 팩토리얼 함수
  //   function factorial(n) {
  //     if (n < 2) return 1
  //     return n * factorial(n - 1)
  //   }
}

solution(`0`)

// 팩토리얼 함수로 직접 값을 구하는 게 아니라,
// 1~n까지 중에 2, 5 갯수 세는 방식
