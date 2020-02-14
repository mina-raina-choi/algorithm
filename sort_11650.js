function solution(params) {
  //   const input = params.split("\n")
  //   input.shift()
  //   const arrange = input.map(a => a.split(" ").map(a => +a))
  //   arrange.sort((a, b) => {
  //     if (a[0] == b[0]) {
  //       return a[1] - b[1]
  //     }
  //     return a[0] - b[0]
  //   })

  //   arrange.forEach(a => {
  //     console.log(a.join(" "))
  //   })

  const input = params.split("\n")
  input.shift()
  const arrange = input.map(a => a.split(" ").map(a => +a))
  console.log(arrange)
  arrange.sort((a, b) => {
    if (a[0] == b[0]) {
      return a[1] - b[1]
    }
    return a[0] - b[0]
  })

  arrange.forEach(a => {
    console.log(a.join(" "))
  })
}

solution(`5
3 4
1 1
1 -1
2 2
3 3`)
