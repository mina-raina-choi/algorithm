function solution(inputString) {
  const input = inputString.split("\n")
  const conditions = input[0].split(" ")
  const r = Number(conditions[0])
  const c = Number(conditions[1])

  var visited = new Array(r).fill(null).map(function(a) {
    return new Array(c).fill(false)
  })

  const pairs = input.splice(1)
  const alphaVisited = []

  let result = 1
  let count = 1

  dfs(0, 0, count)

  console.log(result)

  function dfs(x, y, count) {
    alphaVisited.push(pairs[x][y])
    visited[x][y] = true

    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0]
    ]

    for (var i = 0; i < 4; i++) {
      var elem = directions[i]
      var nx = x + elem[0]
      var ny = y + elem[1] //좌표범위

      if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue

      const item = pairs[nx][ny]
      const index = alphaVisited.indexOf(item)
      // alphaVisited에 없으면 push
      if (!visited[nx][ny] && index < 0) {
        dfs(nx, ny, count + 1)
        result = Math.max(count + 1, result)
        // 방문리스트에서 제거해주는게 중요
        alphaVisited.splice(index, 1)
        visited[nx][ny] = false
      }
    }
  }
}

solution2(`10 10
ASWERHGCFH
QWERHDLKDG
ZKFOWOHKRK
SALTPWOKSS
BMDLKLKDKF
ALSKEMFLFQ
GMHMBPTIYU
DMNKJZKQLF
HKFKGLKEOL
OTOJKNKRMW`)

solution2(`2 4
CAAB
ADCB`)

// 시간초과가 뜨네

// 이동경로를 문자열로 처리를 하면 해결이 간단하다.

function solution2(inputString) {
  const input = inputString.split("\n")
  const conditions = input[0].split(" ")
  const r = Number(conditions[0])
  const c = Number(conditions[1])

  const array = input.splice(1)
  let result = 0

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ]

  function bfs(x, y) {
    // 동일한 경우는 한번만 체크하기 위해서 자료형 Set를 쓴다.
    const q = new Set()
    // 값으로 중복체크를 하기 위해서 string형으로 넣어준다.
    q.add([x, y, array[x][y]].toString())
    while (q.size > 0) {
      let items = q.values()
      const elem = items.next()
      const arr = elem.value.split(",")
      // 큐에서 제거
      q.delete(elem.value)
      const x = arr[0],
        y = arr[1],
        item = arr[2]

      result = Math.max(result, item.length)

      for (let i = 0; i < 4; i++) {
        const elem = directions[i]
        const nx = Number(x) + elem[0]
        const ny = Number(y) + elem[1]

        // 이동할 수 있는 위치이면서 새로운 알파벳
        if (nx >= 0 && nx < r && ny >= 0 && ny < c && item.indexOf(array[nx][ny]) < 0) {
          // nx, ny, item+array[nx][ny]가 모두 동일하면 추가하지 않도록
          q.add([nx, ny, item + array[nx][ny]].toString())
        }
      }
    }
  }

  bfs(0, 0)

  console.log(result)
}

// 시간초과
// => q를 일반배열이 아니라 중복을 허용하지 않는 Set자료형을 쓰고
// 좌표 x, y, value를 배열값이 아니라 문자열값으로 넣어준다. 값비교를 할수 잇게
