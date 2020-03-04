function solution(params) {
  const input = params.split("\n")
  const [k, n] = input
    .shift()
    .split(" ")
    .map(a => +a)

  const lines = input.map(a => +a).sort((a, b) => b - a)

  let high = lines[0],
    row = 1,
    mid = 0

  let max = 0
  while (row <= high) {
    mid = parseInt((high + row) / 2)
    let totalCnt = 0
    for (let i = 0; i < k; i++) {
      const cnt = parseInt(lines[i] / mid)
      totalCnt += cnt
    }
    // ! N개보다 많이 만드는 것도 N개를 만드는 것에 포함
    if (totalCnt >= n) {
      max = Math.max(max, mid)
      row = mid + 1
    } else if (totalCnt < n) {
      // 길이를 줄여야 함 -> high값 개선
      high = mid - 1
    }
  }
  console.log(max)
}

solution(`4 11
802
743
457
539`)
