function solution(params) {
  const input = parseInt(params)
  let n = input

  const count = new Array(n + 1).fill(0)
  count[1] = 1

  for (let i = 2; i <= n; i++) {
    count[i] = count[1] + 2 * count[i - 1]
  }

  console.log(count[input])

  hanoi(1, 3, input)

  // a기둥에서 b기중으로 n개를 옮기는 과정
  function hanoi(a, b, n) {
    if (n == 1) {
      console.log(`${a} ${b}`)
      return
    }

    // 비어있는 다른 기둥
    const c = 6 - a - b
    hanoi(a, c, n - 1) // n-1를 빈 기둥으로
    console.log(`${a} ${b}`) // 맨 밑의 제일 큰 원반을 목표기둥인 b로
    hanoi(c, b, n - 1) // c기둥에 있던 n-1개를 목표기둥 b로
  }
}

// 시간초과가 나네

solution(`3`)

//각 함수가 어디까지 연산을 수행하고, 어떤 입력값을 재귀적으로 넘겨주어야 할지

// 하노이의 탑 규칙
/* 

f(1) = 1  

f(2) = f(1) + f(1) + f(1) 

f(3) = f(1) + f(2) + f(2)
...

f(n) = f(1) + f(n-1) + f(n-1)

맨 아래 제일 큰 원반과 그 나머지로 분리를 해서 생각하면
(A, B, C 기둥이 있다고 치자. )
제일 큰 원반을 제외한 나머지 n-1를 B로 옮긴 후 => f(n-1), 
제일 큰 원반을 C로 옮기고 => f(1)
B기둥에 있는 n-1개를 다시 C기둥으로 옮기면 된다. => f(n-1)


! BUT!!!! 이동경로는 어떻게?
*/
