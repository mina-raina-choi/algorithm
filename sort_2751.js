function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())
  const nums = input.map(a => +a)

  const merged = []
  divide(nums, 0, n - 1)
  let result = ""
  merged.forEach((a, i) => (result += `${a}${i != n - 1 ? "\n" : ""}`))
  console.log(result)

  function divide(array, start, end) {
    if (start < end) {
      const mid = parseInt((start + end) / 2)
      divide(array, start, mid)
      divide(array, mid + 1, end)
      merge(array, start, mid, end)
    }
  }
  function merge(a, start, mid, end) {
    // console.log(merged, start, mid, end)
    let i = start,
      k = start,
      j = mid + 1

    while (i <= mid && j <= end) {
      if (a[i] < a[j]) {
        merged[k] = a[i]
        i++
      } else {
        merged[k] = a[j]
        j++
      }
      k++
    }

    if (i > mid) {
      for (let q = j; q <= end; q++) {
        merged[k] = a[q]
        k++
      }
    } else {
      for (let q = i; q <= mid; q++) {
        merged[k] = a[q]
        k++
      }
    }

    for (let q = start; q <= end; q++) {
      a[q] = merged[q]
    }
  }

  function merge2(left, right) {
    let l = 0,
      r = 0,
      i = 0
    while (left && left.length > l && right && right.length > r) {
      if (left[l] < right[r]) {
        merged[i] = left[l]
        i++
        l++
      } else {
        merged[i] = right[r]
        i++
        r++
      }
    }
    while (left && left.length > l) {
      merged[i] = left[l]
      i++
      l++
    }
    while (right && right.length > r) {
      merged[i] = right[r]
      i++
      r++
    }
  }
}

// 첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000,000)

// -> 병합정렬로하면
// 오름차순 정렬
solution(`5
2
1
3
4
5`)

// ! 병합정렬로 해도 시간초과
// https://www.acmicpc.net/board/view/31887
