import chessBoard from '../src/task1'

describe('Chess Board', () => {
  it('returns default size 2x2', () => {
    expect(chessBoard()).toEqual("* \n *\n")
  })

  it('returns custom size 4x4', () => {
    const x = 4
    const y = 4

    expect(chessBoard(x, y)).toEqual("* * \n * *\n* * \n * *\n")
  })

  it('returns board with odd number of chars 3x3', () => {
    const x = 3
    const y = 3

    expect(chessBoard(x, y)).toEqual("* *\n * \n* *\n")
  })

  it('returns board with custom char "#"', () => {
    const x = 2
    const y = 2
    const char = '#'

    expect(chessBoard(x, y, char)).toEqual("# \n #\n")
  })

  it('returns an error if char is space', () => {
    const x = 2
    const y = 2
    const char = ' '

    expect(chessBoard(x, y, char)).toEqual('Error: Char must not be a space')
  })

  it('returns an error if sizes lower than 1', () => {
    const x = 0
    const y = 0

    expect(chessBoard(x, y)).toEqual('Error: Sizes must be greater than 0')
  })

  it('returns an error if sizes are not numbers', () => {
    const x = 'string'
    const y = true

    expect(chessBoard(x, y)).toEqual('Error: Sizes must be a number')
  })
})
