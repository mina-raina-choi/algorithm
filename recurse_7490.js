function solution(params) {
  const input = params.split("\n").map(a => +a)
  const testCase = input.shift()
  const arithmetic = ["+", "-", " "]

  for (let i = 0; i < testCase; i++) {
    const n = input.shift()
    recurse(1, 2, n)
    console.log("")
  }

  function recurse(first, second, n) {
    if (second > n) {
      // 체크 0인지
      if (eval(first.replace(/ /g, "")) == 0) {
        console.log(first)
      }
      return
    }

    for (let i = 0; i < 3; i++) {
      const element = arithmetic[i]
      const temp = first + element + second
      recurse(temp, second + 1, n)
    }
  }
}

// 범위를 보면 3<=n<=9 이니까 완전 탐색, 전체 경우의 수를 전부 탐색
// 연산자 리스트

solution(`2
3
7`)

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/eval
