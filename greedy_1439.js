function solution(input) {
  const items = { 0: 0, 1: 0 }

  for (let i = 1; i < input.length + 1; i++) {
    const element = input[i] ? input[i] : ""
    if (input[i - 1] != element) {
      items[input[i - 1]] += 1
      // input[i - 1] = element
    }
  }
  console.log(items)
  console.log(Math.min(...Object.values(items)))
}

solution(`0001100`)

// 문자열을 0, 1로 만든다.
// 0, 1별로 연속된 문자열을 갯수를 센다

function solution2(input) {
  let count0 = 0
  let count1 = 0

  if (input[0] == "1") {
    count0 += 1
  } else {
    count1 += 1
  }

  for (let i = 1; i < input.length; i++) {
    if (input[i] != input[i - 1]) {
      if (input[i] == "1") {
        count0 += 1
      } else {
        count1 += 1
      }
    }
  }
  console.log(count0, count1)
  console.log(Math.min(count0, count1))
}

// 그리디알고리즘은 문제를 풀기위한 기본적인 알고리즘을 떠올리면 그대로 코드로 구현하면 해결되는 문제가 많다
