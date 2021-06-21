const handler = {
  get: function (obj, prop) {
    if (prop === 'id') {
      // Check if the id is being accessed
      throw new Error('Cannot access private properties!') // Throw an error
    }
    return obj[prop]
  },
  set: function (obj, prop, value) {
    console.log(`${prop} is being set to ${value}`)
    obj[prop] = value
  }
}

const initialObj = {
  id: 1,
  name: 'Foo Bar'
}

const enhancedProxy = new Proxy(initialObj, handler)

console.log('---Enhanced: ')
console.log(enhancedProxy.name)

enhancedProxy.name = 'Felipe'

console.log(enhancedProxy.name)
console.log(enhancedProxy.id) // .>>>>> Error
