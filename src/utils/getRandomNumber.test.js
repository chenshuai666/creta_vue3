import { expect, test } from 'vitest'
import { getRandomInt } from './getRandomNumber'

test('random number from 0 to 10', () => {
  expect(getRandomInt(0, 10)).toBeGreaterThanOrEqual(0)
  expect(getRandomInt(0, 10)).toBeLessThanOrEqual(10)
})
