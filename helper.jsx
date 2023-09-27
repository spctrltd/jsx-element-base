export const isEmpty = element => {
  if (typeof element === 'string') {
    return element.trim().length === 0
  }
  if (Array.isArray(element)) {
    return element.length === 0
  }
  if (typeof element === 'object' && element !== null) {
    return Object.keys(element).length === 0
  }
  if (element === null || element === undefined) {
    return true
  }
  return false
}
