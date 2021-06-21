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

arr.forEach(consoleMe)

/********************************************** */
