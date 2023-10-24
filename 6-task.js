function multipleAndIndex(a) {
  let multiple = 0
  let index = 0

  for (let i = 0; i <= a; i++) {
    multiple += i
    index = i
  }

  console.log('0 dan ' + a + " gacha sonlarni yig'indisi: " + multiple)
  console.log("a ning o'zini indeksi: " + index)
}

let a = 5
multipleAndIndex(a)
