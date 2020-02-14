function solution(inputString) {
  var input = inputString.trim().split("\n")

  // 6
  // 10 20 10 30 20 50
  var n = +input[0]
  var elements = input[1].split(" ").map(a => +a)

  const dp = new Array(n).fill(1, 0)

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (elements[i] > elements[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    console.log(dp)
  }

  console.log(Math.max(...dp))
}

// solution(`6
// 10 20 10 30 20 50`)

// ! 2020.2.7

function solution2(inputString) {
  const input = inputString.split("\n")
  const n = parseInt(input[0])
  const array = input[1].split(" ").map(a => +a)

  const dp = new Array(n).fill(1)

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] > array[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  console.log(Math.max(...dp))
}

solution2(`6
10 20 10 30 20 50`)
