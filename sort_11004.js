function solution(params) {
  const input = params.split("\n")
  const [n, k] = input
    .shift()
    .split(" ")
    .map(a => +a)

  const nums = input[0].split(" ").map(a => +a)

  nums.sort((a, b) => a - b)
  //   console.log(n, k, nums)
  console.log(nums[k - 1])
}

solution(`5 2
4 1 2 3 5`)
