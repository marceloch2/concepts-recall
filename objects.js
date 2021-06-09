// Object literal
const felipe = {
  firstName: 'felipe',
  lastName: 'lourenco'
}

console.log(felipe.firstName, felipe.lastName)

const camila = felipe
camila.firstName = 'camila'

console.log(felipe.firstName, felipe.lastName)
console.log(camila === felipe) // pointing to the same memory's spot

function Person(first, last) {
  this.firstName = first
  this.lastName = last

  this.sayHello = () => `Hello ${this.firstName} ${this.lastName}`
}

const fe = new Person('felipe', 'lourenco')
const ca = new Person('camila', 'marchi')

console.log(fe.sayHello())
console.log(ca.sayHello())

fe.newMethod = () => `this is a new method`

try {
  console.log(fe.newMethod())
  console.log(ca.newMethod()) // ===> ca doesn't have the new method
} catch (error) {
  console.log(error)
}

Person.prototype.newNewMethod = () => `this is a new NEW method`

console.log(fe.newNewMethod())
console.log(ca.newNewMethod())
