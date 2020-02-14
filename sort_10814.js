function solution(params) {
  let input = params.split("\n")
  input.shift()
  var users = input.map(function(a, i) {
    const temp = a.split(" ")
    // index 넣어주기
    temp[0] = parseInt(temp[0])
    temp[2] = i
    return temp
  })
  //   console.log(users)
  users.sort(function(a, b) {
    if (a[0] == b[0]) {
      return a[2] - b[2]
    }
    return a[0] - b[0]
  })
  users.forEach(function(a) {
    console.log(a.slice(0, 2).join(" "))
  })
}

// !stable sort
//   var sort = function (a, b) {
// 	if (a.key === b.key) return a.position - b.position;
//     if (a.key < b.key) return -1; return 1;
// };

// array.map((o, i) => { o.idx = i ; return o; }).sort(func);

solution(`3
21 Junkyu
21 Dohyun
20 Sunyoung`)

solution(`2
2 a
10 b`)

// 이름이 같은 경우
solution(`3
3 a
2 a
5 b`)
