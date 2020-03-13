function solution(params) {
  let [a, b] = params.split(" ").map(a => BigInt(a))

  const x = gcd(a, b)

  let y = ""

  for (let i = 0; i < x; i++) {
    y += 1
  }

  console.log(y)

  function gcd(a, b) {
    while (b != 0) {
      let r = a % b
      a = b
      b = r
    }
    return a
  }
}

// A와 B를 이루는 1의 개수
// < 9223372036854776000
solution(`3 4`)
solution(`3 6`)
solution(`500000000000000000 500000000000000002`)

// ! 메모리초과
