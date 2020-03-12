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

function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())

  for (let i = 0; i < n; i++) {
    const elem = input[i]
    let reversed = ""
    let answer = "YES"

    for (let j = elem.length - 1; j >= 0; j--) {
      reversed += elem[j]
    }
    const sum = parseInt(elem) + parseInt(reversed) + ""

    for (let j = 0; j <= parseInt(sum.length / 2); j++) {
      const element = sum[j]
      const last = sum[sum.length - 1 - j]
      if (element !== last) {
        answer = "NO"
      }
    }
    // console.log(elem, reversed, sum)
    console.log("answer", answer)
  }
}
