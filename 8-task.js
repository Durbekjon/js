function displayDigitsCount(number) {
  let digits = number.toString().split('')
  console.log('Number of digits: ' + digits.length)
}

let n = 1234903984308091
displayDigitsCount(n)
