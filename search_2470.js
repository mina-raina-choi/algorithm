function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())

  const liquids = input[0]
    .split(" ")
    .map(a => +a)
    .sort((a, b) => a - b)
  //   console.log(n, liquids)

  let max = Math.abs(liquids[n - 1] - liquids[0]),
    min = Math.abs(liquids[1] - liquids[0]),
    mid = 0
  let result = 0
  let answer = []

  while (min <= max) {
    mid = parseInt((max + min) / 2)

    // 이중반복 10,000,000,000
    for (let i = 0; i < n - 1; i++) {
      for (let j = i; j < n; j++) {
        const diff = Math.abs(liquids[i] - liquids[j])

        if (diff >= mid) {
          // 차이를 줄여야
          if (result < diff) {
            result = diff
            answer = [liquids[i], liquids[j]]
          }
          max = mid - 1
        } else {
          min = mid + 1
        }
        console.log("max, min, mid, diff", max, min, mid, diff)
      }
    }
  }

  console.log(answer.join(" "))
}

// ! 시간초과

solution2(`4
-3 -1 1 10`)
// //정답: -1 1

solution2(`4
-3 1 2 10`)

function solution2(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())

  const liquids = input[0]
    .split(" ")
    .map(a => +a)
    .sort((a, b) => a - b)

  // 2를 더해서 최대한 0에 가깝도록

  let i = 0,
    j = n - 1,
    idx1,
    idx2

  let diff = Infinity

  while (i < j) {
    const sum = liquids[i] + liquids[j]

    if (diff > Math.abs(sum)) {
      diff = Math.abs(sum)
      idx1 = i
      idx2 = j
    }

    if (sum < 0) {
      i += 1
    } else {
      j -= 1
    }
  }

  console.log(liquids[idx1], liquids[idx2])
}

function solution2(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())

  const liquids = input[0]
    .split(" ")
    .map(a => +a)
    .sort((a, b) => a - b)

  let low = 0,
    high = n - 1
  let min = Infinity,
    pair

  // 같으면 안됨
  while (low < high) {
    const sum = liquids[low] + liquids[high]
    // console.log(sum, min)
    if (Math.abs(sum) < min) {
      pair = [liquids[low], liquids[high]]
      min = Math.abs(sum)
    }

    if (sum > 0) {
      // high를 낮춰야함
      high -= 1
    } else {
      low += 1
    }
  }
  console.log(pair.join(" "))
}

solution2(`5
-2 4 -99 -1 98`)
