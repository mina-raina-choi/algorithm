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
  const tree = {}
  for (let i = 0; i < n; i++) {
    const [data, left, right] = input
      .shift()
      .split(" ")
      .map(a => +a)

    tree[data] = new Node(data, left, right)
  }

  //   console.log(tree)
  let i = 0
  const nodes = []

  const root = 4
  // (n * (1 + n)) / 2
  //   console.log(root)

  // ! root가 1이 아닐 수 있다
  inorderTraversal(root, i)
  //   console.log(nodes)

  const answer = {}
  nodes.forEach((a, i) => {
    if (answer[a[0]]) {
      answer[a[0]].push(i)
    } else {
      answer[a[0]] = [i]
    }
  })

  //   console.log(answer)

  let max = 1,
    maxLevel = 1
  const keys = Object.keys(answer)
  for (let i = keys.length - 1; i >= 0; i--) {
    const element = answer[keys[i]]
    let width = Math.max(...element) - Math.min(...element) + 1
    max = Math.max(max, width)
    if (max == width) maxLevel = parseInt(keys[i])
  }
  console.log(maxLevel, max)

  function inorderTraversal(key, i) {
    i++
    const node = tree[key]
    if (!node) return
    if (node.left != -1) {
      inorderTraversal(node.left, i)
    }
    // console.log(i, node.data)
    nodes.push([i, node.data])
    if (node.right != -1) {
      inorderTraversal(node.right, i)
    }
  }
}

// solution(`19
// 1 2 3
// 2 4 5
// 3 6 7
// 4 8 -1
// 5 9 10
// 6 11 12
// 7 13 -1
// 8 -1 -1
// 9 14 15
// 10 -1 -1
// 11 16 -1
// 12 -1 -1
// 13 17 -1
// 14 -1 -1
// 15 18 -1
// 16 -1 -1
// 17 -1 19
// 18 -1 -1
// 19 -1 -1`)

solution(`4
4 5 6
5 7 8
7 9 -1
9 -1 -1`)

// 트리순회중에서 중위순회를 하면 왼쪽부터 방문
// 너비가 가장 넓은 레벨과 그 레벨의 너비를 순서대로 출력
