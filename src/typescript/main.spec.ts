import { specTest } from './main'

describe('SayHello', () => {
  test('toBe "Hello! TypeScript And Jest!"', () => {
    expect(specTest).toBe('Hello! TypeScript And Jest!')
  })
})
