function solution(params) {
  const [n, k] = params.split(" ").map(a => +a)
  class Node {
    constructor(data) {
      this.data = data
      this.next = null
    }
  }
  class Linked {
    constructor(k, n) {
      this._head = null
      this._k = k
      this._n = n
      this._curr = null
    }

    add(item) {
      if (this._head) {
        let node = this._head
        while (node.next) {
          node = node.next
        }
        node.next = new Node(item)
        // 마지막 값이면 head와 연결
        if (this._n == item) {
          node.next.next = this._head
        }
      } else {
        this._head = new Node(item)
      }
    }

    delete() {
      let k = this._k
      let node = this._curr ? this._curr : this._head,
        prev = this._curr ? this._curr : this._head
      while (k > 1) {
        prev = node
        node = node.next
        k--
      }
      //   console.log(node.data)
      prev.next = node.next
      this._curr = node.next
      return node.data
    }
  }

  const linked = new Linked(k, n)

  for (let i = 0; i < n; i++) {
    linked.add(i + 1)
  }

  let answer = "<"
  for (let i = 0; i < n; i++) {
    answer += `${linked.delete()}${i < n - 1 ? ", " : ">"}`
  }

  console.log(answer)
}

solution(`7 3`)
// <3, 6, 2, 7, 5, 1, 4>

// ! 시간초과
// https://www.acmicpc.net/board/view/29683
