function solution(params) {
  const input = params.split("\n")
  const [n, k] = input
    .shift()
    .split(" ")
    .map(a => +a)

  const lines = input.map(a => +a).sort()
  const sum = lines.reduce((a, b) => a + b, 0)

  let min = 1,
    max = parseInt(sum / k),
    mid = 0,
    result = 0

  while (min <= max) {
    mid = parseInt((max + min) / 2)
    let isPossible = countLines(mid)
    if (isPossible) {
      // mid를 더 크게해줘야함
      min = mid + 1
      // 이전까지의 최대랜선길이 보다 더 긴 mid가 나타나면 result에 저장
      if (result < mid) result = mid
    } else {
      max = mid - 1
    }
  }

  console.log(result)

  function countLines(mid) {
    let count = 0
    lines.forEach(a => {
      count += parseInt(a / mid)
    })
    // N개보다 많이 만드는 것도 N개를 만드는 것에 포함된다
    return count >= k
  }
}

solution(`4 11
802
743
457
539`)

solution(`1 1
1`)

solution(`2 4
4
8`)

/* 이분 탐색

 탐색 기법중에 하나로 원하는 탐색범위를 두 부분으로 분할해서 찾는 방식입니다. 
 그렇기에 원래의 전부를 탐색하는 탐색 속도에 비해 빠릅니다. 
 이분 탐색을 하는 방법은 left , right , mid 값으로 탐색하는 것입니다. 
 mid의 값은 (left + right)/2 으로 잡아주고 우리가 검색하고자 하는 값과 mid 값을 비교합니다. 순서로 말하자면

1.이분 탐색을 하고자 할 때 이미 정렬이 되어있어야 합니다.

2. left, right로 미드값을 잡아줍니다.

3. mid 값과 구하고자 하는 값을 비교 합니다.

4. 비교할시 mid 값보다 구하고자 하는 값이 높으면 left를 mid+1로 만들어주고 낮으면 right를 mid-1로 만들어 줍니다. 

5. left > right 가 될때까지 1~3번을 반복해서 구하고자 하는 값을 찾습니다.

 이렇게 검색을 하면 전체를 검색하는 경우인 시간복잡도가 O( n ) 인거에 비해서 O( log(n) ) 으로 적다.



출처: https://wootool.tistory.com/62 [우투리와툴툴] */
