function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())
  const MAX = 10000
  const primes = new Array(MAX + 1).fill(false)
  getPrimes()

  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let visited = new Array(MAX + 1).fill(false)

  for (let i = 0; i < n; i++) {
    const [start, end] = input[i].split(" ").map(a => +a)
    let level = 0
    visited = new Array(MAX + 1).fill(false)
    bfs(start, end, level, visited)
  }

  function bfs(start, end, level, visited) {
    const q = [start]
    visited[start] = true
    let isFound = false
    outer: while (q.length > 0) {
      // 각 level별로 다 탐색하고 나면 level++
      let levelSize = q.length
      while (levelSize) {
        levelSize--
        const item = q.shift()
        if (item == end) {
          console.log(level)
          isFound = true
          break outer
        }
        const elem = item
          .toString()
          .split("")
          .map(a => +a)

        // 바꿀 수 있는 경우의 수 & 그 수가 소수여야함
        for (let i = 0; i < 10; i++) {
          const num = nums[i]
          // 각자리별로 하나씩 바꾼다.
          for (let j = 0; j < 4; j++) {
            if (elem[j] != num) {
              const temp = parseInt([...elem.slice(0, j), num, ...elem.slice(j + 1)].join(""))
              if (temp >= 1000 && !visited[temp] && primes[temp]) {
                q.push(temp)
                visited[temp] = true
              }
            }
          }
        }
      }
      level++
    }

    if (!isFound) console.log("Impossible")
  }

  function getPrimes() {
    for (let i = 0; i <= MAX; i++) {
      let isPrime = true
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          isPrime = false
          break
        }
      }
      if (isPrime) primes[i] = true
    }
  }
}

solution(`3
1033 8179
1373 8017
1033 1033`)

// ! count를 어떻게 세지
// 그래프의 depth를 구해야한다.
