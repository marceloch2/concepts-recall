const assert = require('assert')
const PersonProto = {
  describe() {
    return 'Person named ' + this.name
  },
}
const jane = {
  __proto__: PersonProto,
  name: 'Jane',
}
const tarzan = {
  __proto__: PersonProto,
  name: 'Tarzan',
}

const func = function funcExpr() {
  return funcExpr
}
assert.equal(func(), func)

// The name `funcExpr` only exists inside the function:
assert.throws(() => funcExpr(), ReferenceError)
// In contrast, the name of a function declaration is accessible inside the current scope:

function funcDecl() {
  return funcDecl
}

// The name `funcDecl` exists in the current scope
assert.equal(funcDecl(), funcDecl)
