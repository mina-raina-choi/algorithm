function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())

  const q = []
  let result = ""

  for (let i = 0; i < n; i++) {
    const elem = input[i].split(" ")
    switch (elem[0]) {
      case "push":
        q.push(elem[1])
        break

      case "pop":
        const popped = q.shift()
        if (popped) result += `${popped}\n`
        else result += `${-1}\n`
        break

      case "size":
        result += `${q.length}\n`
        break

      case "empty":
        result += `${q.length == 0 ? 1 : 0}\n`
        break

      case "front":
        result += `${q.length == 0 ? -1 : q[0]}\n`
        break

      case "back":
        result += `${q.length == 0 ? -1 : q[q.length - 1]}\n`
        break

      default:
        break
    }
  }
  console.log(result)
}

solution(`15
push 1
push 2
front
back
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
front`)

/* push X: 정수 X를 큐에 넣는 연산이다.
pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 큐에 들어있는 정수의 개수를 출력한다.
empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다. */
