// // let b = function() {
// //   if (true) {
// //     // 선언하기 전에 접근하려고 하면
// //     console.log(a) // Cannot access 'a' before initialization
// //     let a = 2
// //   }
// //   // 변수 a는 블록스코프 {} 사이에서만 접근가능하다.
// //   //   console.log(a) // a is not defined
// // }

// // b()

// // foo()
// // function foo() {
// //   console.log("hello")
// // }

// // bar()
// // var bar = function() {
// //   console.log("world")
// // }

// function foo() {
//   // 함수 내에서는 모든 변수에 접근할 수 있다.
//   var bar = "bar"
//   let bae = "bae"
//   const baw = "baw"

//   console.log(bar)
//   console.log(bae)
//   console.log(baw)
// }

// // foo()

// function foo() {
//   if (true) {
//     var bar = "bar"
//     let bae = "bae"
//     const baw = "baw"
//   }

//   // var로 선언된 변수는 함수내에서 어디서나 접근 가능하다.
//   console.log(bar) // bar
//   // let, const로 선언된 변수는 정의된 블록 외부에서 접근 할 수 없다.
//   console.log(bae) // ReferenceError:bae is not defined
//   console.log(baw) // ReferenceError:baw is not defined
// }

// // foo()

// function foo() {
//   // var로 선언한 변수는 호이스팅된다. 변수가 선언되기 전에 코드에서 참조될 수 있다.
//   console.log(bar) // undefined
//   var bar = "bar"

//   // let, const에서는 호이스팅을 허용하지 않는다.
//   //ReferenceError: Cannot access 'bae' before initialization
//   console.log(bae)
//   let bae = "bae"

//   //   ReferenceError: Cannot access 'baw' before initialization
//   console.log(baw)
//   const baw = "baw"
// }

// // foo()

// function foo() {
//   var foo = "foo"
//   var foo = "foo2"
//   // var 는 변수의 재선언을 허용한다.
//   console.log(foo)

//   // let, const는 변수의 재선언을 허용하지 않는다.
//   let bar = "bar"
//   // SyntaxError: Identifier 'bar' has already been declared
//   let bar = "bar2"
//   console.log(bar)
// }

// foo()

// function foo() {
//   // let로 선언한 변수는 값의 재할당 가능하다.
//   let bar = "bar"
//   bar = "bar2"
//   console.log(bar) // bar2

//   // const로 선언한 변수는 값의 재할당이 불가능하다.
//   // 단, primitive형 일 경우만 (string, number, boolean...)
//   //   const baz = "baz"
//   //   // TypeError: Assignment to constant variable.
//   //   baz = "baz2"
//   //   console.log(baz)

//   const qwe = { x: 1, y: 2 }
//   qwe.x = 3
//   console.log(qwe) // { x: 3, y: 2 }

//   const awd = [1, 2, 3, 4]
//   awd[2] = 99
//   console.log(awd) // [ 1, 2, 99, 4 ]
// }

foo()

function foo() {
  const object = { key: "value" }
  // TypeError: Assignment to constant variable.
  //   object = { otherKey: "otherValue" }

  object.key = "newValue"

  Object.freeze(object)
  object.key = "NEWNEW"
  console.log(object) // newValue
}
// function foo() {
//  // let은 변수의 선언과 할당을 분리할 수 있다.
//   let foo
//   foo = 1
//   console.log(foo) // 1

//   // const는 변수의 선언과 동시에 할당을 해줘야한다.
//   const bar
//   bar = 2
//   // SyntaxError: Missing initializer in const declaration
//   console.log(bar)
// }
