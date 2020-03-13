function solution(params) {
  const input = params
  const n = input.length
  const result = []
  for (let i = 0; i < n; i++) {
    result.push(input.substr(i, n))
  }
  result.sort()
  result.forEach(a => {
    console.log(a)
  })
}

solution(`baekjoon`)
aekjoon
baekjoon
ekjoon
joon
kjoon
n
on
oon

// ! 출력형식 "출력 결과는 정답과 유사하나, 공백, 빈 줄과 같은 문제로 인해서 출력 결과가 일치하지 않은 경우 입니다."
