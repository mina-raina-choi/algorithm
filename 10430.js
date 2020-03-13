function solution(params) {
  const [a, b, c] = params.split(" ").map(a => +a)
  console.log((a + b) % c)
  console.log(((a % c) + (b % c)) % c)
  console.log((a * b) % c)
  console.log(((a % c) * (b % c)) % c)
}

// 첫째 줄에 (A+B)%C, 둘째 줄에 (A%C + B%C)%C, 셋째 줄에 (A×B)%C, 넷째 줄에 (A%C × B%C)%C를 출력한다.
// (2 ≤ A, B, C ≤ 10000)
solution(`5 8 4`)
