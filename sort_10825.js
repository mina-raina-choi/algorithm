/* 
국어 점수가 감소하는 순서로
국어 점수가 같으면 영어 점수가 증가하는 순서로
국어 점수와 영어 점수가 같으면 수학 점수가 감소하는 순서로
모든 점수가 같으면 이름이 사전 순으로 증가하는 순서로 
(단, 아스키 코드에서 대문자는 소문자보다 작으므로 사전순으로 앞에 온다.) 

*/
//   for (let i = 0; i < n; i++) {
//     const [name, ko, eng, math] = input[i].split(" ")
//     students.push([name, Number(ko), Number(eng), Number(math)])
//   }
function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())
  const students = input.map(a =>
    a.split(" ").map((a, i) => {
      if (i !== 0) return +a
      else return a
    })
  )
  let result = ""

  console.log(students)

  students.sort()
  students.sort((a, b) => {
    if (a[1] == b[1]) {
      if (a[2] == b[2]) {
        if (a[3] == b[3]) {
          return 1
          // ! 소문자, 대문자 순으로 정렬됨..
          // 대문자, 소문자 순으로
          //   console.log(a[0], b[0], a[0].localeCompare(b[0]))
          //   //   return a[0].localeCompare(b[0])
          //   console.log(a[0] - b[0])
          //   return a[0] - b[0]
        }
        // 수학 내림차순
        else return b[3] - a[3]
      }
      // 영어 오름차순
      else return a[2] - b[2]
    }
    // 국어 내림차순
    else return b[1] - a[1]
  })
  students.forEach(a => (result += `${a[0]}\n`))

  console.log(result)
}

solution(`12
Junkyu 50 60 100
Sangkeun 80 60 50
Sunyoung 80 70 100
taewhan 50 60 90
Haebin 50 60 100
Kangsoo 60 80 100
Donghyuk 80 60 100
Sei 70 70 70
Wonseob 70 70 90
Sanghyun 70 70 80
nsj 80 80 80
Taewhan 50 60 90`)

// Donghyuk
// Sangkeun
// Sunyoung
// nsj
// Wonseob
// Sanghyun
// Sei
// Kangsoo
// Haebin
// Junkyu
// Soong
// Taewhan

// 왜 틀린지 모르겠다......
