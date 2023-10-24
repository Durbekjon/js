function check(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true
  } else {
    return false
  }
}

let year = 2028
let kabisa = check(year)

if (kabisa) {
  console.log(year + '-yil kabisa yili')
} else {
  console.log(year + '-yil kabisa yili emas')
}
