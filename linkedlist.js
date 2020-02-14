class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this._length = 0
    this._head = null
  }

  // append(데이터): 리스트의 맨 끝에 데이터를 추가한다.
  append(data) {
    const item = new Node(data)
    let node = this._head

    if (node) {
      while (node.next) {
        node = node.next
      }
      node.next = item
    } else {
      this._head = item
    }

    this._length++
  }

  // removeAt(위치): 해당 위치에 있는 데이터를 삭제한다.
  removeAt(index) {
    // index가 유효한 값인지 일단 먼저 체크
    if (index > -1 && index < this._length) {
      let node = this._head
      let prev = null
      // 헤드를 삭제하는 경우라면, 그 다음 값을 헤드로 셋팅
      if (index == 0) {
        this._head = node.next
        this._length--
      } else {
        // 삭제하려는 index-1 값을 찾아서 next를 그 다음 next 값으로
        let i = 0
        while (i < index) {
          prev = node
          node = node.next
          i++
        }
        prev.next = node.next
        this._length--
      }
      return node.data
    } else {
      return null
    }
  }

  // indexOf(데이터): 해당 데이터의 인덱스를 반환한다. 존재하지 않을 경우 결과 값은 -1이다.
  indexOf(data) {
    let curr = this._head
    let index = 0
    while (curr.next) {
      if (curr.data === data) {
        return index
      }
      curr = curr.next
      index++
    }
    return -1
  }

  // remove(데이터): 데이터를 삭제한다.
  remove(item) {
    let curr = this._head
    if (!this._head) return "빈 리스트입니다"
    // head일경우
    if (curr.data === item) {
      this._head = curr.next
      this._length--
    } else {
      while (curr.next) {
        if (curr.next.data === item) {
          curr.next = curr.next.next
          this._length--
          break
        }
        curr = curr.next
      }
    }
  }

  // insert(위치, 데이터): 해당 위치에 데이터를 삽입한다.
  insert(index, item) {
    // index가 유효한 값인지 일단 먼저 체크
    if (index > -1 && index <= this._length) {
      let curr = this._head
      const newNode = new Node(item)
      let i = 0
      // 헤드로
      if (index === 0) {
        this._head = newNode
        this._head.next = curr
        this._length++
      } else {
        // 추가하려는 index-1 값을 찾아서
        let i = 0
        let prev = null
        while (i < index) {
          prev = curr
          curr = curr.next
          i++
        }
        let nextTemp = prev.next
        prev.next = newNode
        newNode.next = nextTemp

        this._length++
      }
    } else {
      return null
    }
  }

  // isEmpty(): 데이터가 하나도 없다면 true를, 그 외엔 false를 반환한다.
  isEmpty() {
    if (this._length === 0) return true
    return false
  }
  //size(): 데이터 개수를 반환한다. 배열의 length 프로퍼티와 비슷하다.
  size() {
    return this._length
  }
}

const linked = new LinkedList()

linked.append(1)
linked.append(2)
linked.append(3)
linked.append(4)
linked.append(5)
console.log(linked)

linked.insert(3, 7)
console.log(JSON.stringify(linked))

console.log(linked.remove(4))
console.log(JSON.stringify(linked))

console.log(linked.indexOf(4))
