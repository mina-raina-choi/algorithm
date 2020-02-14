function bubblesort(data) {
  const len = data.length
  for (let i = 0; i < len - 1; i++) {
    let isChanged = false
    // 앞, 뒤 데이터 비교하는 과정이 len-1-i 번만큼 반복
    for (let j = 0; j < len - 1 - i; j++) {
      if (data[j] > data[j + 1]) {
        // swap
        const temp = data[j]
        data[j] = data[j + 1]
        data[j + 1] = temp

        isChanged = true
      }
    }
    // swap이 한번도 일어나지 않았다면 이미 정렬된 상태
    if (!isChanged) {
      break
    }
  }
  return data
}

const sorted = bubblesort([34, 23, 6, 2, 3, 7, 8, 12])
console.log(sorted)
/* [
    2,  3,  6,  7,
    8, 12, 23, 34
  ] */
