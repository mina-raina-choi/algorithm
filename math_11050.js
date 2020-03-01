function solution(params) {
  const [n, k] = params.split(" ").map(a => +a)

  const picked = []
  let cnt = 0
  combi(0)
  console.log(cnt)
  // n개중에 k개를 고르는 갯수
  function combi(start) {
    if (picked.length == k) {
      cnt++
    }
    for (let i = start; i < n; i++) {
      picked.push(i)
      combi(i + 1)
      picked.pop()
    }
  }
}

solution(`5 2`)
