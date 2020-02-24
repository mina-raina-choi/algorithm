function solution(params) {
  const n = parseInt(params)
  const stars = new Array(n).fill(null).map(a => new Array(n).fill("*"))

  recurse([0, 0], n)

  stars.forEach(a => {
    console.log(a.join(""))
  })

  function recurse(startIndex, len) {
    const [x, y] = startIndex
    if (len == 1) {
      return
    }
    const n = len / 3

    for (let i = 0; i < 3; i++) {
      for (let k = 0; k < 3; k++) {
        const nx = x + n * i,
          ny = y + n * k
        // console.log("n recurse, x, y", n, nx, ny)
        recurse([nx, ny], n)
        if (i == 1 && k == 1) {
          for (let j = 0; j < n; j++) {
            for (let m = 0; m < n; m++) {
              stars[nx + j][ny + m] = " "
            }
          }
        }
      }
    }
  }
}

solution(Math.pow(3, 3))

// 채우고 비우고 채우고의 연속
// X 0 X

// recurse 함수의 인수로 배열을 넣는게 아니라 index, length만 넣어야함.
