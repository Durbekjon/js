function sumOfDigits(n) {
  let sum = 0
  while (n > 0) {
    sum += n % 10
    n = Math.floor(n / 10)
  }
  return sum
}

let n = 12
let result = sumOfDigits(n)

console.log('Sum of the digits of ' + n + ': ' + result)
