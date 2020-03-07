function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())
  const card = input
    .shift()
    .split(" ")
    .map(a => +a)
    .sort((a, b) => a - b)

  const m = parseInt(input.shift())
  const nums = input
    .shift()
    .split(" ")
    .map(a => +a)

  let cnt = new Array(m).fill(0)

  for (let i = 0; i < nums.length; i++) {
    const findItem = nums[i]
    const temp = findHighBound(findItem, card) - findLowerBound(findItem, card)
    // console.log("temp", temp)
    cnt[i] = temp
  }

  console.log(cnt.join(" "))

  // value와 같거나 처음으로 큰 값 : value 값으로 시작하는 제일 작은 값
  function findLowerBound(value, array) {
    let low = 0,
      high = array.length,
      mid = 0
    while (low < high) {
      mid = parseInt((low + high) / 2)
      if (value <= array[mid]) {
        high = mid
      } else {
        low = mid + 1
      }
    }
    // console.log("lowerbound", mid)
    return low
  }

  // value보다 큰 값 중에 제일 작은 값
  function findHighBound(value, array) {
    let low = 0,
      high = array.length,
      mid = 0
    while (low < high) {
      mid = parseInt((low + high) / 2)
      if (value >= array[mid]) {
        low = mid + 1
      } else {
        high = mid
      }
    }
    // console.log("highbound", mid)
    return low
  }
}

solution(`10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`)

// lower bound, upper bound
// lower bound는 주어진 값보다 같거나 큰 값이 처음으로 나오는걸 리턴해야 하는데 만약 lower_bound(9) 면 주어진 배열크기 만큼 리턴되어야 하기 때문에 high = array.length -1 이 아니고 high = array.length로 지정
