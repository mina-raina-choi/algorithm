class HashTable {
  constructor() {
    this.storageLimit = 10
    this.table = new Array(this.storageLimit)
  }

  // data -> index
  getHash(data) {
    let hash = 0
    for (let i = 0; i < data.length; i++) {
      // charCodeAt() 메서드는 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 정수
      hash += data.charCodeAt(i)
    }
    return hash % this.storageLimit
  }

  // data 와 value를 넣으면, 해당 data에 대한 key를 찾아서, 해당 key에 대응하는 해쉬주소에 value를 저장
  add(data, value) {
    const index = this.getHash(data)
    // 이미 해당 index에 데이터 존재
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === data) {
          this.table[index][i][1] = value
          return
        }
      }
      this.table[index].push([data, value])
    } else {
      this.table[index] = [[data, value]]
    }
  }

  get(data) {
    const index = this.getHash(data)
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === data) {
          return this.table[index][i][1]
        }
      }
      return null
    } else {
      return null
    }
  }

  remove(data) {
    const index = this.getHash(data)
    if (this.table[index].length === 1 && this.table[index][0][0] === data) {
      delete this.table[index]
    } else {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === data) {
          this.table[index].splice(i, 1)
        }
      }
    }
  }
}

const hashTable = new HashTable()
hashTable.add("evad", "111222333")
hashTable.add("dave", "222333444")
hashTable.add("stella", "333444555")
hashTable.add("mike", "444555666")

console.log(hashTable.table)

/* [
    <2 empty items>,
    [ [ 'mike', '444555666' ] ],
    <2 empty items>,
    [ [ 'stella', '333444555' ] ],
    [ [ 'evad', '111222333' ], [ 'dave', '222333444' ] ],
    <3 empty items>
  ] */

console.log(hashTable.get("dave"))
// 222333444

hashTable.remove("evad")

console.log(hashTable.table)
/* [
    <2 empty items>,
    [ [ 'mike', '444555666' ] ],
    <2 empty items>,
    [ [ 'stella', '333444555' ] ],
    [ [ 'dave', '222333444' ] ],
    <3 empty items>
  ] */
