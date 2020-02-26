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

  console.log(dp, answer)
}

// solution(`5 0
// -7 -3 -2 5 8`)

// 부분수열의 합...
// 연속하지 않아도 됨...

function solution2(params) {
  const input = params.split("\n")
  const [n, s] = input
    .shift()
    .split(" ")
    .map(a => +a)

  const array = input[0].split(" ").map(a => +a)
  // console.log(n, s, array)

  const subArray = []
  let count = 0

  combi(0)
  console.log(count)

  // 부분 수열 1~n
  // 모든 조합의 합이 s인것을 찾으면 됨
  function combi(start) {
    const sum = subArray.reduce((a, b) => a + b, 0)
    if (subArray.length > 0 && sum == s) {
      // console.log(subArray.join(" "))
      count++
    }

    for (let i = start; i < n; i++) {
      subArray.push(array[i])
      combi(i + 1)
      subArray.pop()
    }
  }
}

solution2(`5 0
-7 -3 -2 5 8`)
