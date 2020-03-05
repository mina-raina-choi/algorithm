function solution(params) {
  let input = params.split("\n")
  const n = parseInt(input.shift())
  input = input[0].split(" ").map(a => +a)

  let count = 0
  // 버블정렬 : 인전합 두 요소 비교
  for (let i = 0; i < n - 1; i++) {
    let changed = false
    for (let j = 0; j < n - 1 - i; j++) {
      if (input[j] > input[j + 1]) {
        ;[input[j], input[j + 1]] = [input[j + 1], input[j]]
        changed = true
        count++
      }
    }
    // 이미 정렬 끝
    if (!changed) break
  }

  console.log(count)
}

// -> 버블정렬로 풀면 시간초과

solution2(`3
3 2 1`)
// 3

solution2(`5
5 4 3 2 1`)
// 10

solution2(`3
5 5 5`)
// 0

// https://justicehui.github.io/ps/2019/04/23/BOJ1517/ 이거 참고...

// 로직이 맞는 거 같은데 왜... 30%에서 런타임에러
function solution2(params) {
  let input = params.split("\n")
  const n = parseInt(input.shift())
  input = input[0].split(" ").map(a => +a)
  let cnt = 0

  divide(input)

  console.log(cnt)
  // 1. divide
  // 2. merge

  function divide(array) {
    if (array.length == 1) return array
    const mid = parseInt(array.length / 2)
    const left = divide(array.slice(0, mid)),
      right = divide(array.slice(mid))
    return merge(left, right)
  }

  function merge(left, right) {
    let i = 0,
      j = 0

    const merged = []
    // left, right 둘다
    while (left.length > i && right.length > j) {
      if (left[i] > right[j]) {
        // 왼쪽에 남아있는 원소들의 개수
        cnt += left.length - i
        merged.push(right[j])
        j++
      } else {
        merged.push(left[i])
        i++
      }
    }

    // left, right는 이미 정렬된 상태

    if (left.length > i) merged.push(...left.slice(i))
    if (right.length > j) merged.push(...right.slice(j))

    return merged
  }
}

// 통과된 답변
function solution2(params) {
  let input = params.split("\n")
  const n = parseInt(input.shift())
  input = input[0].split(" ").map(a => +a)

  const merged = []
  const array = [...input]
  let cnt = solve(0, n - 1)
  console.log(cnt)

  // swap 개수 세는 함수
  function solve(start, end) {
    // console.log("solve", start, end)
    if (start == end) return 0
    let mid = parseInt((start + end) / 2)
    let ans = solve(start, mid) + solve(mid + 1, end)

    let i = start
    let j = mid + 1
    let k = 0

    while (i <= mid || j <= end) {
      if (i <= mid && (j > end || array[i] <= array[j])) {
        merged[k++] = array[i++]
      } else {
        // 왼쪽 배열의 남아있는 원소들의 개수
        ans += mid - i + 1
        merged[k++] = array[j++]
      }
    }
    for (let i = start; i <= end; i++) {
      array[i] = merged[i - start]
    }
    // console.log("merged", merged)
    return ans
  }
}
