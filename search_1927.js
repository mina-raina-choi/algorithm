class Heap {
  constructor() {
    // 편의를 위해 0은 0으로 채워주고 루트 노드는 this._array[1]에 넣어줬음.
    this._array = [0]
  }

  // 상위노드와 바꿔야하는지 판단하는 함수
  moveUp(insertedIndex) {
    // 첫번째 원소이면 false
    if (insertedIndex <= 1) {
      return false
    } else {
      const parentIndex = parseInt(insertedIndex / 2)
      // 부모노드보다 자식노드가 작으면
      if (this._array[insertedIndex] < this._array[parentIndex]) {
        return true
      } else {
        return false
      }
    }
  }

  insert(data) {
    this._array.push(data)

    let insertedIndex = this._array.length - 1

    // 부모노드와 값 비교
    while (this.moveUp(insertedIndex)) {
      const parentIndex = parseInt(insertedIndex / 2)

      // 부모노드와 바꾸기
      const temp = this._array[insertedIndex]
      this._array[insertedIndex] = this._array[parentIndex]
      this._array[parentIndex] = temp

      // 비교할 노드 인덱스 변경
      insertedIndex = parentIndex
    }

    return true
  }

  moveDown(poppedIndex) {
    const leftChildIndex = poppedIndex * 2
    const rightChildIndex = poppedIndex * 2 + 1

    // 1. 왼쪽 자식노드가 없으면 더이상 내려갈 데가 없다. 끝~~
    if (leftChildIndex >= this._array.length) {
      return false
    }

    // 2. 왼쪽 자식노드는 있고, 오른쪽 자식노드는 없다.
    // 왼쪽노드 비교해서 swap결정
    else if (rightChildIndex >= this._array.length) {
      if (this._array[poppedIndex] > this._array[leftChildIndex]) {
        return true
      } else {
        return false
      }
    }

    // 3. 두 자식노드 둘다 있을 경우,
    // 3-1. 자식노드끼리 먼저 비교, 더 큰 자식노드 찾아서
    // 3-2. 더 큰 자식노드와 부모노드를 비교해서 swap
    else {
      if (this._array[leftChildIndex] > this._array[rightChildIndex]) {
        if (this._array[poppedIndex] > this._array[leftChildIndex]) {
          return true
        } else {
          return false
        }
      } else {
        if (this._array[poppedIndex] > this._array[rightChildIndex]) {
          return true
        } else {
          return false
        }
      }
    }
  }

  /* 보통 삭제는 최상단 노드 (root 노드)를 삭제하는 것이 일반적임
  힙의 용도는 최대값 또는 최소값을 root 노드에 놓아서, 최대값과 최소값을 바로 꺼내 쓸 수 있도록 하는 것임 */
  pop() {
    // 1. 루트 노드를 삭제
    // 2. 다시 트리의 균형을 맞추는 것
    // 가장 마지막에 추가한 노드) 를 root 노드로 이동
    // root 노드의 값이 child node 보다 작을 경우,
    // root 노드의 child node 중 가장 큰 값을 가진 노드와 root 노드 위치를 바꿔주는 작업을 반복함 (swap)

    if (this._array.length <= 1) {
      return 0
    }
    // 편의를 위해 0은 0으로 채워주고 루트 노드는 this._array[1]에 넣어줬음.
    const returnedData = this._array[1]

    // 마지막 노드를 루트노드로 옮기기
    this._array[1] = this._array[this._array.length - 1]
    this._array.splice(this._array.length - 1, 1)

    let poppedIndex = 1

    while (this.moveDown(poppedIndex)) {
      const leftChildIndex = poppedIndex * 2
      const rightChildIndex = poppedIndex * 2 + 1

      if (rightChildIndex >= this._array.length) {
        if (this._array[poppedIndex] > this._array[leftChildIndex]) {
          // swap
          const temp = this._array[poppedIndex]
          this._array[poppedIndex] = this._array[leftChildIndex]
          this._array[leftChildIndex] = temp
          poppedIndex = leftChildIndex
        }
      }

      // 3. 두 자식노드 둘다 있을 경우,
      // 3-1. 자식노드끼리 먼저 비교, 더 큰 자식노드 찾아서
      // 3-2. 더 큰 자식노드와 부모노드를 비교해서 swap
      else {
        if (this._array[leftChildIndex] > this._array[rightChildIndex]) {
          if (this._array[poppedIndex] > this._array[leftChildIndex]) {
            // swap
            const temp = this._array[poppedIndex]
            this._array[poppedIndex] = this._array[leftChildIndex]
            this._array[leftChildIndex] = temp
            poppedIndex = leftChildIndex
          }
        } else {
          if (this._array[poppedIndex] > this._array[rightChildIndex]) {
            // swap
            const temp = this._array[poppedIndex]
            this._array[poppedIndex] = this._array[rightChildIndex]
            this._array[rightChildIndex] = temp
            poppedIndex = rightChildIndex
          }
        }
      }
    }

    return returnedData
  }
}

function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())
  const heap = new Heap()

  for (let i = 0; i < n; i++) {
    const elem = parseInt(input.shift())
    if (elem == 0) {
      const min = heap.pop()
      console.log(min)
    } else {
      heap.insert(elem)
    }
  }
}

// const heap = new Heap()
// heap.insert(15)
// heap.insert(8)
// heap.insert(10)
// heap.insert(5)
// heap.insert(4)
// heap.insert(20)

// console.log(heap._array)
// /* [
//       0, 20,  8, 15,
//       5,  4, 10
//     ] */
// heap.pop()
// console.log(heap._array)
// /* [ 0, 15, 8, 10, 5, 4 ] */

solution(`9
0
12345678
1
2
0
0
0
0
32`)
