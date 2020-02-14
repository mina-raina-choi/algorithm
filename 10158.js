function solution(params) {
  const input = params.split("\n")
  const a = input
    .shift()
    .split(" ")
    .map(a => +a)
  const b = input
    .shift()
    .split(" ")
    .map(a => +a)
  const w = a[0],
    h = a[1]
  let p = b[0],
    q = b[1]
  let t = parseInt(input.shift())

  let now_dir = [1, 1]
  while (t) {
    p += now_dir[0]
    q += now_dir[1]
    // x
    if (p == 0 || p == w) {
      now_dir[0] = -now_dir[0]
    }
    // y
    else if (q == 0 || q == h) {
      now_dir[1] = -now_dir[1]
    }
    t--
  }
  console.log(p, q)
}

solution2(`6 4
4 1
8`)

solution2(`2 2
1 1
14`)

// x축과 만나면 x축 이동값이 반대쪽으로 변경
// y축과 만나면 y축 이동값이 반대쪽으로 변경

// ! 시간초과

// 다른 아이디어 필요
// x, y축 따로 생각
function solution2(params) {
  const input = params.split("\n")
  const a = input
    .shift()
    .split(" ")
    .map(a => +a)
  const b = input
    .shift()
    .split(" ")
    .map(a => +a)
  const w = a[0],
    h = a[1]
  let p = b[0],
    q = b[1]
  let t = parseInt(input.shift())
  //   console.log(w, h, p, q, t)

  let x_change = 1
  let y_change = 1
  while (t) {
    p += x_change
    q += y_change

    // x
    if (p == 0) {
      x_change = 1
    } else if (p == w) {
      x_change = -1
    }
    // y
    if (q == 0) {
      y_change = 1
    } else if (q == h) {
      y_change = -1
    }
    t--
  }
  console.log(p, q)
}
