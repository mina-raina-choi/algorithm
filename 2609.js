function solution(params) {
  let [a, b] = params.split(" ").map(a => +a)

  // 최대공약수
  function gcd(a, b) {
    while (b != 0) {
      let r = a % b
      a = b
      b = r
    }
    return a
  }

  //최소공배수
  function lcm(x, y) {
    return (x * y) / gcd(x, y)
  }

  console.log(gcd(a, b))
  console.log(lcm(a, b))
}

//  최대 공약수와 최소 공배수를 출력
solution(`24 18`)
solution(`3 3`)
