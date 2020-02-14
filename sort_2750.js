function solution(params) {
  const input = params.split("\n").map(a => +a)
  const n = input.shift()
  // 버블정렬 : 인전합 두 요소 비교
  for (let i = 0; i < n - 1; i++) {
    let changed = false
    for (let j = 0; j < n - 1 - i; j++) {
      if (input[j] > input[j + 1]) {
        const temp = input[j]
        input[j] = input[j + 1]
        input[j + 1] = temp
        changed = true
      }
    }
    // 이미 정렬 끝
    if (!changed) break
  }

  input.forEach(a => console.log(a))
}

function solution2(params) {
  const input = params.split("\n").map(a => +a)
  const n = input.shift()
  const nums = input.sort((a, b) => a - b)
  nums.sort((a, b) => a - b)
  nums.forEach(a => console.log(a))
}

function solution3(params) {
  const input = params.split("\n").map(a => +a)
  const len = input.shift()
  for (let i = 0; i < len; i++) {
    let stand = i,
      lowest = i
    for (let j = i + 1; j < len; j++) {
      if (input[j] < input[lowest]) {
        lowest = j
      }
    }

    // swap
    const temp = input[stand]
    input[stand] = input[lowest]
    input[lowest] = temp
  }

  //   console.log(input)
  input.forEach(a => console.log(a))
}

// 오름차순 정렬
solution3(`5
5
2
3
4
1`)

// solution(`2
// 2
// 11`)

// selectionSort([5, 2, 3, 4, 1])

// 선택정렬 : 최소값을 선택!해서 정렬한다
function selectionSort(array) {
  const len = array.length
  for (let i = 0; i < len - 1; i++) {
    let stand = i,
      lowest = i
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[lowest]) {
        lowest = j
      }
    }

    // swap
    const temp = array[stand]
    array[stand] = array[lowest]
    array[lowest] = temp
  }

  console.log(array)
}

// 삽입정렬 : 특정위치에 삽입해서 정렬한다.
// 2번째 인덱스부터 탐색
function insertSort(array) {
  const len = array.length
  for (let i = 1; i < len; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (array[j + 1] < array[j]) {
        // swap
        const temp = array[j + 1]
        array[j + 1] = array[j]
        array[j] = temp
      } else break
    }
  }
  console.log(array)
}

// insertSort([4, 2, 3, 1, 5])

// const sorted = quickSort([5, 2, 3, 1, 4, 2, 3, 5, 1, 7])
// console.log("sorted", sorted)
// sorted.forEach(a => console.log(a))

// 퀵 정렬 : pivot을 정해서 left, right로 구분. 재귀용법
function quickSort(array) {
  if (array.length < 2) return array

  const pivot = array.shift()
  const left = []
  const right = []
  console.log(pivot)

  for (let i = 0; i < array.length; i++) {
    const a = array[i]
    if (a < pivot) {
      left.push(a)
    } else {
      right.push(a)
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

// 병합정렬 : 길이가 1인 숫자배열로 변환한 후 합친다. 재귀용법
function mergeSortFunc(array) {
  console.log("arr", array, array.length)
  const len = array.length
  if (len == 1) return array
  const mid = parseInt(len / 2)
  const left = mergeSortFunc(array.slice(0, mid))
  const right = mergeSortFunc(array.slice(mid))
  return merge2(left, right)

  function merge2(left, right) {
    const result = []
    while (left.length > 0 && right.length > 0) {
      if (left[0] < right[0]) {
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
    }
    return [...result, ...left, ...right]
  }
  // 값비교해서 합치는
  function merge(left, right) {
    const merged = []
    // 하나하나비교하면서 ....
    let leftIndex = 0,
      rightIndex = 0

    // left, right 둘다
    while (left && leftIndex < left.length && right && rightIndex < right.length) {
      if (left[leftIndex] > right[rightIndex]) {
        merged.push(right[rightIndex])
        rightIndex++
      } else {
        merged.push(left[leftIndex])
        leftIndex++
      }
    }

    // left
    while (left && leftIndex < left.length) {
      merged.push(left[leftIndex])
      leftIndex++
    }
    // right
    while (right && rightIndex < right.length) {
      merged.push(right[rightIndex])
      rightIndex++
    }

    // console.log("merged", merged)
    return merged
  }
}

// const result = mergeSortFunc([5, 2, 3, 1, 4, 2, 3, 5, 1, 7])
// result.forEach(a => console.log(a))
// console.log("result", result)
