function solution(params) {
  const input = params.split("\n").map(a => +a)
  const testCase = input.shift()
  const arithmetic = ["+", "-", " "]

  for (let i = 0; i < testCase; i++) {
    const array = ["+", "-", " "]
    const n = input.shift()
    const newArr = recurse(array, n)
    console.log(newArr)
  }

  function recurse(array, n) {
    const newArray = []

    for (let j = 0; j < n; j++) {
      const element = array[j]
      console.log("element", element)

      for (let i = 0; i < 3; i++) {
        newArray.push(element + arithmetic[i])
      }
    }
    return newArray
  }
}

// 범위를 보면 3<=n<=9 이니까 완전 탐색, 전체 경우의 수를 전부 탐색
// 연산자 리스트

solution(`2
  3
  7`)
