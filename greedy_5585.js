function solution(inputString) {
  const total = Number(inputString)
  let change = 1000 - total

  const changes = [500, 100, 50, 10, 5, 1]

  let count = 0

  changes.forEach(element => {
    const currCount = parseInt(change / element)
    change -= currCount * element
    count += currCount
  })
  console.log(count)
}

solution(`380`)

// 가장 기본적인 탐욕알고리즘
// 화폐단위가 큰 것부터 잔돈을 거슬러주면 최적의 해를 구할 수 있다.
