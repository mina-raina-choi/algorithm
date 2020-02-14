function solution(inputString) {
  const input = inputString.split("\n")
  const conditions = input[0].split(" ")
  const l = Number(conditions[0])
  const c = Number(conditions[1])
  const alpha = input[1].split(" ").sort()
  const vowels = ["a", "e", "i", "o", "u"]

  //   console.log(l, c, alpha)

  const result = []
  const string = []
  const visited = []

  // 모든 조합찾기
  function combination(index) {
    // 길이가 l인 모든 조합 찾기
    if (string.length == l) {
      result.push(JSON.parse(JSON.stringify(string)))
      return
    }

    // 각 원소를 한번씩만 뽑도록
    for (let i = index; i < alpha.length; i++) {
      if (visited.indexOf(i) > 0) continue

      string.push(alpha[i])
      visited.push(i)
      combination(i + 1)
      // 비워주는게 중요!!
      string.pop()
      visited.pop()
    }
  }

  combination(0)

  result.forEach(pwd => {
    let count = 0
    pwd.forEach(i => {
      if (vowels.indexOf(i) > -1) count++
    })
    if (count >= 1 && count <= l - 2) {
      console.log(pwd.join(""))
    }
  })
}

solution(`4 6
a t c i s w`)

// 암호는 서로 다른 L개의 알파벳 소문자들로 구성되며 최소 한 개의 모음과 최소 두 개의 자음으로 구성되어 있다고 알려져 있다.
// 또한 정렬된 문자열을 선호하는 조교들의 성향으로 미루어 보아 암호를 이루는 알파벳이 암호에서 증가하는 순서로 배열되었을 것이라고 추측된다.
// 즉, abc는 가능성이 있는 암호이지만 bac는 그렇지 않다.
// ! 사전식
// 새 보안 시스템에서 조교들이 암호로 사용했을 법한 문자의 종류는 C가지가 있다고 한다.
// 이 알파벳을 입수한 민식, 영식 형제는 조교들의 방에 침투하기 위해 암호를 추측해 보려고 한다.
// C개의 문자들이 모두 주어졌을 때, 가능성 있는 암호들을 모두 구하는 프로그램을 작성하시오.
// ! 6가지 문자 중에 4가지 문자를 선택해 사전식으로 나열~! ->
// 1. 모든 조합을 구해야 함
// ! 최소 한 개의 모음과 최소 두 개의 자음으로 구성되어 있다고 알려져
// 2. 모음의 개수 세기
// 3. 모음한개이상, 자음2개이상인 케이스 출력!
// ! 이걸 어떻게 출력하지?

// (3 ≤ L ≤ C ≤ 15)

// ! dfs 를 이용해서 조합 라이브러리 만들기...
