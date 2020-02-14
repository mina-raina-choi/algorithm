class Heap {
  constructor() {
    this._array = [0]
  }

  // 상위노드와 바꿔야하는지 판단하는 함수
  moveUp(insertedIndex) {
    if (insertedIndex <= 1) {
      return false
    } else {
      const parentIndex = parseInt(insertedIndex / 2)
      if (this._array[insertedIndex] > this._array[parentIndex]) {
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
      if (this._array[poppedIndex] < this._array[leftChildIndex]) {
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
        if (this._array[poppedIndex] < this._array[leftChildIndex]) {
          return true
        } else {
          return false
        }
      } else {
        if (this._array[poppedIndex] < this._array[rightChildIndex]) {
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
      return null
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
        if (this._array[poppedIndex] < this._array[leftChildIndex]) {
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
          if (this._array[poppedIndex] < this._array[leftChildIndex]) {
            // swap
            const temp = this._array[poppedIndex]
            this._array[poppedIndex] = this._array[leftChildIndex]
            this._array[leftChildIndex] = temp
            poppedIndex = leftChildIndex
          }
        } else {
          if (this._array[poppedIndex] < this._array[rightChildIndex]) {
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

//[3,2,3,1,2,4,5,5,6]

const heap = new Heap()
heap.insert(3)
heap.insert(2)
heap.insert(3)
heap.insert(1)
heap.insert(2)
heap.insert(4)
heap.insert(5)
heap.insert(5)
heap.insert(6)

console.log(heap._array)
/* [
    0, 20,  8, 15,
    5,  4, 10
  ] */
heap.pop()
console.log(heap._array)
/* [ 0, 15, 8, 10, 5, 4 ] */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let heap = [0]
  for (let i = 0; i < nums.length; i++) {
    // 일단 데이터 넣고
    heap.push(nums[i])

    // 부모노드와 비교해서 자리이동
    let insertedIndex = heap.length - 1
    while (moveUp(insertedIndex, heap)) {
      const parentIndex = parseInt(insertedIndex / 2)
      const temp = heap[parentIndex]
      heap[parentIndex] = heap[insertedIndex]
      heap[insertedIndex] = temp
      insertedIndex = parentIndex
    }
  }

  console.log(heap)

  // k 번씩 pop

  for (let i = 1; i < k; i++) {
    heap = pop(heap)
  }

  console.log(heap)
  return heap[1]
}

const pop = heap => {
  if (heap.length <= 1) {
    return null
  }
  // 편의를 위해 0은 0으로 채워주고 루트 노드는 heap[1]에 넣어줬음.
  const returnedData = heap[1]

  let poppedIndex = 1

  heap[1] = heap[heap.length - 1]
  heap.splice(heap.length - 1, 1)

  console.log("pop", heap)

  while (moveDown(poppedIndex, heap)) {
    const leftChildIndex = poppedIndex * 2
    const rightChildIndex = poppedIndex * 2 + 1
    if (rightChildIndex >= heap.length) {
      if (heap[leftChildIndex] > heap[poppedIndex]) {
        const temp = heap[poppedIndex]
        heap[poppedIndex] = heap[leftChildIndex]
        heap[leftChildIndex] = temp
      }
    }
    // 둘다 있다
    else {
      if (heap[leftChildIndex] > heap[rightChildIndex]) {
        if (heap[leftChildIndex] > heap[poppedIndex]) {
          const temp = heap[poppedIndex]
          heap[poppedIndex] = heap[leftChildIndex]
          heap[leftChildIndex] = temp
        }
      } else {
        if (heap[rightChildIndex] > heap[poppedIndex]) {
          const temp = heap[poppedIndex]
          heap[poppedIndex] = heap[rightChildIndex]
          heap[rightChildIndex] = temp
        }
      }
    }
  }

  console.log("sorted", heap)
  return returnedData
}
// 부모노드와 비교해서 값을 바꿔야하는지 체크
const moveUp = (insertedIndex, heap) => {
  if (insertedIndex <= 1) {
    return false
  } else {
    const parentIndex = parseInt(insertedIndex / 2)
    if (heap[parentIndex] < heap[insertedIndex]) {
      return true
    } else {
      return false
    }
  }
}

const moveDown = (poppedIndex, heap) => {
  const leftChildIndex = poppedIndex * 2
  const rightChildIndex = poppedIndex * 2 + 1

  // 왼쪽자식이 없으면 더이상 내려갈 데가 없다
  if (leftChildIndex >= heap.length) {
    return false
  }
  // 왼쪽있고 오른쪽없을경우
  else if (rightChildIndex >= heap.length) {
    if (heap[leftChildIndex] > heap[poppedIndex]) {
      return true
    } else {
      return false
    }
  }
  // 둘다 있다
  else {
    if (heap[leftChildIndex] > heap[rightChildIndex]) {
      if (heap[leftChildIndex] > heap[poppedIndex]) {
        return true
      } else {
        return false
      }
    } else {
      if (heap[rightChildIndex] > heap[poppedIndex]) {
        return true
      } else {
        return false
      }
    }
  }
}
