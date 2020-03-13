function solution(params) {
  const [a, b, c, d] = params.split(" ")
  const result = Number(a + b) + Number(c + d)
  console.log(result)
}

solution(`10 20 30 40`)
