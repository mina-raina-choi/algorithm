function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())
  const set = new Set()
  // length 값을 배열에
  // set
  for (let i = 0; i < n; i++) {
    const elem = input[i]
    set.add(elem)
  }

  const array = []

  set.forEach(a => {
    array.push([a.length, a])
  })

  array.sort((a, b) => {
    if (a[0] == b[0]) {
      return a[1].localeCompare(b[1])
    }
    return a[0] - b[0]
  })
  array.forEach(a => {
    console.log(a[1])
  })
}

solution(`13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours`)
