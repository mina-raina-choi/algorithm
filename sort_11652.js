function solution(params) {
  const input = params.split("\n").map(a => +a)
  const n = input.shift()
  const map = {}
  input.forEach(a => {
    if (map[a]) {
      map[a][1] += 1
    } else {
      map[a] = [a, 1]
    }
  })

  const values = Object.values(map)
  values.sort((a, b) => {
    if (a[1] == b[1]) return a[0] - b[0]
    return b[1] - a[1]
  })
  console.log(values[0][0])
}

solution(`5
1
2
1
2
1`)

solution(`10
1
1
1
1
1
2
2
2
2
2`)
