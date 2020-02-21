function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())
  for (let i = 0; i < n; i++) {
    const element = input[i]
    const len = element.length
    let reverse = []
    for (let j = 0; j < len; j++) {
      const elem = element[j]
      reverse[len - 1 - j] = elem
    }

    let sum = Number(reverse.join("")) + Number(element)
    sum = sum.toString()
    const sumLen = sum.length
    let result = "YES"
    for (let j = 0; j < Math.ceil(sumLen / 2); j++) {
      if (sum[j] != sum[sumLen - 1 - j]) {
        result = "NO"
        break
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
