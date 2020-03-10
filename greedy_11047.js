function solution(params) {
  const input = params.split("\n")
  const [n, k] = input
    .shift()
    .split(" ")
    .map(a => +a)

  const coins = input.map(a => +a).sort((a, b) => b - a)

  //   console.log(n, k, coins)

  let total = k,
    coinCnt = 0
  for (let i = 0; i < n; i++) {
    const elem = coins[i]
    if (elem > total) continue
    const temp = parseInt(total / elem)
    coinCnt += temp
    total = total - temp * elem
  }
  console.log(coinCnt)
}

solution(`10 4200
1
5
10
50
100
500
1000
5000
10000
50000`)

solution(`10 4790
1
5
10
50
100
500
1000
5000
10000
50000`)

solution(`2 4000
1
5`)
