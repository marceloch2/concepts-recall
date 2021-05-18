const { Readable, Writable, pipeline } = require('stream')

// const fs = require('fs')
// const file = fs.createWriteStream('example.txt')
// file.write('hello, ')
// for (let i = 0; i < 10000; i++) {
//   file.write(`${i}`)
// }
// file.end('world!')

function* gen() {
  yield {
    test: 'object testing',
  }
  yield {
    test: 'object testing 2',
  }
  yield {
    test: 'object testing 3',
  }
}

const a = []

const myReadableStr = Readable.from(gen())

const myWritableStr = new Writable({
  objectMode: true,
  write: (chunk, encoding, callback) => {
    a.push(chunk.test)
    callback(null, true)
  },
})

const pipeLine = pipeline(myReadableStr, myWritableStr, () => {
  console.log(a)
  console.log('====================================')
  console.log('---FINAL---')
  console.log('====================================')
})
