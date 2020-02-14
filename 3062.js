function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())
  for (let i = 0; i < n; i++) {
    const element = input[i]
    // 더해서 10 미만
    const len = element.length
    let result = "YES"
    for (let j = 0; j < Math.ceil(len / 2); j++) {
      if (Number(element[j]) + Number(element[len - 1 - j]) >= 10) {
        result = "NO"
      }
    }
    console.log(result)
  }
}

solution(`4
13
58
120
5056`)

solution(`1
100000`)
