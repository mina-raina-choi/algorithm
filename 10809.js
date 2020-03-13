function solution(params) {
  const input = params
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("")
  let result = ""
  alphabets.forEach(a => {
    const i = input.indexOf(a)
    result += `${i} `
  })
  console.log(result)
}

solution(`baekjoon`)

// 각각의 알파벳에 대해서, 단어에 포함되어 있는 경우에는 처음 등장하는 위치를,
// 포함되어 있지 않은 경우에는 -1을 출력하는 프로그램을 작성하시오.
