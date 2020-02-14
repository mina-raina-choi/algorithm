function selectionsort(data) {
  const len = data.length
  let stand
  for (let i = 0; i < len - 1; i++) {
    stand = i
    let lowest = stand

    // 기준을 제외한 배열중에서 가장 작은 값을 찾는다.
    for (let j = i + 1; j < len; j++) {
      if (data[lowest] > data[j]) {
        lowest = j
      }
    }
    const temp = data[stand]
    data[stand] = data[lowest]
    data[lowest] = temp
  }
  return data
}

var sortList = function(array) {
  const len = array.length

  for (let i = 0; i < len - 1; i++) {
    let stand = i
    let lowest = i
    console.log(stand, lowest)
    for (let j = i + 1; j < len; j++) {
      if (array[lowest] > array[j]) {
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

const sorted = sortList([34, 23, 6, 2, 3, 7, 8, 12])
console.log(sorted)
