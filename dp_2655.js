function solution(stringInput) {
  var input = stringInput.trim().split("\n")
  const n = parseInt(input[0])

  // ! 계산을 쉽게하기 위해서 0으로 채워주기
  const boxes = [[0, 0, 0, 0]]
  for (let i = 1; i < input.length; i++) {
    const temp = input[i].split(" ")
    temp.push(i)
    boxes.push(temp.map(a => +a))
  }
  //   console.log(boxes)
  // 넓이, 높이, 무게

  boxes.sort((a, b) => a[0] - b[0])
  // n개의 박스로 만들 수 있는 최대높이
  const optHeight = new Array(n + 1).fill(0)
  for (let i = 1; i < n + 1; i++) {
    for (let j = 0; j < i; j++) {
      if (boxes[i][2] > boxes[j][2]) {
        optHeight[i] = Math.max(optHeight[i], optHeight[j] + boxes[i][1])
      }
    }
  }

  let max = Math.max(...optHeight)
  let index = optHeight.length
  const answer = []
  while (index) {
    if (max === optHeight[index]) {
      console.log(max, optHeight[index])
      answer.push(boxes[index][3])
      max -= boxes[index][1]
    }
    index--
  }
  //   console.log(answer.reverse())
  answer.reverse()
  console.log(answer.length)
  answer.forEach(a => {
    console.log(a)
  })
}

// solution(`5
// 25 3 4
// 4 4 6
// 9 2 3
// 16 2 5
// 1 5 2`)

function solution2(stringInput) {
  var input = stringInput.trim().split("\n")
  const n = parseInt(input[0])
  const boxes = input.slice(1).map(a => a.split(" ").map(a => +a))
  boxes.forEach((a, i) => a.push(i + 1))
  boxes.sort((a, b) => a[0] - b[0])

  // n개 상자를 쌓았을 때의 최대높이
  const dp = new Array(n).fill(0)

  // 각 상자의 높이로 초기화
  for (let i = 0; i < n; i++) {
    dp[i] = boxes[i][1]
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      // 무게가 더 크면
      if (boxes[j][2] < boxes[i][2]) {
        dp[i] = Math.max(dp[i], boxes[i][1] + dp[j])
      }
    }
  }

  let max = Math.max(...dp)
  let answer = []
  for (let i = dp.length - 1; i >= 0; i--) {
    if (max == dp[i]) {
      answer.push(boxes[i][3])
      max -= boxes[i][1]
    }
  }
  // console.log("answer", answer)
  console.log(answer.length)
  answer.reverse()
  answer.forEach(a => console.log(a))
}

solution2(`5
25 3 4
4 4 6
9 2 3
16 2 5
1 5 2`)
