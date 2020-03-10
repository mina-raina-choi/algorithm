function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let cnt = 0

  for (let i = 1; i * i < N; i++) {
    if (N % i == 0) {
      cnt += 2
    }
  }

  if (Math.sqrt(N) % 1 == 0) cnt++

  console.log(cnt)
  return cnt
}

solution(`10`)

/* 약수갯수구하기 

N의 제곱근 % 1 == 0 이면 cnt+=1
N의 제곱근보다 작을 때까지 for문 돌리고, 나누어 떨어지는 갯수의 *2

*/
