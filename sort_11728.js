function solution(params) {
  const input = params.split("\n")
  let [aLength, bLength] = input
    .shift()
    .split(" ")
    .map(a => +a)

  const a = input
      .shift()
      .split(" ")
      .map(a => +a),
    b = input
      .shift()
      .split(" ")
      .map(a => +a)

  let sorted = []
  let aIndex = 0,
    bIndex = 0
  while (aIndex < aLength || bIndex < bLength) {
    if (aIndex < aLength && bIndex < bLength) {
      if (a[aIndex] > b[bIndex]) {
        sorted.push(b[bIndex])
        bIndex++
      } else {
        sorted.push(a[aIndex])
        aIndex++
      }
    } else {
      if (aIndex < aLength) {
        while (aIndex < aLength) {
          sorted.push(a[aIndex])
          aIndex++
        }
      } else {
        while (bIndex < bLength) {
          sorted.push(b[bIndex])
          bIndex++
        }
      }
    }
    // console.log(sorted, a, b)
  }
  console.log(sorted.join(" "))
}

solution(`2 2
3 5
2 9`)

solution(`2 1
4 7
1`)

solution(`4 3
2 3 5 9
1 4 7`)
