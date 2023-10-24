function sortAndPrintAscending(array) {
  const sortedArray = array.slice().sort((a, b) => a - b)
  console.log('Tartiblangan massiv: ' + sortedArray)
}

let array = [7, 2, 5, 1, 9] 
sortAndPrintAscending(array)
