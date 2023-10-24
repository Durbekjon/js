function isPerfectNumber(number) {
  if (number <= 0) {
    return false
  }

  let divisorsSum = 0
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      divisorsSum += i
    }
  }

  return divisorsSum === number
}

let a = 28
let result = isPerfectNumber(a)

if (result) {
  console.log(true)
} else {
  console.log(false)
}
