"use strict"

// var fs = require("fs")

// var input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .split("\n") // 2

test(`2
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

function test(stringInput) {
  const input = stringInput.split("\n")
  var caseCount = Number(input[0])
  var n = 1

  for (var index = 0; index < caseCount; index++) {
    var conditions = input[n].split(" ").map(function(a) {
      return +a
    })
    n++
    var pairs = input.slice(n, n + conditions[2])
    n = n + conditions[2]
    solution(pairs, conditions[0], conditions[1])
  }
}

function solution(params, maxX, maxY) {
  // input 하나하나를 하나의 node로 보면?
  var input = params.map(function(a) {
    return a.split(" ").map(function(a) {
      return +a
    })
  })
  var count = 0
  var visited = new Array(maxX).fill(null).map(function(a) {
    return new Array(maxY).fill(false)
  })
  var array = new Array(maxX).fill(null).map(function(a) {
    return new Array(maxY).fill(0)
  })

  for (var i = 0; i < input.length; i++) {
    var nx = input[i][0],
      ny = input[i][1]
    array[nx][ny] = 1
  }

  for (var _i = 0; _i < array.length; _i++) {
    for (var j = 0; j < array[_i].length; j++) {
      if (array[_i][j] && !visited[_i][j]) {
        count++
        dfs([_i, j], visited, maxX, maxY, array)
      }
    }
  }

  console.log(count)
}

function dfs(node, visited, maxX, maxY, array) {
  var x = node[0]
  var y = node[1]
  visited[x][y] = true
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ]

  for (var _index = 0; _index < directions.length; _index++) {
    var element = directions[_index]
    var nx = x + element[0]
    var ny = y + element[1] //좌표범위

    if (nx < 0 || nx >= maxX || ny < 0 || ny >= maxY) continue

    if (array[nx][ny] && !visited[nx][ny]) {
      dfs([nx, ny], visited, maxX, maxY, array)
    }
  }
}
