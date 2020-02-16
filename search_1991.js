class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor() {
    this._head = null
  }

  insert(data) {
    if (this._head) {
      let currNode = this._head
      while (true) {
        // 왼쪽부터 채움
        if (!currNode.left) {
          currNode.left = new Node(data)
          break
        } else if (!currNode.right) {
          currNode.right = new Node(data)
          break
        } else {
          // 둘다있어
          if (currNode.left) currNode = currNode.left
          else if (currNode.right) currNode = currNode.right
        }
        // else {
        //   currNode = currNode.left
        // }

        // if (data < currNode.data) {
        //   if (currNode.left) {
        //     currNode = currNode.left
        //   } else {
        //     currNode.left = new Node(data)
        //     break
        //   }
        // } else {
        //   if (currNode.right) {
        //     currNode = currNode.right
        //   } else {
        //     currNode.right = new Node(data)
        //     break
        //   }
        // }
      }
    } else {
      this._head = new Node(data)
    }
  }
}

function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())
  const tree = getTree(input)
  console.log(tree)
  function getTree(params) {
    const tree = new Map()
    for (let i = 0; i < n; i++) {
      const elem = params[i].split(" ")
      if (elem[1] != "." && elem[2] != ".") tree.set(elem[0], [elem[1], elem[2]])
      else if (elem[1] != ".") {
        tree.set(elem[0], [elem[1]])
      } else if (elem[2] != ".") {
        tree.set(elem[0], [elem[2]])
      }
    }
    return tree
  }
  let answer = []

  // 첫번째 글자를 넣어주면 된다.
  preOrderTraversal(input[0].split(" ")[0])
  console.log(answer.join(""))

  // dfs로 탐색하면된다.
  function preOrderTraversal(key) {
    answer.push(key)
    const newNodes = tree.get(key)
    for (let i in newNodes) {
      const elem = newNodes[i]
      preOrderTraversal(elem)
    }
  }

  const bst = new BinaryTree()

  for (let [key, value] of tree) {
    console.log(key, value)
    bst.insert(key)
    for (let i = 0; i < value.length; i++) {
      const element = value[i]
      bst.insert(element)
    }
  }
  console.log("bst", JSON.stringify(bst))

  function inOrderTraversal(tree) {}

  function postOrderTraversal(tree) {}
}

// 전위 순회한 결과 : ABDCEFG // (루트) (왼쪽 자식) (오른쪽 자식)
// 중위 순회한 결과 : DBAECFG // (왼쪽 자식) (루트) (오른쪽 자식)
// 후위 순회한 결과 : DBEGFCA // (왼쪽 자식) (오른쪽 자식) (루트)
solution(`7
A B C
B D .
C E F
E . .
F . G
D . .
G . .`)
