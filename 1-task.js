function createor(a, b, c) {
  if (a == 0 || b == 0 || c == 0) {
    console.log(0)
  } else {
    let num = a * 100 + b * 10 + c

    console.log(num)
  }
}

let a = 5
let b = 1
let c = 7
createor(a, b, c)
