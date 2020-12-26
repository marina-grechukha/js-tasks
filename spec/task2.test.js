import envelopeMatcher from '../src/task2'

describe('Envelope Matcher', () => {
  it('checks envelopeMatcher is a function', () => {
    expect(typeof envelopeMatcher).toBe('function')
  })

  it('returns 1 if a > c and b > d', () => {
    expect(envelopeMatcher(10, 10, 5, 5)).toEqual(1)
  })

  it('returns 1 if a > d and b > c', () => {
    expect(envelopeMatcher(18, 10, 4, 8)).toEqual(1)
  })

  it('returns 2 if a < c and b < d', () => {
    expect(envelopeMatcher(4, 3, 6, 8)).toEqual(2)
  })

  it('returns 2 if a < d and b < c', () => {
    expect(envelopeMatcher(2, 3, 4, 3)).toEqual(2)
  })

  it('returns 0 if a == c and b == d', () => {
    expect(envelopeMatcher(2, 3, 2, 3)).toEqual(0)
  })

  it('returns 0 if a == d and b == c', () => {
    expect(envelopeMatcher(3, 2, 2, 3)).toEqual(0)
  })

  it('returns 0 if a > c and b < d', () => {
    expect(envelopeMatcher(5, 2, 3, 3)).toEqual(0)
  })

  it('returns 0 if a < d and b > c', () => {
    expect(envelopeMatcher(2, 5, 3, 3)).toEqual(0)
  })

  it('returns error if sizes are not numbers', () => {
    expect(envelopeMatcher(true, 5, 3, 3)).toEqual('Error: Sizes must be a numbers')
  })

})