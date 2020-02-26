function solution(params) {
  const input = params.split(" ").map(a => +a)
  const n = input[0],
    m = input[1]

  const array = []
  for (let i = 1; i <= n; i++) {
    array.push(i)
  }
  //   console.log(array)
  const answer = []
  permutation(0)

  function check(array) {
    let isUp = true
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        isUp = false
        break
      }
    }
    return isUp
  }
  //순서가 다르면 다른 값 -> 순열
  function permutation() {
    if (answer.length == m) {
      // 오른차순이어야함
      if (check(answer)) console.log(answer.join(" "))
      return
    }

    for (let i = 0; i < n; i++) {
      answer.push(array[i])
      permutation()
      answer.pop()
    }
  }
}

solution(`4 2`)
solution(`3 3`)
// solution(`5 3`)

// 1 1 1
// 1 1 2
// 1 1 3
// 1 2 2
// 1 2 3
// 1 3 3
// 2 2 2
// 2 2 3
// 2 3 3
// 3 3 3
