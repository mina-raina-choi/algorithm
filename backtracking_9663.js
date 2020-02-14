function solution(inputString) {
  const n = parseInt(inputString)
  const array = new Array(n).fill(null).map(a => 0)
  console.log(array)
  let result = 0

  dfs(0)
  console.log(result)

  // x번째 행에 놓은 퀸에 대해서 검증
  function check(x) {
    // 이전 행에서 놓았던 모든 퀸들을 확인
    for (let i = 0; i < x; i++) {
      // 위쪽 or 대각선 확인
      if (array[x] == array[i]) {
        return false
      }

      if (Math.abs(array[x] - array[i]) == x - i) {
        return false
      }

      return true
    }
  }

  // x번 째 행에 대해서 처리
  function dfs(x) {
    console.log("dfs", x)
    if (x == n) {
      result++
    } else {
      // x번째 행의 각 열에 퀸을 둔다고 가정
      for (let i = 0; i < n; i++) {
        array[x] = i
        if (check(x)) {
          dfs(x + 1)
        }
      }
    }
  }
}

solution(8)

// 퀸이 움직일 수 있는 범위 : 전후좌우, 대각선
// ! 7개 밖에 놓을 수 없는데? 어떻게 8개를 놓지?

// 백트래킹문제란, 가능한 경우를 전부 탐색하면서 더이상 나아갈 수 없는 경우를 만났을때, 다시 다른 경우를 탐색하는 문제.
// 보통 dfs/bfs와 같은 맥락
// 대표적인 백트래킹 유형이 있다.
// 보통 백트래킹은 dfs로 푸는게 풀이가 간단한 경우가 많다.

// 각 행을 차례대로 확인하면서, 각 열에 퀸을 놓는 모든 경우를 고려
// -> 위쪽 행을 모두 확인하면서 현재 위치에 놓을 수 있는지 확인!

// ! 이해가 안됨.
