// ! 단순 탐색
function solution(A, B, C) {
  const n = A.length
  const checked = new Array(n).fill(false)
  let answer = -1

  // 9억번
  for (let i = 0; i <= C.length; i++) {
    const elem = C[i]
    if (checked.every(a => a)) {
      //   console.log(i)
      answer = i
      break
    }
    for (let j = 0; j < n; j++) {
      const first = A[j],
        second = B[j]
      if (checked[j]) continue
      if (first <= elem && second >= elem) {
        // console.log(j)
        checked[j] = true
      }
    }
  }
  console.log(answer)
}

solution([1, 4, 5, 8], [4, 5, 9, 10], [4, 6, 7, 10, 2])
solution([1], [3], [1])
solution([1], [3], [10])

/* 

단순탐색을 하니, 퍼포먼스 테스트에서 모두 탈락
https://app.codility.com/demo/results/trainingZC55T2-F4D/

어디서 시간을 줄일 수 있을까?
어디서 이분탐색을 활용할 수 있을까?


A, B 가운데 index 부터 탐색
만약 A[K] <= C[K] <= B[K] 조건을 통과한다면,

lowerbound, upperbound를 찾는 문제?

*/

function solution(A, B, C) {
  const n = A.length,
    cLen = C.length
  const checked = new Array(n).fill(false)
  let answer = -1

  for (let i = 0; i < cLen; i++) {
    const elem = C[i]

    // elem로 판자를 박을 수 있는 최소 index
    const lowest = findLowest(elem)
    const uppest = findUppest(elem)
    for (let j = lowest; j < uppest; j++) {
      if (checked[j]) continue
      checked[j] = true
    }
    // console.log("lower, upper", lowest, uppest)
    if (checked.every(a => a)) {
      //   console.log(i)
      answer = i + 1
      break
    }
  }

  // elem 로 못을 박을 수 있는 최소 index
  function findLowest(elem) {
    let low = 0,
      high = n,
      mid
    while (low < high) {
      mid = parseInt((low + high) / 2)
      //   console.log("findLowest", low, high, A[mid], B[mid], elem)
      // 조건 0
      if (A[mid] <= elem && B[mid] >= elem) {
        // 더 낮은 값이 있는지 탐색
        high = mid
      } else if (A[mid] > elem) {
        // mid 낮춰야, high 낮춤
        high = mid
      } else {
        low = mid + 1
      }
    }
    return low
  }

  // elem로 박을 수 있는 값 중 최대 값
  function findUppest(elem) {
    let low = 0,
      high = n,
      mid
    while (low < high) {
      mid = parseInt((low + high) / 2)
      //   console.log("findUppest", low, high, A[mid], B[mid], elem)

      if (A[mid] <= elem && B[mid] >= elem) {
        // console.log("조건통과", mid)
        // 더 높은 값이 있는지 탐색
        low = mid + 1
        answer = Math.max(answer, mid)
      } else if (A[mid] > elem) {
        // mid down, high down
        high = mid
      } else {
        low = mid + 1
      }
    }

    return high
  }
  console.log(answer)
  return answer
}

// hhttps://app.codility.com/demo/results/trainingJ5ETZU-QMN/
// 흠...아이디어는 맞는 거 같은데
