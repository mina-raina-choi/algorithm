// function solution(params, maxX, maxY) {
//   // input 하나하나를 하나의 node로 보면?
//   const input = params.split("\n").map(a => a.split(" ").map(a => +a))

//   let count = 0
//   let visited = new Array(maxX).fill(null).map(a => new Array(maxY).fill(false))
//   let array = new Array(maxX).fill(null).map(a => new Array(maxY).fill(0))

//   for (let i = 0; i < input.length; i++) {
//     const nx = input[i][0],
//       ny = input[i][1]
//     array[nx][ny] = 1
//   }

//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//       if (array[i][j] && !visited[i][j]) {
//         count++
//         dfs([i, j], visited, maxX, maxY, array)
//       }
//     }
//   }

//   console.log("count", count)

//   let q = []
//   let visited = []

//   while (inputLen > 0) {
//     q.push(input[input.length - inputLen])
//     count++
//     while (q.length > 0) {
//       const now_pos = q.shift()
//       visited.push(now_pos)

//       inputLen--

//       const next_pos_list = [
//         [now_pos[0] - 1, now_pos[1]],
//         [now_pos[0] + 1, now_pos[1]],
//         [now_pos[0], now_pos[1] - 1],
//         [now_pos[0], now_pos[1] + 1]
//       ]

//       next_pos_list.forEach(element => {
//         if (element[0] >= 0 && element[0] < maxX && element[1] >= 0 && element[1] < maxY) {
//           if (
//             isIncluded(input, element) &&
//             !isIncluded(visited, element) &&
//             !isIncluded(q, element)
//           ) {
//             q.push(element)
//           }
//         }
//       })
//     }
//   }
//   console.log(count)
// }

// function isIncluded(array, compairElement) {
//   return !array.every(element => JSON.stringify(element) != JSON.stringify(compairElement))
// }

// function dfs(node, visited, maxX, maxY, array) {
//   const x = node[0]
//   const y = node[1]

//   visited[x][y] = true
//   directions = [
//     [0, 1],
//     [0, -1],
//     [1, 0],
//     [-1, 0]
//   ]
//   for (let index = 0; index < directions.length; index++) {
//     const element = directions[index]
//     let nx = x + element[0]
//     let ny = y + element[1]
//     //좌표범위
//     if (nx < 0 || nx >= maxX || ny < 0 || ny >= maxY) continue
//     if (array[nx][ny] && !visited[nx][ny]) {
//       dfs([nx, ny], visited, maxX, maxY, array)
//     }
//   }
// }

// // 10 8 17
// solution(`5 5`, 10, 10)

// function test(inputString) {
//   var input = inputString.split("\n")
//   // 2
//   const caseCount = Number(input[0])
//   let n = 1

//   for (let index = 0; index < caseCount; index++) {
//     const conditions = input[n].split(" ").map(function(a) {
//       return +a
//     })
//     n++
//     const pairs = input.slice(n, n + conditions[2])
//     n = n + conditions[2]
//     solution(pairs, conditions[0], conditions[1])
//   }

//   function solution(params, maxX, maxY) {
//     // input 하나하나를 하나의 node로 보면?
//     var input = params.map(function(a) {
//       return a.split(" ").map(function(a) {
//         return +a
//       })
//     })
//     var inputLen = input.length
//     var count = 0
//     var q = []
//     var visited = []

//     while (inputLen > 0) {
//       q.push(input[input.length - inputLen])
//       count++

//       while (q.length > 0) {
//         var now_pos = q.shift()
//         visited.push(now_pos)
//         inputLen--
//         var next_pos_list = [
//           [now_pos[0] - 1, now_pos[1]],
//           [now_pos[0] + 1, now_pos[1]],
//           [now_pos[0], now_pos[1] - 1],
//           [now_pos[0], now_pos[1] + 1]
//         ]
//         next_pos_list.forEach(function(element) {
//           if (element[0] >= 0 && element[0] < maxX && element[1] >= 0 && element[1] < maxY) {
//             if (
//               isIncluded(input, element) &&
//               !isIncluded(visited, element) &&
//               !isIncluded(q, element)
//             ) {
//               q.push(element)
//             }
//           }
//         })
//       }
//     }

