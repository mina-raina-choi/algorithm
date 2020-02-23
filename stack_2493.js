function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())
  const heights = input
    .shift()
    .split(" ")
    .map(a => +a)
    .reverse()

  const indexes = []

  console.log(n, heights)
  const len = heights.length
  for (let i = 0; i < len; i++) {
    const elem = heights[i]
    let isFound = false

    // elem보다 크거나 같은 탑 찾기
    for (let j = i + 1; j < len; j++) {
      const next = heights[j]
      if (elem <= next) {
        indexes.push(len - j)
        isFound = true
        break
      }
    }
    if (!isFound) indexes.push(0)
  }
  console.log(indexes.reverse().join(" "))
}

solution(`5
6 9 5 7 4`)
// 0 0 2 2 4

solution(`7
1 2 3 4 5 6 7`)
// 0 1 1 3 3 5
