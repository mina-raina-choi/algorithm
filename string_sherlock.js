function solution(s) {
  const map = {}

  // 문자별로 frequency 구하기
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]]++
    } else {
      map[s[i]] = 1
    }
  }

  const values = Object.values(map)

  const frequencyMap = {}

  // 빈도수별로 매핑을 한다.
  for (let i = 0; i < values.length; i++) {
    if (frequencyMap[values[i]]) {
      frequencyMap[values[i]]++
    } else {
      frequencyMap[values[i]] = 1
    }
  }

  const freValues = Object.entries(frequencyMap)
  // [ [ '2', 7 ], [ '3', 1 ] ]

  let answer

  // 모든 문자열의 빈도수가 동일하면
  if (freValues.length === 1) {
    answer = "YES"
  }
  // 빈도수의 케이스가 2보다 크면
  else if (freValues.length > 2) {
    answer = "NO"
  }
  // 빈도수의 케이스가 2가지
  else if (freValues.length == 2) {
    let max, min, maxKey, minKey

    if (freValues[0][1] > freValues[1][1]) {
      maxKey = freValues[0][0]
      max = freValues[0][1]
      minKey = freValues[1][0]
      min = freValues[1][1]
    } else {
      maxKey = freValues[1][0]
      max = freValues[1][1]
      minKey = freValues[0][0]
      min = freValues[0][1]
    }

    console.log("min, max", min, max, minKey, maxKey)

    // 빈도수 다른 것이 딱 하나있고, 그 빈도수가 1이면
    if (minKey == 1 && min === 1) {
      answer = "YES"
    }
    // 빈도수의 차이가 1이고, 그 빈도수가 1이면
    else if (Math.abs(minKey - maxKey) === 1 && min === 1) {
      answer = "YES"
    } else {
      answer = "NO"
    }
  }

  console.log("answer", answer)
  return answer
}

solution(
  `ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd`
)
