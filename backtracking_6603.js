// ! backtracking, dfs문제
function solution(params) {
  const input = params.split("\n")
  const len = input.length

  let result = []
  const lottos = []
  const visited = []

  function combination(elem, index) {
    // 길이가 6인 모든 조합
    if (lottos.length == 6) {
      result.push(JSON.parse(JSON.stringify(lottos)))
      return
    }

    // 각 원소를 한번씪만 뽑도록
    for (let i = index; i < elem.length; i++) {
      if (visited.indexOf(i) > 0) continue
      lottos.push(elem[i])
      visited.push(i)
      combination(elem, i + 1)

      lottos.pop()
      visited.pop()
    }
  }

  for (let i = 0; i < len; i++) {
    const nums = input[i].split(" ").map(a => +a)
    // console.log(nums)
    result = []
    combination(nums.slice(1), 0)
    // console.log("result", result)
    result.forEach(pwd => {
      console.log(pwd.join(" "))
    })
    if (result.length) {
      console.log("")
    }
  }
}

solution(`7 1 2 3 4 5 6 7
8 1 2 3 5 8 13 21 34
0`)

// 1. 정렬되어 있는 k 개 숫자 중에서 6개를 선택하는 모든 조합
// 2. dfs를 이용해서 조합함수를 구현

function solution(params) {
  const input = params.split("\n")
  const len = input.length - 1

  for (let i = 0; i < len; i++) {
    const element = input[i].split(" ")
    const n = parseInt(element.shift())

    const arr = []

    combination(0, element, arr)
    if (i < len - 1) console.log()
  }
  function combination(start, array, picked) {
    if (picked.length == 6) {
      console.log(picked.join(" "))
      return
    }
    for (let j = start; j < array.length; j++) {
      picked.push(array[j])
      combination(j + 1, array, picked)
      picked.pop()
    }
  }
}

// 만약 로또의 순서에 따라 결과가 달라진다면?
// 같은 숫자라도 순서가 다르면 다른 값이라고 한다면

function solution(params) {
  const input = params.split("\n")
  const len = input.length - 1

  for (let i = 0; i < 1; i++) {
    const element = input[i].split(" ")
    const n = parseInt(element.shift())

    const arr = []
    const visited = new Array(n).fill(false)

    permutation(element, arr, visited, n)
    if (i < len - 1) console.log()
  }
  function permutation(array, picked, visited, n) {
    if (picked.length == 3) {
      console.log(picked.join(" "))
      return
    }

    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        picked.push(array[i])
        visited[i] = true
        permutation(array, picked, visited, n)
        visited[i] = false
        picked.pop()
      }
    }
  }
}
