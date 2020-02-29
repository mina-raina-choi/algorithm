function solution(params) {
  const input = params.split("\n")
  // 가로, 세로, 높이
  const [m, n, h] = input
    .shift()
    .split(" ")
    .map(a => +a)

  // 3차배열
  const tomatos = new Array(h)
    .fill(null)
    .map(a => new Array(n).fill(null).map(a => new Array(m).fill([])))

  // 각 토마토가 익는 데 필요한 날짜를 담아둘 배열
  const check = new Array(h)
    .fill(null)
    .map(a => new Array(n).fill(null).map(a => new Array(m).fill(-1)))

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < n; j++) {
      const elem = input
        .shift()
        .split(" ")
        .map(a => +a)
      for (let k = 0; k < m; k++) {
        tomatos[i][j][k] = elem[k]
      }
    }
  }

  // m n h
  // const directions = [
  //   [0, 1, 0],
  //   [0, -1, 0],
  //   [1, 0, 0],
  //   [-1, 0, 0],
  //   [0, 0, 1],
  //   [0, 0, -1]
  // ]

  const dx = [1, -1, 0, 0, 0, 0]
  const dy = [0, 0, 1, -1, 0, 0]
  const dz = [0, 0, 0, 0, 1, -1]

  bfs()

  let answer = -1
  outer: for (let i = 0; i < h; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < m; k++) {
        // 하나라도 0이 있으면
        if (tomatos[i][j][k] == 0) {
          answer = -1
          break outer
        }
        if (check[i][j][k] > answer) {
          answer = check[i][j][k]
        }
      }
    }
  }
  console.log(answer)
  function bfs() {
    const q = []

    for (let i = 0; i < h; i++) {
      for (let j = 0; j < n; j++) {
        for (let k = 0; k < m; k++) {
          // 최초 익은 토마토를 q 에 넣어준다.
          if (tomatos[i][j][k] == 1) {
            check[i][j][k] = 0
            q.push([k, j, i])
          }
        }
      }
    }

    while (q.length > 0) {
      const [nowX, nowY, nowZ] = q.shift()
      for (let i = 0; i < 6; i++) {
        const nx = dx[i] + nowX,
          ny = dy[i] + nowY,
          nz = dz[i] + nowZ

        // 범위체크
        if (nx < 0 || nx >= m || ny < 0 || ny >= n || nz < 0 || nz >= h) continue

        // 아직 안 익었으면
        if (tomatos[nz][ny][nx] == 0 && check[nz][ny][nx] == -1) {
          tomatos[nz][ny][nx] = 1
          check[nz][ny][nx] = check[nowZ][nowY][nowX] + 1
          // console.log("new", nx, ny, nz, check[nz][ny][nx])
          q.push([nx, ny, nz])
        }
      }
    }
  }
}

// 저장될 때부터 모든 토마토가 익어있는 상태이면 0을 출력해야 하고,
// 토마토가 모두 익지는 못하는 상황이면 -1을 출력해야 한다.

// solution(`5 3 1
// 0 -1 0 0 0
// -1 -1 0 1 1
// 0 0 0 1 1`)

// solution(`5 3 2
// 0 0 0 0 0
// 0 0 0 0 0
// 0 0 0 0 0
// 0 0 0 0 0
// 0 0 1 0 0
// 0 0 0 0 0`)

// solution(`4 3 2
// 1 1 1 1
// 1 1 1 1
// 1 1 1 1
// 1 1 1 1
// -1 -1 -1 -1
// 1 1 1 -1`)

// solution(`5 3 2
// 0 -1 0 0 0
// -1 -1 0 1 1
// 0 0 0 1 1
// 0 0 0 0 0
// 0 0 0 0 0
// 0 0 0 0 0`)

// solution(`4 3 2
// 1 1 1 1
// 1 1 1 1
// 1 1 1 1
// 1 1 1 1
// -1 -1 -1 -1
// 0 1 1 -1`)

solution(`5 3 1
0 0 0 0 0
0 1 0 1 0
0 0 0 0 0`)
// answer : 2

// (1,1,0) (3,1,0) 동시에 익도록 어떻게? => bfs 함수를 시작할 때 익은 토마토를 q 배열에 바로 넣어주면 된다.
// ! 시간 초과 해결 못함
