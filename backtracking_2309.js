function solution(params) {
  const array = params.split("\n").map(a => +a)

  const persons = []
  const visited = []
  let flag = false

  function combi(index, sum) {
    // 조건에 만족하면
    if (persons.length == 7 && sum == 100 && !flag) {
      persons.sort((a, b) => a - b)
      flag = true

      // 여기서 바로 출력하고 끝내야함.
      //   console.log("persons", persons)
      persons.forEach(i => {
        console.log(i)
      })
      return
    }

    for (let i = index; i < array.length; i++) {
      if (visited.indexOf(i) > 0) continue
      persons.push(array[i])
      sum += array[i]
      visited.push(i)
      combi(i + 1, sum)
      const popped = persons.pop()
      visited.pop()
      sum -= popped
    }
  }

  combi(0, 0)
}

// 모든 조합 문제네,
// 9개중 7개를 골라서 그 키의 합이 100 미만인 경우를 출력.

solution(`20
7
23
19
10
15
25
8
13`)
