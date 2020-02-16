function solution(params) {
  const input = parseInt(params.split("\n"))
  const MAX = 1001
  const visited = new Array(MAX).fill(null).map(a => new Array(MAX).fill(false))
  bfs([1, 0, 0])

  function bfs(start) {
    const q = [start]
    while (q.length > 0) {
      let [emogiCnt, copiedCnt, timeCnt] = q.shift()
      visited[emogiCnt][copiedCnt] = true
      if (emogiCnt == input) {
        console.log(timeCnt)
        return
      }
      let newNode = [0, 0]
      for (let i = 0; i < 3; i++) {
        if (i == 0) {
          // 복사
          newNode = [emogiCnt, emogiCnt, timeCnt + 1]
        } else if (i == 1) {
          // 붙여넣기
          newNode = [emogiCnt + copiedCnt, copiedCnt, timeCnt + 1]
        } else {
          // 화면에 있는 1개 삭제
          newNode = [emogiCnt - 1 > 0 ? emogiCnt - 1 : 0, copiedCnt, timeCnt + 1]
        }
        // console.log("newNode", newNode)

        if (newNode[0] < MAX && !visited[newNode[0]][newNode[1]] && newNode[0] > 0) {
          q.push(newNode)
          visited[newNode[0]][newNode[1]] = true
        }
      }
    }
  }
}

solution(`2`)
//
solution(`4`)

solution(`6`)

solution(`997`)

// [화면임티갯수, copied 개수, time]
// ! copied를 어디에 저장해두지?
