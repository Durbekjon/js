function isPalindromeNumber(n) {
  const strN = n.toString()
  const len = strN.length
  for (let i = 0; i < len / 2; i++) {
    if (strN[i] !== strN[len - 1 - i]) {
      return false
    }
  }
  return true
}

let n = 123211
let result = isPalindromeNumber(n)

if (result) {
  console.log(n + ' is a palindrome number.')
} else {
  console.log(n + ' is not a palindrome number.')
}
