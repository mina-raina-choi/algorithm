function solution(params) {
  const input = params
  const len = input.length

  const chars = "abcdefghijklmnopqrstuvwxyz".split("")
  const element = {}
  chars.forEach(a => {
    element[a] = 0
  })

  for (let i = 0; i < len; i++) {
    const elem = input[i]
    element[elem] += 1
  }
  console.log(Object.values(element).join(" "))
}

function solution2(params) {
  const input = params
  const len = input.length

  const chars = "abcdefghijklmnopqrstuvwxyz".split("")
  const count = new Array(26).fill(0)

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < 26; j++) {
      if (input[i] == chars[j]) {
        count[j]++
      }
    }
  }
  console.log(count.join(" "))
}

solution2(`baekjoon`)
// 1 1 0 0 1 0 0 0 0 1 1 0 0 1 2 0 0 0 0 0 0 0 0 0 0 0
