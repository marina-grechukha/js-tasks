const envelopeMatcher = (a, b, c, d) => {
  if (a > c && b > d || a > d && b > c) {
    return 1
  }

  if (a < c && b < d || a < d && b < c) {
    return 2
  }

  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || typeof d !== 'number') {
    return 'Error: Sizes must be a numbers'
  }

  return 0
}

export default envelopeMatcher