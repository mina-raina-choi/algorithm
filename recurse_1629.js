function solution(params) {
  const input = params
  let [a, b, c] = input.split(" ").map(a => +a)
  // 10, 11, 12
  const result = multiple()
  console.log(result % c)

  // a,b,c가 20억 미만의 수이므로 그냥 재귀를 쓰면 2초내로 풀 수 없다.
  function multiple() {
    if (b == 0) return 1
    b--
    return a * multiple()
  }
}

solution(`10 11 12`)

function solution2(params) {
  let [a, b, c] = params.split(" ").map(a => +a)

  const result = pow(a, b)

  console.log(result % c)
  // 10, 11, 12
  function pow(a, b) {
    if (b == 0) {
      return 1
    }
    if (b % 2 == 0) {
      // b 가 짝수
      const k = parseInt(a / 2)
      const temp = pow(a, k)
      return temp * temp
    }
    // b가 홀수
    else {
      const k = parseInt(a / 2)
      const temp = pow(a, k)
      return temp * temp * a
    }
  }
}
