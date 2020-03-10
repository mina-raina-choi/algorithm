function solution(N) {
  // N의 약수 구하기
  const factors = []
  for (let i = 1; i * i < N; i++) {
    if (N % i == 0) {
      factors.push([i, N / i])
    }
  }

  if (Math.sqrt(N) % 1 == 0) factors.push([Math.sqrt(N), Math.sqrt(N)])

  //   console.log(factors)

  const lengths = []
  for (let i = 0; i < factors.length; i++) {
    const element = factors[i]
    lengths.push(2 * (element[0] + element[1]))
  }
  //   console.log(Math.min(...lengths))
  return Math.min(...lengths)
}

solution(30)
