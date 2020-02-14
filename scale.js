function scale(inputs) {
  var relayed = true
  var diff = inputs[1] - inputs[0]

  for (var i = 1; i < inputs.length - 1; i++) {
    if (inputs[i + 1] - inputs[i] !== diff) {
      relayed = false
    }
  } // 1 2 3 4 5 6 7 8

  if (!relayed) {
    return "mixed"
  } else {
    if (diff === 1) {
      return "ascending"
    } else {
      return "descending"
    }
  }
  //   let relayed = true
  //   let diff = inputs[1] - inputs[0]
  //   console.log("diff", diff)

  //   for (let i = 1; i < inputs.length - 1; i++) {
  //     console.log(inputs[i + 1] - inputs[i], i)
  //     if (inputs[i + 1] - inputs[i] !== diff) {
  //       relayed = false
  //     }
  //   }
  //   // 1 2 3 4 5 6 7 8
  //   if (!relayed) {
  //     return "mixed"
  //   } else {
  //     const ret = diff === 1 ? "ascending" : "descending"
  //     return ret
  //   }
}

const ret = scale([8, 7, 6, 4, 5, 3, 2, 1])
console.log("ret", ret)
