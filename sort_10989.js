function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input[0])
  const nums = input.slice(1).map(a => +a)
  console.log(n, nums)
}

// 오름차순 정렬
solution(`10
5
2
3
1
4
2
3
5
1
7`)
