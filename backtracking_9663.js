solution(4)

// 퀸이 움직일 수 있는 범위 : 전후좌우, 대각선

// 백트래킹문제란, 가능한 경우를 전부 탐색하면서 더이상 나아갈 수 없는 경우를 만났을때, 다시 다른 경우를 탐색하는 문제.
// 보통 dfs/bfs와 같은 맥락
// 대표적인 백트래킹 유형이 있다.
// 보통 백트래킹은 dfs로 푸는게 풀이가 간단한 경우가 많다.

// 각 행을 차례대로 확인하면서, 각 열에 퀸을 놓는 모든 경우를 고려
// -> 위쪽 행을 모두 확인하면서 현재 위치에 놓을 수 있는지 확인!

// 핵심 아이디어는 한 줄씩 검증! 일일이 각 행마다 넣어보면서
function solution(params) {
  const n = parseInt(params)
  let count = 0
  // array[i] 는 i 열에 퀸을 놓은 위치
  const array = new Array(n).fill(0)

  dfs(0)
  console.log(count)

  function dfs(x) {
    // 퀸을 n개까지 다 놓았다면 count를 한다.
    if (x == n) {
      console.log(array.join(" "))
      count++
    } else {
      // 한 줄에 0~n까지 놓아본다
      for (let i = 0; i < n; i++) {
        array[x] = i
        // 만약 x위치에 퀸을 놓을 수 있다면 다음 열로 넘어간다.
        if (check(x)) {
          dfs(x + 1)
        }
      }
    }
  }

  // x 우ㅣ치에 퀸을 놓을 수 있는지 없는지 확인
  function check(x) {
    // x 이전의 열들을 모두 검사
    for (let i = 0; i < x; i++) {
      // 같은 행 X
      if (array[x] == array[i]) {
        return false
      }
      // 대각선 X
      if (Math.abs(array[x] - array[i]) == x - i) {
        return false
      }
    }
    return true
  }
}
