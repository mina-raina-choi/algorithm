function solution(params) {
  const input = params.split("\n")
  const conditions = input[0].split(" ").map(a => +a)
  // n개중에 3개를 뽑아서 최대한 m에 가깝게
  const n = conditions[0]
  const m = conditions[1]
  const nums = input[1]
    .split(" ")
    .map(a => +a)
    .sort((a, b) => b - a)

  const array = []
  const result = []
  const visited = []

  function combi(currIndex) {
    if (array.length == 3) {
      const sum = array.reduce((a, b) => a + b, 0)
      if (sum <= m) {
        result.push(sum)
      }
      return
    }

    for (let i = currIndex; i < n; i++) {
      if (visited.indexOf(i) > 0) continue

      array.push(nums[i])
      visited.push(i)

      combi(i + 1)
      array.pop()
      visited.pop()
    }
  }
  combi(0)

  //   console.log("result", result)
  console.log(Math.max(...result))
}

// ! 재귀로 푸니까 런타임에러, 아마 메모리부족으로

solution2(`5 21
5 6 7 8 9`)

solution2(`4 100
1 2 3 100`)

function solution2(params) {
  const input = params.split("\n")
  const conditions = input[0].split(" ").map(a => +a)
  // n개중에 3개를 뽑아서 최대한 m에 가깝게
  const n = conditions[0]
  const m = conditions[1]
  const nums = input[1].split(" ").map(a => +a)

  let result = -1

  // 큰것부터 하나씩 넣어보면?
  // n이 최대 100이니까 단순히 3중for문으로
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        sum = nums[i] + nums[j] + nums[k]
        if (sum <= m) {
          result = Math.max(result, sum)
        }
      }
    }
  }
  console.log(result)
}
