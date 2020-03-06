// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(K, M, A) {
  const sum = A.reduce((a, b) => a + b, 0)
  const n = A.length
  let row = 0,
    high = sum,
    mid

  while (row < high) {
    mid = parseInt((row + high) / 2)
    // console.log(row, high)
    // console.log("새로운 mid", mid)
    let kCnt = 0
    let tempSum = 0
    let arrLen = 0

    // mid보다 작은 합으로 구성가능한 갯수 세기
    for (let i = 0; i < A.length; i++) {
      if (A[i] > mid) {
        // 불가능한 최소합, mid 크게, row를 크게
        row = mid + 1
        break
      }

      if (kCnt == K) {
        break
      }

      tempSum += A[i]

      if (tempSum == mid) {
        kCnt++
        arrLen++
        // console.log(A[i])
        tempSum = 0
      } else if (tempSum > mid) {
        kCnt++
        // 이전인덱스로
        i--
        tempSum = 0
      } else {
        // tempSum < mid
        arrLen++
        // console.log(A[i])
        continue
      }
    }

    if (arrLen == n) {
      if (kCnt <= K) {
        // 최소값을 탐색하기 위해서 더 낮은 mid
        high = mid
      } else {
        row = mid + 1
      }
    } else if (arrLen < n) {
      // mid up row up
      row = mid + 1
    } else {
      high = mid
    }
  }

  console.log("answer", row, mid)

  return row
}

solution(3, 5, [2, 1, 5, 1, 2, 2, 2])
solution(1, 10, [4, 3, 2, 5, 6, 6, 4, 9])
solution(2, 10, [4, 4])
solution(1, 10000, [0, 10000, 0])

/* 
핵심아이디어
부분배열의 합이 될 수 있는 최소값 row = 0, 최대값 high = 배열 A의 총합
중간값 mid를 이용해서
mid를 수열의 최대합으로 하는 부분수열을 k 개 만들 수 있는지 체크한다.

만약에 
k만큼 만들 수 있거나, k보다 적게 만들면
mid를 작게해봐야함 -> high를 줄여야함
 */
