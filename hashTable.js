function hashStringToInt(str, tableSize) {
  let hash = 17

  for (let i = 0; i < str.length; i++) {
    hash = (13 * hash * str.charCodeAt(i)) % tableSize
  }

  return hash
}

class HashTable {
  table = new Array(3)
  numItems = 0

  resize = () => {
    const newTable = new Array(this.table.length * 2)

    // Need to re-hash the table
    this.table.forEach(item => {
      if (item) {
        item.forEach(([key, value]) => {
          const index = hashStringToInt(key, newTable.length)
          if (newTable[index]) {
            newTable[index].push([key, value])
          } else {
            newTable[index] = [[key, value]]
          }
        })
      }
    })

    this.table = newTable
  }

  setItem = (key, value) => {
    this.numItems++
    const loadFactor = this.numItems / this.table.length

    if (loadFactor > 0.8) {
      // Resize table
      this.resize()
    }

    const index = hashStringToInt(key, this.table.length)

    // to prevent collision
    if (this.table[index]) {
      this.table[index].push([key, value])
    } else {
      this.table[index] = [[key, value]]
    }
  }

  getItem = key => {
    const index = hashStringToInt(key, this.table.length)

    if (!this.table[index]) {
      return null
    }

    // O(n)
    return this.table[index].find(x => x[0] === key)[1]
  }
}

const table = new HashTable()
table.setItem('firstName', 'Bob')
table.setItem('lastName', 'Sinclar')
table.setItem('age', 33)
table.setItem('dob', '1/2/3')

console.log(table.table.length)
console.log(table.getItem('firstName'))
console.log(table.getItem('lastName'))
console.log(table.getItem('age'))
console.log(table.getItem('dob'))