//     console.log(count)
//   }

//   function isIncluded(array, compairElement) {
//     return !array.every(function(element) {
//       return JSON.stringify(element) != JSON.stringify(compairElement)
//     })
//   }
// }

// test(`2
// 10 8 17
// 0 0
// 1 0
// 1 1
// 4 2
// 4 3
// 4 5
// 2 4
// 3 4
// 7 4
// 8 4
// 9 4
// 7 5
// 8 5
// 9 5
// 7 6
// 8 6
// 9 6
// 10 10 1
// 5 5`)

function test(inputString) {
  var input = inputString.split("\n")
  // 2
  const caseCount = Number(input[0])
  let n = 1

  for (let index = 0; index < caseCount; index++) {
    const conditions = input[n].split(" ").map(function(a) {
      return +a
    })
    n++
    const pairs = input.slice(n, n + conditions[2])
    n = n + conditions[2]
    solution(pairs, conditions[0], conditions[1])
  }

  function solution(params, maxX, maxY) {
    // input 하나하나를 하나의 node로 보면?
    var input = params.map(function(a) {
      return a.split(" ").map(function(a) {
        return +a
      })
    })
    var inputLen = input.length
    var count = 0
    var q = []
    var visited = []

    while (inputLen > 0) {
      q.push(input[input.length - inputLen])
      count++

      while (q.length > 0) {
        var now_pos = q.shift()
        visited.push(now_pos)
        inputLen--
        var next_pos_list = [
          [now_pos[0] - 1, now_pos[1]],
          [now_pos[0] + 1, now_pos[1]],
          [now_pos[0], now_pos[1] - 1],
          [now_pos[0], now_pos[1] + 1]
        ]
        next_pos_list.forEach(function(element) {
          if (element[0] >= 0 && element[0] < maxX && element[1] >= 0 && element[1] < maxY) {
            if (
              isIncluded(input, element) &&
              !isIncluded(visited, element) &&
              !isIncluded(q, element)
            ) {
              q.push(element)
            }
          }
        })
      }
    }

    console.log(count)
  }

  function isIncluded(array, compairElement) {
    return !array.every(function(element) {
      return JSON.stringify(element) != JSON.stringify(compairElement)
    })
  }
}

solution(`2
10 8 17
0 0
1 0
1 1
4 2
4 3
4 5
2 4
3 4
7 4
8 4
9 4
7 5
8 5
9 5
7 6
8 6
9 6
10 10 1
5 5`)

// ! 모르겟다 다시
function solution(params) {
  var input = params.split("\n")
  // 2
  const caseCount = Number(input.shift())

  for (let i = 0; i < caseCount; i++) {
    const elem = input
      .shift()
      .split(" ")
      .map(a => +a)
    const m = elem[0]
    const n = elem[1]
    const k = elem[2]
    const visited = new Array(m).fill(null).map(a => new Array(n).fill(false))
    const positions = new Array(m).fill(null).map(a => new Array(n).fill(false))

    let count = 0
    for (let j = 0; j < k; j++) {
      const node = input
        .shift()
        .split(" ")
        .map(a => +a)
      // console.log(node)
      positions[node[0]][node[1]] = true
      bfs([0, 0], m, n, visited, positions)
    }
  }

  function bfs(startNode, m, n, visited, positions) {
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1]
    ]

    count
    const q = [startNode]
    visited[startNode[0]][startNode[1]] = true
    while (q.length > 0) {
      const node = q.shift()
      for (let i = 0; i < 4; i++) {
        const chage = directions[i]
        const nx = node[0] + chage[0]
        const ny = node[1] + chage[1]
        // 범위내에, 아직 탐색안했으면
        if (nx >= 0 && nx < m && ny >= 0 && ny < n && !visited[nx][ny] && positions[nx][ny]) {
          q.push([nx, ny])
          visited[nx][ny] = true
        }
      }
    }
  }
}
