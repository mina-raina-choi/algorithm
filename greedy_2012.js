function solution(inputString) {
  const inputs = inputString.split("\n").map(a => +a)

  const n = inputs[0]

  const scores = inputs.slice(1).sort()
  const occupied = new Array(n).fill(null).map(a => false)
  const notMatched = []
  const notMatchedIndex = []
  let dissatisf = 0
  console.log(scores)

  // 처음 등수를 차지하는 사람이 그 등수를 갖는다.
  scores.forEach(element => {
    if (!occupied[element - 1]) {
      occupied[element - 1] = true
    } else {
      // 매치되지 않은 기대등수 모음
      notMatched.push(element)
    }
  })

  occupied.forEach((element, index) => {
    if (!element) {
      // 매치되지 않은 실제 등수 모음
      notMatchedIndex.push(index + 1)
    }
  })

  // 매치되지 않은 것들간의 차이 합
  notMatched.forEach((elem, i) => {
    dissatisf += Math.abs(elem - notMatchedIndex[i])
  })

  console.log(dissatisf)
}

function solution2(inputString) {
  const inputs = inputString.split("\n").map(a => +a)

  const scores = inputs.slice(1).sort()

  let dissatisf = 0

  scores.forEach((elem, i) => {
    dissatisf += Math.abs(elem - i - 1)
  })
  console.log(dissatisf)
}

solution(`5
1
5
3
1
2`)
