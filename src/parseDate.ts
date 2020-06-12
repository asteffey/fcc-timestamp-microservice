const INVALID_DATE = 'INVALID_DATE'

export function isValidDate (date: Date) {
  return !isNaN(date.getTime())
}

export function parseDate (value: string | number) {
  const date = new Date(value)
  if (isValidDate(date)) {
    return date
  } else {
    throw INVALID_DATE
  }
}

export default parseDate
