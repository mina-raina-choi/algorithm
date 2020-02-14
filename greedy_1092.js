function solution(inputstring) {
  const inputs = inputstring.split("\n")

  const n = Number(inputs[0])
  const cranes = inputs[1]
    .split(" ")
    .map(a => +a)
    .sort((a, b) => b - a)

  const box = Number(inputs[2])

  const boxes = inputs[3]
    .split(" ")
    .map(a => +a)
    .sort((a, b) => b - a)

  // 박스 옮겼는지 안 옮겼는지 체크
  const checked = new Array(box).fill(undefined).map(a => false)
  // 각 크레인이 현재 옮겨야하는 박스 번호
  const positions = new Array(n).fill(undefined).map(a => 0)

  let time = 0
  let count = 0

  if (boxes[0] > cranes[0]) {
    time = -1
    count = box
  }

  while (true) {
    if (count === box) {
      break // 박스 다옮김
    }
    // 매 분마다 모든 크레인에 대하여 옮길 수 있는 박스를 선택하여 옮기도록 한다.
    for (let i = 0; i < cranes.length; i++) {
      while (positions[i] < box) {
        if (!checked[positions[i]] && cranes[i] >= boxes[positions[i]]) {
          checked[positions[i]] = true
          positions[i] += 1
          count += 1
          break
        }
        positions[i] += 1
      }
    }
    time += 1
  }
  //   while (boxes.length > 0) {
  //     for (let i = 0; i < cranes.length; i++) {
  //       if (boxes[0] <= cranes[i]) {
  //         boxes.splice(0, 1)
  //       }
  //     }
  //     time++
  //   }
  console.log(time)
}

function solutions2(inputstring) {
  const inputs = inputstring.split("\n")

  const n = Number(inputs[0])
  // 내림차순 정렬
  const cranes = inputs[1]
    .split(" ")
    .map(a => +a)
    .sort((a, b) => b - a)

  const box = Number(inputs[2])

  // 내림차순 정렬
  const boxes = inputs[3]
    .split(" ")
    .map(a => +a)
    .sort((a, b) => b - a)

  // 박스 무게가 크레인이 들 수 있는 무게보다 크면 -1
  if (boxes[0] > cranes[0]) {
    time = -1
    boxes = []
  }

  let time = 0

  while (boxes.length > 0) {
    for (let i = 0; i < cranes.length; i++) {
      if (boxes[0] <= cranes[i]) {
        boxes.splice(0, 1)
      }
    }
    time++
  }
  console.log(time)
}

solutions2(`3
6 8 9
5
2 5 2 4 7`)
