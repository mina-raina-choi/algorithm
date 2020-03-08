function solution(A, B) {
  // 2개 스택이용
  const upStream = []
  const downStream = []
  const n = B.length
  let direction

  for (let i = n - 1; i >= 0; i--) {
    direction = B[i]
    if (direction == 1) {
      downStream.push(A[i])
      // upstream 것과 비교
      while (upStream.length > 0) {
        const popped = upStream[upStream.length - 1]
        if (A[i] > popped) {
          upStream.pop()
          continue
        } else {
          console.log()
          downStream.pop()
          break
        }
      }
    } else {
      upStream.push(A[i])
    }
  }
  console.log(upStream, downStream)
  return upStream.length + downStream.length
}

solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0])
solution([4, 3, 2, 6, 5], [0, 1, 0, 1, 0])
solution([4], [0])
solution([1], [1])
solution([0, 1], [1, 1])

// ! 50%만 맞네
// https://app.codility.com/demo/results/trainingJAURJ4-JFX/

// 2개의 스택이용
// https://app.codility.com/demo/results/trainingKETZAX-GEP/
