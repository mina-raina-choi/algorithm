function solution(params) {
  let input = params.split("\n")
  const n = parseInt(input.shift())
  input = input[0].split(" ").map(a => +a)

  let count = 0
  // 버블정렬 : 인전합 두 요소 비교
  for (let i = 0; i < n - 1; i++) {
    let changed = false
    for (let j = 0; j < n - 1 - i; j++) {
      if (input[j] > input[j + 1]) {
        const temp = input[j]
        input[j] = input[j + 1]
        input[j + 1] = temp
        changed = true
        count++
      }
    }
    // 이미 정렬 끝
    if (!changed) break
  }

  console.log(count)
}

solution(`3
3 2 1`)
