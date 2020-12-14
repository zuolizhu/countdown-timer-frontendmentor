export default function getPrevNumber( number, unit ) {
  if (unit === 'hours') {
    return number === 24 ? 0 : number
  }
  if (unit === 'minutes' || unit === 'seconds') {
    return number === 60 ? 0 : number
  }
  return number
}
