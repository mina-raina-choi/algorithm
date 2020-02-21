function solution(params) {
  const input = params.split("\n").map(a => +a)
  let sum = input[0] * input[1] * input[2]
  sum = sum.toString()

  const count = new Array(10).fill(0)

  for (let i = 0; i < sum.length; i++) {
    const element = sum[i]
    count[element] += 1
  }
  count.forEach(a => console.log(a))
}

solution(`150
266
427`)
// 3
// 1
// 0
// 2
// 0
// 0
// 0
// 2
// 0
// 0
