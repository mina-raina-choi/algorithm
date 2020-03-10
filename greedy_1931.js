function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())
  const meetings = []
  for (let i = 0; i < n; i++) {
    const elem = input[i].split(" ").map(a => +a)
    meetings.push(elem)
  }

  // -> 끝나는 시간이 빠른순으로 정렬
  // 끝나는 시간이 같으면 시작시간이 빠른 순으로
  meetings.sort((a, b) => {
    if (a[1 == b[1]]) return a[0] - b[0]
    return a[1] - b[1]
  })
  console.log(meetings)

  let meetingCnt = 1
  let prevMeeting = meetings[0]
  for (let i = 1; i < n; i++) {
    // 끝나는 시간보다 새로 시작하는 시간이 같거나 크면
    if (prevMeeting[1] <= meetings[i][0]) {
      meetingCnt++
      prevMeeting = meetings[i]
    }
  }
  console.log(meetingCnt)
}

// ! 만약 dp로 푼다면 n^2

solution(`11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14`)

solution(`3
0 1000
998 1002
1001 2000`)

solution(`3
1 2147483647
2 3
2147483647 2147483647`)
// 2

solution(`2
1 3 
2 2`)

solution(`4
1 4
4 4
4 4
1 4`)

// n번째 선택에서 가장 이득이 되게 하기 위해서는 n+1번째 선택의 폭을 최대화하는 것입니다.
// -> 끝나는 시간이 가장 빠른것으로 선택

// 끝나는 시간 기준, 가장 많이 회의를 할 수 있는 경우

// 87%에서 틀림...
