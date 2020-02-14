function insertionsort(data) {
  const len = data.length
  for (let i = 1; i < len; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (data[j] > data[j + 1]) {
        //swap
        const temp = data[j]
        data[j] = data[j + 1]
        data[j + 1] = temp
      } else {
        break
      }
    }
  }
  return data
}

const sorted = insertionsort([3, 1, 2])
console.log(sorted)
