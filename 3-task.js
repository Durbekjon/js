function check(yil) {
  if ((yil % 4 == 0 && yil % 100 != 0) || yil % 400 == 0) {
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
