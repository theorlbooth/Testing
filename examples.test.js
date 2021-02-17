
const { expect } = require('@jest/globals')
const { sum, product } = require('./examples')


// * Addition
// ! ------------
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('adds 15 + -10 to equal 5', () => {
  expect(sum(15, -10)).toBe(5)
})


// * Multiplication
// ! ------------
test('product of 2 and 3 to equal 6', () => {
  expect(product(2, 3)).toBe(6)
})

test('product of 2 and -3 to equal -6', () => {
  expect(product(2, -3)).toBe(-6)
})


// * Object Addignment 
// ! ------------
test('object assignment', () => {
  const data = { one: 1 }
  data['two'] = 2
  expect(data).toEqual({ one: 1, two: 2 })
})


// * Opposite matchers
// ! ------------
test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0)
    }
  }
})


// * Truthiness 
// ! ------------
test('false', () => {
  const f = false
  expect(f).not.toBeNull()
  expect(f).toBeDefined()
  expect(f).not.toBeUndefined()
  expect(f).not.toBeTruthy()
  expect(f).toBeFalsy()
})


// * Numbers
// ! ------------
test('three plus three', () => {
  const value = 3 + 3 
  expect(value).toBeGreaterThan(5)
  expect(value).toBeGreaterThanOrEqual(5.5)
  expect(value).toBeLessThan(7)
  expect(value).toBeLessThanOrEqual(6.5)
})

test('floats', () => {
  const value = 0.3 + 0.3
  expect(value).toBeCloseTo(0.6)
})


// * Strings 
// ! ------------
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/)
})

test('but there is a "stop" in Cristopher', () => {
  expect('Christoph').toMatch(/stop/)
})


// * Arrays 
// ! ------------
test('the sipping list has milk on it', () => {
  const shoppingList = [
    'bread',
    'milk',
    'butter',
    'eggs'
  ]
  
  expect(shoppingList).toContain('milk')
  expect(new Set(shoppingList)).toContain('milk')
})