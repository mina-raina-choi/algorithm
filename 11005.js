// ! 10진법 -> b진법으로
// function solution(params) {
//   const [n, b] = params.split(" ").map(a => +a)
//   //   console.log(n, b)
//   console.log(n.toString(b).toUpperCase())
// }

// solution(`60466175 36`)

// ! b진법 -> 10진법
function solution(params) {
  const [n, b] = params.split(" ")
  console.log(parseInt(n, Number(b)))
}

solution(`ZZZZZ 36`)

// https://unikys.tistory.com/334
