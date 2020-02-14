function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())

  const primes = findPrime()

  for (let i = 0; i < n; i++) {
    const elem = input[i].split(" ")
    console.log(elem)
    const len = elem[0].length

    let start = elem[0].split("")
    const end = elem[1].split("")
    const visited = new Array(len).fill(null).map(a => false)
    // console.log(start, end)
    let count = 0

    // while (start.join("") != end.join("")) {
    // 서로 바꾸는게 아님?

    while (count < 5) {
      for (let i = 0; i < len; i++) {
        for (let j = 0; j < 10; j++) {
          if (visited[j]) continue
          if (start[j] == end[j]) continue
          const checkNum = parseInt([...start.slice(0, i), j, ...start.slice(i + 1)].join(""))
          //   console.log("checkNum", checkNum, isPrimeNumber(checkNum))
          if (checkNum.toString().length == 4 ** isPrimeNumber(checkNum)) {
            start[j] = end[j]
            console.log("start, end", start, end)
            visited[j] = true
            count++
          }
        }
      }
    }
    console.log("start, end", start, end)

    console.log("count", count)
  }

  function isPrimeNumber(num) {
    let isPrime = true
    let i = primes.length
    while (i) {
      // 일일이 다 나누지말고 120미만의 소수로만 나눠보면
      const divided = primes[i]
      if (num % divided == 0) {
        isPrime = false
        break
      }
      i--
    }
    // console.log("isPrime", isPrime)
    return isPrime
  }

  // 에라토스테네스의 체 : 120 미만의 소수
  // ! 참고 https://marobiana.tistory.com/91
  function findPrime() {
    const isPrimes = new Array(121).fill(null).map((a, i) => i)
    for (let i = 2; i < isPrimes.length; i++) {
      let divided = i
      for (let j = 2; j < isPrimes.length; j++) {
        if (j != divided && j % divided == 0) {
          isPrimes[j] = 0
        }
      }
    }
    return isPrimes.filter(a => a != 0 && a != 1)
  }
}

solution(`3
1033 8179
1373 8017
1033 1033`)
