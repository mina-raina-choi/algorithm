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

solution2(`4
120 110 140 150
485`)
// 127

solution2(`4
120 110 140 150
519`)
// 149

solution2(`2
10 20
12`)

// https://devpouch.tistory.com/52 이 풀이와 뭐가 다르지?
//

function solution2(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())
  const budgets = input
    .shift()
    .split(" ")
    .map(a => +a)
    .sort()

  const maxBudget = parseInt(input.shift())

  let row = 0,
    high = budgets[n - 1],
    mid = 0,
    result = 0

  while (row <= high) {
    mid = parseInt((row + high) / 2)
    let total = 0
    // mid값으로 모든 도시에 원하는만큼 예산을 줄 수 있는지 체크
    for (let i = 0; i < n; i++) {
      if (budgets[i] <= mid) {
        total += budgets[i]
      } else {
        total += mid
      }
    }

    // console.log("total", total)
    if (total <= maxBudget) {
      row = mid + 1
      result = Math.max(mid, result)
    } else {
      // mid를 낮춰야함
      high = mid - 1
    }
  }

  // 최댓값인 정수를 출력
  console.log(result)
}
