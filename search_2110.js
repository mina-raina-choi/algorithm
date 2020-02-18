function solution(params) {
  const input = params.split("\n")
  const [n, c] = input
    .shift()
    .split(" ")
    .map(a => +a)
  const houses = input.map(a => +a).sort()

  let min = houses[1] - houses[0],
    max = houses[n - 1] - houses[0],
    result = 0

  while (min <= max) {
    let mid = parseInt((min + max) / 2)

    let cnt = 1
    let value = houses[0]

    // 간격 mid로 설치할 수 있는 공유기 갯수 세기
    for (let i = 1; i < houses.length; i++) {
      if (houses[i] - value >= mid) {
        cnt += 1
        value = houses[i]
      }
    }

    if (cnt >= c) {
      // 공유기의 수를 줄이자 => 간격 넓히기
      if (result < mid) result = mid
      min = mid + 1
    } else {
      max = mid - 1
    }
  }
  console.log(result)
}

solution(`5 3
1
2
8
4
9`)
