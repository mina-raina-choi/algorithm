// function solution(inputString) {
//   var inputs = inputString.split(" ").map(function(a) {
//     return Number(a)
//   })

//   console.log("inputs", inputs)

//   var relayed = true
//   var diff = inputs[1] - inputs[0]

//   for (var i = 1; i < inputs.length - 1; i++) {
//     if (inputs[i + 1] - inputs[i] !== diff) {
//       relayed = false
//     }
//   } // 1 2 3 4 5 6 7 8

//   if (!relayed) {
//     console.log("mixed")
//   } else {
//     if (diff === 1) {
//       console.log("ascending")
//     } else {
//       console.log("descending")
//     }
//   }
// }

// solution(`8 1 7 2 6 3 5 4`)

function solution(params) {
  const input = params.split(" ")
  const n = input.length
  let diff
  for (let i = 1; i < n; i++) {
    diff = input[i] - input[i - 1]
    if (diff != 1 && diff != -1) {
      diff = 0
      break
    }
  }

  if (diff == 0) {
    console.log("mixed")
  } else if (diff == 1) {
    console.log("ascending")
  } else {
    console.log("descending")
  }
}

solution(`8 1 7 2 6 3 5 4`)
solution(`8 7 6 5 4 3 2 1`)
solution(`1 2 3 4 5 6 7 8`)
// 1 -> 8 : ascending
// 8 -> 1 : descending
