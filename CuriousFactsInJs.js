// Bellow function consoleMe will just console.log four times, because Ecma specs for the ForEach method
// Implements the check for every slot and check if it was assigned with a value before
let arr = new Array(50) // size 50

arr[10] = 'Testing 1'
arr[20] = 'Testing 2'
arr[21] = null
arr[22] = undefined

function consoleMe(item) {
  console.log(item)
}

// arr.forEach(consoleMe)

/********************************************** */

// Create a function that receive 2 numbers strings (e. g. '2' and '1') sum those values and covert it back to string as result

function sum(a, b) {
  return (Number(a) + Number(b)).toString()
}

function sumFixed(a, b) {
  let result = ''
  let hasOne = false

  while (a.length || b.length) {
    const sum = parseInt(a[a.length - 1] || 0) + parseInt(b[b.length - 1] || 0) + +hasOne
    hasOne = sum >= 10
    result = `${sum.toString().split('')[1] || sum}${result}`

    a = a.slice(0, -1)
    b = b.slice(0, -1)
  }

  return hasOne ? `1${result}` : result
}

module.exports = { sum, sumFixed }
