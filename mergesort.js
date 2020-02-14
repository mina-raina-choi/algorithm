const split = list => {
  if (list.length == 1) return list
  const mid = parseInt(list.length / 2)
  const left = list.slice(0, mid)
  const right = list.slice(mid)
  console.log(left, right)
}

const mergesplit = list => {
  if (list.length == 1) return list
  const mid = parseInt(list.length / 2)
  const left = mergesplit(list.slice(0, mid))
  const right = mergesplit(list.slice(mid))
  console.log(left, right)
  return merge(left, right)
}

const merge = (left, right) => {
  const merged = []
  let leftIndex = 0,
    rightIndex = 0
  // case 1 : left, right 남아있을 때,
  while (left.length > leftIndex && right.length > rightIndex) {
    if (left[leftIndex] > right[rightIndex]) {
      merged.push(right[rightIndex])
      rightIndex++
    } else {
      merged.push(left[leftIndex])
      leftIndex++
    }
  }

  // case 2 : left 만 남이있을 때
  while (left.length > leftIndex) {
    merged.push(left[leftIndex])
    leftIndex++
  }

  // case 3 : right 만 남아있을 때
  while (right.length > rightIndex) {
    merged.push(right[rightIndex])
    rightIndex++
  }

  console.log("merged", merged)

  return merged
}

mergesplit([6, 1, 4, 8, 89, 2])
