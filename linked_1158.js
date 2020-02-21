class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor(n, k) {
    this._length = 0
    this._head = null
    this._del_node = null
    this._n = n
    this._k = k
  }

  getLength() {
    return this._length
  }

  // 마지막이면... 연결
  insert(node) {
    if (this._head) {
      let elem = this._head
      while (elem.next) {
        elem = elem.next
      }
      elem.next = node
      if (node.data == this._n) {
        elem.next.next = this._head
      }
    } else {
      this._head = node
      this._del_node = node
    }
    this._length++
  }

  // k번째
  delete() {
    let k = this._k - 1
    let prev = this._del_node,
      elem = this._del_node

    while (k > 0 && this._length > 0) {
      prev = elem
      elem = elem.next
      k--
    }
    const deleted = elem.data
    prev.next = elem.next
    this._del_node = elem.next
    this._length--
    return deleted
  }
}

function solution(params) {
  const input = params.split(" ").map(a => +a)
  const n = input[0],
    k = input[1]

  const linked = new LinkedList(n, k)
  for (let i = 0; i < n; i++) {
    const node = new Node(i + 1)
    linked.insert(node)
  }

  const answer = []
  let len = n
  while (len) {
    answer.push(linked.delete())
    len--
  }
  console.log(`<${answer.join(", ")}>`)
}

// 링크드리스트
solution(`7 3`)
