const myCurry = a => {
  return b => {
    return c => {
      return a + b + c
    }
  }
}

console.log('====================================')
console.log(myCurry(1)(1)(1))
console.log('====================================')

// Holding values for later evaluation
const holderCurry = myCurry(5)(5)
setTimeout(() => {
  console.log(holderCurry(5))
}, 5000)

/////////////

const createBase = x => {
  return function (y) {
    return x + y
  }
}
// or => const createBase = x => y => x + y

const addSix = createBase(6)
console.log(addSix(10)) // => 16
console.log(addSix(21)) // => 27
