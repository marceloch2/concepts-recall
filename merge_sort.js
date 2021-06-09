const _merge = (arrLeft, arrRight) => {
  const result = []

  while (arrLeft.length && arrRight.length) {
    result.push(arrLeft[0] < arrRight[0] ? arrLeft.shift() : arrRight.shift())
  }

  // if still elements left in the left array
  while (arrLeft.length) {
    result.push(arrLeft.shift())
  }
  // if still elements left in the right array
  while (arrRight.length) {
    result.push(arrRight.shift())
  }

  return result
}

const mergeSort = arr => {
  if (arr.length < 2) {
    // [ x ] => [ x ]
    return arr
  }

  const pivo = Math.floor(arr.length / 2)
  const arrLeft = arr.slice(0, pivo)
  const arrRight = arr.slice(pivo, arr.length)

  const sortedLeft = mergeSort(arrLeft)
  const sortedRight = mergeSort(arrRight)

  return _merge(sortedLeft, sortedRight)
}

console.time('mergeSort')
const arr = [5, 3, 9, 6, 1, 9, 2, 7, -4, 10]
const merged = mergeSort(arr)
console.log(merged)
console.timeEnd('mergeSort')
