function solution(params) {
  const input = params.split("\n")
  const str = input[0]
  const n = parseInt(input[1])
  const items = input.slice(2)
  console.log("items", items)
  const left = str.split("")
  const right = []
  for (let i = 0; i < n; i++) {
    items[i].split("")
    const item = items[i].split("")
    if (item[0] == "L") {
      // left pop
      // right unshift
      right.unshift(left.pop())
    } else if (item[0] == "D") {
      // right shift
      // left push
      left.push(right.shift())
    } else if (item[0] == "B") {
      // left pop
      left.pop()
    } else {
      left.push(item[2])
    }
  }
  console.log(`${left.join("")}${right.join("")}`)
}

solution(`abcd
3
P x
L
P y`)

solution(`abc
9
L
L
L
L
L
P x
L
B
P y`)

solution(`dmih
11
B
B
P x
L
B
B
B
P y
D
D
P z`)

function solution2(params) {}
