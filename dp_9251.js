function LCS(inputString) {
  var input = inputString.split("\n")

  var string1 = input[0]
  var string2 = input[1]
  var len1 = string1.length
  var len2 = string2.length
  var dp = Array(len1 + 1)
    .fill(null)
    .map(function() {
      return Array(len2 + 1).fill(0)
    })

  for (var i = 1; i <= len1; i++) {
    for (var j = 1; j <= len2; j++) {
      // case1 마지막 글자가 같을 경우
      if (string1[i - 1] === string2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } // case2 마지막 글자가 다를 경우
      else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  } //   console.log("dp", dp)

  console.log(dp[len1][len2])
}

LCS(`ACAYKP
CAPCAK`)

/* 
Longest Common Subsequences 접근하는 방법

1. 마지막 문자가 같은 경우
String A: "ABCD", String B: "AEBD"
LCS("ABCD", "AEBD") = 1 + LCS("ABC", "AEB")

2. 마지막 문자가 다른 경우 

String A: "ABCDE", String B: "AEBDF"
LCS("ABCDE", "AEBDF") = Max(LCS("ABCDE", "AEBD"), LCS("ABCD", "AEBDF"))
*/

function LCS2(inputString) {
  var input = inputString.split("\n")

  var string1 = input[0]
  var string2 = input[1]

  var len1 = string1.length
  var len2 = string2.length

  if (len2 == 0 || len1 == 0) return 0

  if (string1[len1 - 1] == string2[len2 - 1]) {
    return 1 + LCS2(`${string1.substring(0, len1 - 1)}\n${string2.substring(0, len2 - 1)}`)
  } else {
    return Math.max(
      LCS2(`${string1.substring(0, len1 - 1)}\n${string2.substring(0, len2)}`),
      LCS2(`${string1.substring(0, len1)}\n${string2.substring(0, len2 - 1)}`)
    )
  }
}

const count = LCS2(`ACAYKP
CAPCAK`)

console.log(count)
