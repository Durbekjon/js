function findTwoElementsWithSum(array, a) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === a) {
        console.log(
          'Ikkita element (' +
            array[i] +
            ' va ' +
            array[j] +
            ") yig'indisi " +
            a +
            ' ga teng.'
        )
      }
    }
  }
}

let a = 8
let array = [2, 3, 4, 5, 6]
findTwoElementsWithSum(array, a)
