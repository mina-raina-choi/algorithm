// 조합, 순열 구현

//V8 3.31.1

function printCombinations(array, k) {
  var combinations = []

  function run(level, start) {
    for (var i = start; i < array.length - k + level + 1; i++) {
      combinations[level] = array[i]

      if (level < k - 1) {
        run(level + 1, i + 1)
      } else {
        print(combinations.join(" "))
      }
    }
  }

  run(0, 0)
}

printCombinations([1, 2, 3, 4], 3)

print("------------")

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
          print(combinations.join(" "))
        }

        indices[i] = false
      }
    }
  }

  run(0, 0)
}

printPermutations([1, 2, 3, 4], 3)
