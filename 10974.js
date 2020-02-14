function solution(params) {
  const n = parseInt(params)
  const array = []
  for (let i = 0; i < n; i++) {
    array.push(i + 1)
  }

  //   console.log("array", array)
  //
  function printPermutations(array, k) {
    var combinations = []
    var indices = []

    function run(level, start) {
      for (var i = 0; i < array.length; i++) {
        if (!indices[i]) {
          indices[i] = true

          combinations[level] = array[i]

          if (level < k - 1) {
            run(level + 1, i + 1)
          } else {
            console.log(combinations.join(" "))
          }

          indices[i] = false
        }
      }
    }

    run(0, 0)
  }

  printPermutations(array, n)
}

solution(`3`)

// https://rextester.com/OUC90847

// 순열과 조합 구현차이
