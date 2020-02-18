function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())
  const budgets = input
    .shift()
    .split(" ")
    .map(a => +a)
    .sort()

  const sumBud = budgets.reduce((a, b) => a + b, 0)
  const total = parseInt(input.shift())
  let max = budgets[n - 1]

  // 요청한대로 다 줄 수 있을 경우
  if (sumBud <= total) {
    console.log(max)
  } else {
    // ! 분배가능한 예산이 budgets[0]보다 작은 경우도 있으니... 최소값을 0으로 설정
    let min = 0,
      result = 0

    while (min <= max) {
      let mid = parseInt((min + max) / 2)

      const temp = getSum(mid)
      //   console.log("max, min, mid, result, temp", max, min, mid, result, temp)

      if (temp > total) {
        // 예산 줄이기
        max = mid - 1
      } else {
        // 예산보다 작거나 같아야함. 그중에 최대값
        // 예산 늘리기
        min = mid + 1
        if (result < mid) result = mid
      }
    }
    console.log(result)
  }

  function getSum(mid) {
    let sum = 0
    budgets.forEach(a => {
      sum += Math.min(mid, a)
    })
    return sum
  }
}

solution(`4
120 110 140 150
485`)
// 127
solution(`4
120 110 140 150
519`)
// 149

solution(`4
4 3 2 1
10`)

solution(`3
4 4 5
20`)

// https://devpouch.tistory.com/52 이 풀이와 뭐가 다르지?
//
