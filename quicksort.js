const quicksort = list => {
  if (list.length < 2) return list
  // 기준점
  const pivot = list[0]
  const left = []
  const right = []

  for (let i = 1; i < list.length; i++) {
    if (pivot > list[i]) {
      left.push(list[i])
    } else {
      right.push(list[i])
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)]
}

const result = quicksort([10, 3, 7, 2])

console.log("result", result)
