const { sum, sumFixed } = require('./CuriousFactsInJs')

describe('sum', () => {
  test('expect sum of 1 + 2 to be 3', () => {
    expect(sum('1', '2')).toBe('3')
  })

  test('expect sum of 100000 + 200000 to be 300000', () => {
    expect(sum('100000', '200000')).toBe('300000')
  })

  test('expect sum of 9999999999999999999999 + 1 to be 10000000000000000000000', () => {
    expect(sum('9999999999999999999999', '1')).not.toBe('10000000000000000000000')
  })
})

describe('sumFixed', () => {
  test('expect sumFixed of 1 + 2 to be 3', () => {
    expect(sumFixed('1', '2')).toBe('3')
  })

  test('expect sumFixed of 100000 + 200000 to be 300000', () => {
    expect(sumFixed('100000', '200000')).toBe('300000')
  })

  test('expect sumFixed of 9999999999999999999999 + 1 to be 10000000000000000000000', () => {
    expect(sumFixed('9999999999999999999999', '1')).toBe('10000000000000000000000')
  })
})
