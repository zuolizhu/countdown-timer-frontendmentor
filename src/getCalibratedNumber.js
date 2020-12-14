export default function getCalibratedNumber( number, unit ) {
  if (unit === 'hours') {
    return number === -1 ? 23 : number
  }
  if (unit === 'minutes' || unit === 'seconds') {
    return number === -1 ? 59 : number
  }
  return number
}
