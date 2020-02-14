function solution(params) {
  const input = params.split("\n")
  //   const n = parseInt(input[0])
  const a = input[1]
    .split(" ")
    .map(a => +a)
    .sort((a, b) => a - b)
  const m = parseInt(input[2])
  const arr = input[3].split(" ").map(a => +a)

  for (let i = 0; i < m; i++) {
    const elem = arr[i]
    const searched = binarySearch(elem, a)
    console.log(searched ? "1" : "0")
  }
  function binarySearch(elem, array) {
    const len = array.length
    let low = 0
    let high = len - 1

    while (low <= high) {
      let index = parseInt((low + high) / 2)
      const item = array[index]
      if (elem == item) {
        return true
      } else if (elem < item) {
        high = index - 1
      } else {
        low = index + 1
      }
    }
    return false
  }
}

solution(`5
4 1 5 2 3
5
1 3 7 9 5`)
