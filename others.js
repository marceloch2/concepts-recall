const createBase = x => {
  return y => x + y
}

const withSix = createBase(6)
console.log(withSix(10)) // ===> 16
console.log(withSix(20)) // ===> 26

/**
 * Implement the "counter" function
 */

const counter = () => {
  let sum = 0

  return {
    add: x => {
      sum += x
    },
    retrieve: () => {
      return sum
    }
  }
}

const c = counter()
c.add(5)
c.add(9)
console.log(c.retrieve()) // => 14

/**
 * Rewrite the inner code of the
 * "doSomethingAsync" function below so that the
 * calls "a" and "b" will run in parralel
 */

function timeout(x) {
  return new Promise(resolve => setTimeout(() => resolve(x), 1000))
}

const doSomethingAsync = async () => {
  const a = await timeout('a')
  const b = await timeout('b')
  console.log('> done', a, b)
}

const doSomethingAsyncParralel = async () => {
  const [a, b] = await Promise.all([timeout('a'), timeout('b')])
  console.log('>> done', a, b)
}

doSomethingAsync()
doSomethingAsyncParralel()

// Write 2 different implementations of methods to
// remove duplicates from the array

const arrayWithDuplicates = [1, 2, 3, 3, 'a', 'a', 'b', 1]

const removeOne = arr => {
  return Array.from(new Set(arr))
}

const removeTwo = arr => {
  return arr.reduce((acc, current) => {
    return acc.indexOf(current) < 0 ? [...acc, current] : acc
  }, [])
}

console.log(removeOne(arrayWithDuplicates))
console.log(removeTwo(arrayWithDuplicates))

/**
 * 1. How would you calculate the sum of the array below?
 * 2. How would you increase the value of every number by 5?
 */
const myArrayOfNumbers = [2, 3, 5, 10]

const sum = arr => arr.reduce((acc, current) => acc + current, 0)
const byFive = arr => arr.map(item => item + 5)

console.log(sum(myArrayOfNumbers))
console.log(byFive(myArrayOfNumbers))

/**
 * Implement "moveZeros"
 * It takes an array and moves all of the zeros to the end, preserving the order of the other elements.
 */

const moveZeros = arr => {
  console.time('111')
  const zeros = arr.filter(i => i === 0)
  const noZeros = arr.filter(i => i !== 0)
  console.timeEnd('111')
  return [...noZeros, ...zeros]
}

const moveZeros2 = arr => {
  console.time('222')
  const rest = []
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === 0) {
      rest.push(...arr.splice(i, 1))
    }
  }
  console.timeEnd('222')
  return [...arr, ...rest]
}

// returns[false,1,1,2,1,3,"a",0,0]
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']))
console.log(moveZeros2([false, 1, 0, 1, 2, 0, 1, 3, 'a']))
