function findSecondLargestNumber(array) {
  if (array.length < 2) {
    console.log('The array has two or fewer elements.')
    return
  }

  let largest = array[0]
  let secondLargest = Number.MIN_SAFE_INTEGER

  for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
      secondLargest = largest
      largest = array[i]
    } else if (array[i] > secondLargest && array[i] !== largest) {
      secondLargest = array[i]
    }
  }

  if (secondLargest === Number.MIN_SAFE_INTEGER) {
    console.log('There is no second largest element.')
  } else {
    console.log('Second largest element: ' + secondLargest)
  }
}

let array = [5, 8, 2, 6, 3, 9]
findSecondLargestNumber(array)
