function solution(params) {
  const input = params.split("\n")
  let n = input.length
  while (n) {
    const element = input.shift().split("")
    let upper = 0,
      lower = 0,
      num = 0,
      space = 0
    element.forEach(i => {
      if (i >= "A" && i <= "Z") {
        upper += 1
      } else if (i >= "a" && i <= "z") {
        lower += 1
      } else if (i >= "0" && i <= "9") {
        num += 1
      } else if (i == " ") {
        space += 1
      }
    })
    console.log(`${lower} ${upper} ${num} ${space}`)
    n--
  }
}

solution(`This is String
SPACE    1    SPACE
 S a M p L e I n P u T     
0L1A2S3T4L5I6N7E8`)

// 10 2 0 2
// 0 10 1 8
// 5 6 0 16
// 0 8 9 0

// 소문자, 대문자, 숫자, 공백의 개수
// charCodeAt

// "A".charCodeAt()
// 65
// "Z".charCodeAt()
// 90

// "a".charCodeAt()
// 97
// "z".charCodeAt()
// 122

// " ".charCodeAt()
// 32

// "0".charCodeAt()
// 48
// "9".charCodeAt()
// 57
