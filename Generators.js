function* myGenerator() {
  yield 'test 1'
  yield 'test 2'
  yield 'test 3'
}

const _gen = myGenerator()
console.log(_gen.next().value)
console.log(_gen.next().value)
console.log(_gen.next().value)

const f1 = () => {
  return 'F1!!!'
}

function* functionGeneratorStack() {
  yield f1()

  yield (a) => {
    return 5 + a
  }
}

const fnGen = functionGeneratorStack()
console.log(fnGen.next().value)
console.log(fnGen.next().value(10))
