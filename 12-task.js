function countOccurrences(arr, n) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      count++
    }
  }
  return count
}

let n = 4
let array = [2, 4, 6, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]

let result = countOccurrences(array, n)

console.log('Massivda ' + n + ' soni ' + result + ' marta qatnashgan.')
