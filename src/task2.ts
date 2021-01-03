const envelopeMatcher = (a: number, b: number, c: number, d: number) => {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || typeof d !== 'number') {
    return 'Error: Sizes must be a numbers'
  }

  if (a > c && b > d || a > d && b > c) {
    return 1
  }

  if (a < c && b < d || a < d && b < c) {
    return 2
  }

  return 0
}

export default envelopeMatcher