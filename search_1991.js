class Node {
  constructor(data, left, right) {
    this.data = data
    this.left = left
    this.right = right
  }
}

function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())
  const tree = getTree(input)
  // console.log(tree)

  function getTree() {
    const tree = {}
    for (let i = 0; i < n; i++) {
      const [parent, left, right] = input[i].split(" ")
      tree[parent] = new Node(parent, left, right)
    }
    return tree
  }

  let answer = []

  const key = input[0].split(" ")[0]
  preOrderTraversal(key)
  console.log(answer.join(""))

  answer = []
  inOrderTraversal(key)
  console.log(answer.join(""))

  answer = []
  postOrderTraversal(key)
  console.log(answer.join(""))

  function preOrderTraversal(key) {
    answer.push(key)
    const node = tree[key]
    if (node.left != ".") {
      preOrderTraversal(node.left)
    }
    if (node.right != ".") preOrderTraversal(node.right)
  }

  // left -> parent -> right
  function inOrderTraversal(key) {
    const node = tree[key]
    if (node.left != ".") {
      inOrderTraversal(node.left)
    }
    answer.push(node.data)
    // console.log(node, node.right)

    if (node.right != ".") {
      inOrderTraversal(node.right)
    }
  }

  // left -> right -> parent
  function postOrderTraversal(key) {
    const node = tree[key]
    if (node.left != ".") {
      postOrderTraversal(node.left)
    }

    if (node.right != ".") {
      postOrderTraversal(node.right)
    }
    answer.push(node.data)
    // console.log(node, node.right)
  }
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
