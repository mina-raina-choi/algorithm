function solution(params) {
  const input = parseInt(params)
  const list = new Array(input + 1).fill(0)
  for (let i = 0; i < input + 1; i++) {
    if (i < 2) list[i] = i
    else {
      list[i] = list[i - 1] + list[i - 2]
    }
  }
  console.log(list[input])
}
solution(`10`)
