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
