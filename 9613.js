function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())

  for (let i = 0; i < n; i++) {
    // 가능한 모든 쌍
    const array = input[i]
      .split(" ")
      .map(a => +a)
      .slice(1)
    const picked = []
    let sum = 0

    combi(0)
    console.log(sum)
    function combi(start) {
      if (picked.length == 2) {
        sum += gcd(picked[0], picked[1])
        return
      }
      for (let i = start; i < array.length; i++) {
        picked.push(array[i])
        combi(i + 1)
        picked.pop()
      }
    }
  }

  function gcd(a, b) {
    while (b != 0) {
      let r = a % b
      a = b
      b = r
    }
    return a
  }
}

// 가능한 모든 쌍의 GCD의 합을 출력
solution(`3
4 10 20 30 40
3 7 5 12
3 125 15 25`)
// 70
// 3
// 35
