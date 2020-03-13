function solution(params) {
  const input = params.split("")
  let result = ""
  for (let i = 0; i < input.length; i++) {
    const elem = input[i]
    if (elem >= "A" && elem <= "Z") {
      let temp = elem.charCodeAt() + 13
      if (temp > 90) {
        temp = 65 + temp - 90 - 1
      }
      result += String.fromCharCode(temp)
    } else if (elem >= "a" && elem <= "z") {
      let temp = elem.charCodeAt() + 13
      if (temp > 122) {
        temp = 97 + temp - 122 - 1
      }
      result += String.fromCharCode(temp)
    } else {
      result += elem
    }
  }
  console.log(result)
}

//영어 알파벳을 13글자씩
solution(`Baekjoon Online Judge`)
// Onrxwbba Bayvar Whqtr
solution(`One is 1`)
// "B".charCodeAt()
// 66

// String.fromCharCode(79)
// "O"
