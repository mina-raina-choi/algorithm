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
  const visited = new Array(n).fill(false)

  permutation(0)
  // 조합 만드는 방법
  function combi(start) {
    // 재귀에서는 탈출구문을 먼저
    if (answer.length == m) {
      console.log(answer.join(" "))
      return
    }

    for (let i = start; i < n; i++) {
      answer.push(array[i])
      // 똑같아도 되면 i, 중복선택안되면 i+1
      combi(i + 1)
      answer.pop()
    }
  }

  //순서가 다르면 다른 값 -> 순열
  function permutation() {
    // answer.push(array[curr])
    if (answer.length == m) {
      console.log(answer.join(" "))
      return
    }

    // 숫자 중복 선택은 제외
    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        answer.push(array[i])
        visited[i] = true
        permutation()
        visited[i] = false
        answer.pop()
        // console.log("answer", answer)
        // console.log("visited", visited)
      }
    }
  }
}

// solution(`4 2`)
solution(`3 3`)
