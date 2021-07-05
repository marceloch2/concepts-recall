import { pipeline, Readable, Writable, Transform } from 'stream'
import { promisify } from 'util'
import { createWriteStream } from 'fs'

const pipelineAsync = promisify(pipeline)
{
  const readableStream = Readable({
    read: function () {
      this.push('hello man!! 0')
      this.push('hello man!! 1')
      this.push('hello man!! 2')
      this.push(null)
    }
  })

  const writableStream = Writable({
    write(chunk, enconding, cb) {
      console.log('msg: ', chunk.toString())
      cb()
    }
  })

  await pipelineAsync(
    readableStream,
    // process.stdout
    writableStream
  )

  console.log('Process 01 acabou!')
  console.log('------------------')
}
{
  const readableStream = Readable({
    read() {
      for (let index = 0; index < 1e5; index++) {
        const person = {
          id: Date.now() + index,
          name: `Name-${index}`
        }
        const data = JSON.stringify(person)
        this.push(data)
      }

      // avisa que acabou os dados
      this.push(null)
    }
  })

  const writableMapToCSV = Transform({
    transform(chunk, enconding, cb) {
      const data = JSON.parse(chunk)
      const result = `${data.id},${data.name.toUpperCase()}\n`
      cb(null, result)
    }
  })

  const setHeader = Transform({
    transform(chunk, enconding, cb) {
      this.counter = this.counter ?? 0

      if (this.counter) {
        return cb(null, chunk)
      }

      this.counter += 1

      cb(null, 'id,name\n'.concat(chunk))
    }
  })

  await pipelineAsync(
    readableStream,
    writableMapToCSV,
    setHeader,
    // process.stdout
    createWriteStream('my.csv')
  )

  console.log('Process 02 acabou!')
  console.log('------------------')
}
