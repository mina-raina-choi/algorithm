function solution(params) {
  const input = params.split("\n").map(a => +a)
  const n = input.shift()
  const arithmetic = ["+", "-", ""]

  for (let i = 0; i < n; i++) {
    const array = []
    for (let j = 1; j <= input[i]; j++) {
      array.push(j)
    }
    console.log(array)
  }

  function solve(array) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < 3; j++) {
        //   array[0] array[1] array[2]
      }
    }
  }
}

solution(`2
  3
  7`)
