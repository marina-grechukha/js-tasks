import chessBoard from '../src/task1'

describe('Chess Board', () => {
  it('returns default size 2x2', () => {
    expect(chessBoard({})).toEqual("* \n *\n")
  })

  it('returns custom size 4x4', () => {
    expect(chessBoard({ x: 4, y: 4 })).toEqual("* * \n * *\n* * \n * *\n")
  })

  it('returns board with odd number of chars 3x3', () => {
    expect(chessBoard({ x: 3, y: 3 })).toEqual("* *\n * \n* *\n")
  })

  it('returns board with custom char "#"', () => {
    expect(chessBoard({ x: 2, y: 2, char: '#' })).toEqual("# \n #\n")
  })

  it('returns an error if char is space', () => {
    expect(chessBoard({ x: 2, y: 2, char: ' ' })).toEqual('Error: Char must not be a space')
  })

  it('returns an error if sizes lower than 1', () => {
    expect(chessBoard({ x: 0, y: 0 })).toEqual('Error: Sizes must be greater than 0')
  })

  it('returns an error if sizes are not numbers', () => {
    expect(chessBoard({ x: 'string', y: true })).toEqual('Error: Sizes must be a number')
  })
})
