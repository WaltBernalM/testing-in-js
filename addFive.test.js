const { default: TestRunner } = require('jest-runner')
const addFive = require('./addFive')

test('return 6', () => {
  expect(addFive(1)).toBe(6)
})