function solution(params) {
  const input = params
  const len = input.length
  const count = new Array(10).fill(0)
  // 어떤 숫자가 필요한지 파악
  for (let i = 0; i < len; i++) {
    const elem = input[i]
    // 9와 6은 한꺼번에 센다
    if (elem == 6) count[9] += 1
    else count[elem] += 1
  }

  const temp = Math.ceil(count[9] / 2)
  count[6] = temp
  count[9] = temp

  let max = 0
  count.forEach(a => {
    if (max < a) max = a
  })
  console.log(max)
}

solution(`9999`)
