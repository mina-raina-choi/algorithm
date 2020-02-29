function solution(params) {
  let [n, k] = params.split(" ").map(a => +a)
  let j = 0
  for (let i = 1; i < n + 1; i++) {
    if (n % i == 0) {
      j++
      //   console.log(`${i}는 ${n}의 약수`)
      // 약수
      if (j == k) {
        console.log(i)
        break
      }
    }
  }
  if (k > j) console.log(0)
}

solution(`6 3`)
