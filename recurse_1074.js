function solution(params) {
  const input = params
  const [n, r, c] = input.split(" ").map(a => +a)

  const len = Math.pow(2, n)
  const array = new Array(len).fill(null).map(a => new Array(len).fill(0))
  let a = 0
  recurse([0, 0], len)
  //   console.log(array)
  console.log(array[r][c])

  function recurse(startIndex, n) {
    const [x, y] = startIndex
    let b = a * 4
    if (n == 2) {
      //   console.log("for문 x, y, n, a, b", x, y, n, a, b)
      for (let i = x; i < x + n; i++) {
        for (let j = y; j < y + n; j++) {
          array[i][j] += b
          b++
        }
      }
      a++
      return
    } else {
      const nn = n / 2
      recurse([x, y], nn)
      recurse([x, y + nn], nn)
      recurse([x + nn, y], nn)
      recurse([x + nn, y + nn], nn)
      return
    }
  }
}

// 런타임에러가 왜나지?

solution2(`2 3 1`)
solution2(`3 7 7`)

// 패캠강의 풀이
function solution2(params) {
  const input = params
  const [n, r, c] = input.split(" ").map(a => +a)
  let result = 0
  const len = Math.pow(2, n)
  recurse(0, 0, len)

  function recurse(x, y, n) {
    if (n == 2) {
      if (x == r && y == c) {
        console.log(result)
        return
      }
      result += 1

      if (x == r && y + 1 == c) {
        console.log(result)
        return
      }
      result += 1

      if (x + 1 == r && y == c) {
        console.log(result)
        return
      }
      result += 1

      if (x + 1 == r && y + 1 == c) {
        console.log(result)
        return
      }
      result += 1
      return
    }
    const nn = n / 2
    recurse(x, y, nn)
    recurse(x, y + nn, nn)
    recurse(x + nn, y, nn)
    recurse(x + nn, y + nn, nn)
  }
}
