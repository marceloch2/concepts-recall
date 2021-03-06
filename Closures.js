// Closejure
const test = f => {
  let first = `${f}, `
  return second => {
    return first + second
  }
}

const okCall = test('Marcelo')
console.log(okCall('Carneiro'))
console.log(okCall('Gilian'))
console.log(test('felipe')('lourenco'))

const Animal = kind => {
  const creator = 'Deus'
  const talkToCreator = outro => {
    console.log(`${kind} quer falar com ${outro ? outro : creator}`)
  }

  return {
    pingCriador: outro => {
      talkToCreator(outro)
    },
    andar: () => {
      console.log(`${kind} esta andando`)
    },
    pular: () => {
      console.log(`${kind} esta pulando`)
    }
  }
}

const dog = Animal('Cachorro')
const cat = Animal('Gato')
cat.pingCriador('Ala')
dog.pular()
