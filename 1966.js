function solution(params) {
  const input = params.split("\n")
  const caseNo = parseInt(input[0])

  for (let i = 0; i < caseNo * 2; ) {
    const conditions = input[i + 1].split(" ").map(a => +a)
    const n = conditions[0]
    const m = conditions[1]
    const docs = input[i + 2].split(" ").map((a, i) => [+a, i])
    // console.log("n, m, docs", n, m, docs)
    i += 2

    let max = setMax(docs)
    let count = 0

    while (docs.length > 0) {
      const shiftItem = docs.shift()

      if (shiftItem[0] < max) {
        docs.push(shiftItem)
      } else {
        count++

        max = setMax(docs)
        if (shiftItem[1] == m) {
          console.log(count)
          break
        }
      }
    }
  }

  function setMax(array) {
    let max = -1
    array.forEach(elem => {
      max = Math.max(elem[0], max)
    })
    return max
  }
}

solution(`3
1 0
5
4 2
1 2 3 4
6 0
1 1 9 1 1 1`)
