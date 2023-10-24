function num(a) {
  if (a >= 1 && a <= 9) {
    return 1
  } else if (a >= 10 && a <= 99) {
    return 2
  } else if (a >= 100 && a <= 999) {
    return 3
  } else {
    return 0
  }
}

let a = 42
let result = num(a)

console.log(a + ' soni ' + result + ' honali son.')
