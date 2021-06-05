// Inside an array, find a pair of numbers that is equal to a sum
// e.g.: findPair([1, 2, 4, 4], 8) ====> [4, 4]
// e.g.: findPair([1, 2, 3, 9], 8) ====> null

function findPair(arr, sum) {
  console.time('findPair')
  let result = []

  arr.forEach((el, i) => {
    const res = arr.findIndex((item, j) => i !== j && el + item === sum)

    if (res >= 0) {
      result = [el, arr[res]]
    }
  })

  console.timeEnd('findPair')
  return result.length ? result : null
}

console.log('=========================')
console.log(findPair([4, 2, 4, 1], 8))
console.log(findPair([1, 2, 4, 4], 8))
console.log(findPair([1, 2, 3, 9], 8))

// Only works with sorted array
function pairReduce(arr, sum) {
  console.time('pairReduce')
  const result = arr.reduce((acc, current, i) => {
    const res = arr.find((el, j) => i !== j && current + el === sum)
    return !!res ? [current, res] : null
  }, [])

  console.timeEnd('pairReduce')
  return result
}

console.log('=========================')
console.log(pairReduce([4, 2, 4, 1], 8))
console.log(pairReduce([1, 2, 4, 4], 8))
console.log(pairReduce([1, 2, 3, 9], 8))

// Only works with sorted array
function findPairNSolution(arr, sum) {
  console.time('findPairNSolution')
  let i = 0
  let j = arr.length - 1

  while (i < j) {
    if (arr[i] + arr[j] === sum) {
      console.timeEnd('findPairNSolution')
      return [arr[i], arr[j]]
    } else if (arr[i] + arr[j] < sum) {
      i++
    } else {
      j--
    }
  }

  console.timeEnd('findPairNSolution')
  return null
}

console.log('=========================')
console.log(findPairNSolution([4, 2, 4, 1], 8))
console.log(findPairNSolution([1, 2, 4, 4], 8))
console.log(findPairNSolution([1, 2, 3, 9], 8))

function hasPairWithSum(arr, sum) {
  console.time('hasPairWithSum')
  const complements = []

  for (const value of arr) {
    if (complements.indexOf(sum - value) >= 0) {
      console.timeEnd('hasPairWithSum')
      return [sum - value, value]
    }

    complements.push(sum - value)
  }

  console.timeEnd('hasPairWithSum')
  return null
}

console.log('=========================')
console.log(hasPairWithSum([4, 2, 4, 1], 8))
console.log(hasPairWithSum([1, 2, 4, 4], 8))
console.log(hasPairWithSum([1, 2, 3, 9], 8))
