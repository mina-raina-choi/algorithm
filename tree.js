class Node {
  constructor(data) {
    this.data = data
    this.right = null
    this.left = null
  }
}

class BinarySearchTree {
  constructor() {
    this._head = null
  }

  insert(data) {
    if (this._head) {
      let currNode = this._head
      while (true) {
        if (data < currNode.data) {
          if (currNode.left) {
            // 비교할 대상 바꾸기
            currNode = currNode.left
          } else {
            currNode.left = new Node(data)
            break
          }
        } else {
          if (currNode.right) {
            // 비교할 대상 바꾸기
            currNode = currNode.right
          } else {
            currNode.right = new Node(data)
            break
          }
        }
      }
    } else {
      this._head = new Node(data)
    }
  }

  search(data) {
    let curr = this._head
    while (curr) {
      if (curr.data === data) {
        return true
      } else if (data < curr.data) {
        curr = curr.left
      } else {
        curr = curr.right
      }
    }
    return false
  }

  delete(data) {
    let searched = false
    let currNode = this._head
    let parentNode = this._head

    // 1. 삭제할 노드 있는 체크
    while (currNode) {
      if (currNode.data === data) {
        searched = true
        break
      } else if (data < currNode.data) {
        parentNode = currNode
        currNode = currNode.left
      } else {
        parentNode = currNode
        currNode = currNode.right
      }
    }

    if (!searched) return false

    // case 1 : leaf node 인지 체크
    if (currNode.left === null && currNode.right === null) {
      // 삭제할 노드가 왼쪽노드인지 오른쪽노드인지 체크
      if (data < parentNode.data) {
        parentNode.left = null
      } else {
        parentNode.right = null
      }
      //   delete currNode
    }

    // case 2 : child 노드를 하나만 가지고 있을 때
    if (currNode.left !== null && currNode.right === null) {
      if (data < parentNode.data) {
        parentNode.left = currNode.left
      } else {
        parentNode.right = currNode.left
      }
    } else if (currNode.left === null && currNode.right !== null) {
      if (data < parentNode.data) {
        parentNode.left = currNode.right
      } else {
        parentNode.right = currNode.right
      }
    }

    /*  case 3 전략 1 삭제할 노드의 오른쪽 자식중, 
    가장 작은 값을 삭제할 노드의 parent노드가 가리키도록 한다. */
    if (currNode.left !== null && currNode.right !== null) {
      // case 3-1 : 삭제할 Node가 Parent Node 왼쪽에 있을 때
      if (data < parentNode.data) {
        let changeNode = currNode.right
        let changeNodeParent = currNode.right

        while (changeNode.left !== null) {
          changeNodeParent = changeNode
          changeNode = changeNode.left
        }

        // 오른쪽 노드들중 가장 작은 값의 노드가 right child가 있는지 체크
        if (changeNode.right !== null) {
          changeNodeParent.left = changeNode.right
        } else {
          changeNodeParent.left = null
        }
        parentNode.left = changeNode
        changeNode.right = currNode.right
        changeNode.left = currNode.left
      }
      // case 3-2 : 삭제할 Node가 Parent Node 오른쪽에 있을 때
      else {
        let changeNode = currNode.left
        let changeNodeParent = currNode.left

        while (changeNode.left !== null) {
          changeNodeParent = changeNode
          changeNode = changeNode.left
        }

        // 오른쪽 노드들중 가장 작은 값의 노드가 right child가 있는지 체크
        if (changeNode.right !== null) {
          changeNodeParent.left = changeNode.right
        } else {
          changeNodeParent.left = null
        }

        parentNode.right = changeNode
        changeNode.left = currNode.left
        changeNode.right = currNode.right
      }
    }
  }
}

// const bst = new BinarySearchTree()
// bst.insert(10)
// bst.insert(3)
// bst.insert(4)
// bst.insert(5)
// bst.insert(11)

// console.log(JSON.stringify(bst))

// console.log(bst.search(122))
/* const result = {
  _head: {
    data: 10,
    right: { data: 11, right: null, left: null },
    left: {
      data: 3,
      right: { data: 4, right: { data: 5, right: null, left: null }, left: null },
      left: null
    }
  }
}
 */

const numset = new Set()
while (numset.size != 100) {
  numset.add(Math.floor(Math.random() * 1000))
}

const bst = new BinarySearchTree()
bst.insert(500)

for (let item of numset) {
  bst.insert(item)
}

for (let item of numset) {
  if (bst.search(item) === false) {
    console.log("search failed", item)
  }
}

const deleteNums = new Set()
const numArray = [...numset]
// 10개 임의로 삭제해보기
while (deleteNums.size != 10) {
  const index = Math.floor(Math.random() * 100)
  deleteNums.add(numArray[index])
}

for (let item of deleteNums) {
  if (bst.delete(item) === false) {
    console.log("delete failed")
  }
}
