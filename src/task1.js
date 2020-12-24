const chessBoard = (x = 2, y = 2, char = '*') => {
  let result = ''
  let chars = [
    [char, ' '], // odd line
    [' ', char]  // even line
  ]

  if (x < 1 || y < 1) {
    return 'Error: Sizes must be greater than 0'
  }

  if (typeof x !== 'number' || typeof y !== 'number') {
    return 'Error: Sizes must be a number'
  }

  if (char === ' ') {
    return 'Error: Char must not be a space'
  }

  for (let lineCount = 0; lineCount < y; lineCount++) {
    const lineIndex = lineCount % 2

    for (let charCount = 0; charCount < x; charCount++) {
      const charIndex = charCount % 2

      result += chars[lineIndex][charIndex]
    }

    result += "\n"
  }

  return result
}

export default chessBoard
