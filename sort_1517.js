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
        const temp = input[j]
        input[j] = input[j + 1]
        input[j + 1] = temp
        changed = true
        count++
      }
    }
    // 이미 정렬 끝
    if (!changed) break
  }

  console.log(count)
}

// 병합정렬로 버블sort의 swap이 일어나는 경우를 count
function solution2(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())
  const nums = input[0].split(" ").map(a => +a)

  // console.log(n, nums)
  let count = 0
  const sorted = split(nums)
  console.log(count)
  // length == 1일 때까지
  function split(array) {
    const len = array.length

    if (len == 1) return array
    const mid = parseInt(len / 2)
    const left = split(array.slice(0, mid))
    const right = split(array.slice(mid))
    // console.log("left, right", left, right)
    return merge2(left, right)
  }

  // 합치면서 count++
  function merge(left, right) {
    const result = []
    while (left.length > 0 && right.length > 0) {
      if (left[0] > right[0]) {
        // console.log("change", left, right)
        count += 1
        result.push(right.shift())
      } else {
        result.push(left.shift())
      }
    }
    return [...result, ...left, ...right]
  }

  function merge2(left, right) {
    // console.log("merge2 left", left, "right", right)
    const merged = []
    // 하나하나비교하면서 ....
    let leftIndex = 0,
      rightIndex = 0
    let cnt = 0

    // left, right 둘다
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] > right[rightIndex]) {
        merged.push(right[rightIndex])
        rightIndex++
        cnt++
        // console.log("cnt", cnt, left[leftIndex], right[rightIndex], merged)
      } else {
        merged.push(left[leftIndex])
        leftIndex++
      }
    }

    // left
    while (left && leftIndex < left.length) {
      merged.push(left[leftIndex])
      leftIndex++
      if (merged.length > 2) cnt++
      // console.log("왼쪽 cnt", cnt, left[leftIndex], merged)
    }
    // right
    while (right && rightIndex < right.length) {
      merged.push(right[rightIndex])
      rightIndex++
    }

    count += cnt
    // console.log("merged", merged)
    return merged
  }
}

solution2(`3
3 2 1`)

// solution(`5
// 5 4 3 2 1`)

solution2(`5
5 4 3 2 1`)

// solution2(`3
// 5 5 5`)

// https://justicehui.github.io/ps/2019/04/23/BOJ1517/ 이거 참고...
// ! 실패
