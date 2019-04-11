function pad(value: number) {
  return `0${value}`.slice(-2)
}

/*
  Convert to e.g. 01:06:12
*/
export function formatTimestampToColons(seconds: number) {
  const roundedSeconds = Math.round(seconds)
  const minutes = Math.floor(roundedSeconds / 60)
  const hours = Math.floor(minutes / 60)

  const formattedBase = `${pad(minutes % 60)}:${pad(roundedSeconds % 60)}`

  return hours > 0 ? `${pad(hours)}:${formattedBase}` : `${formattedBase}`
}

/*
  Convert to e.g. 01h06m12s
*/
export function formatTimestampToLetters(seconds: number) {
  const roundedSeconds = Math.round(seconds)
  const minutes = Math.floor(roundedSeconds / 60)
  const hours = Math.floor(minutes / 60)

  const formattedBase = `${pad(minutes % 60)}m${pad(roundedSeconds % 60)}s`

  return hours > 0 ? `${pad(hours)}h${formattedBase}` : `${formattedBase}`
}

/*
 * Encode object as URL params
 */
export function encodeUrlParams(params: {
  [key: string]: string | boolean | null
}): string {
  return Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&')
}

/*
 * Get array from object
 */
export function getArrayFromIdKeyedObject<T extends {}>(obj: {
  [key: string]: T
}) {
  return Object.keys(obj).map(key => obj[key])
}

/*
 * Get object from array
 */
export function getObjectFromArray<T extends { [key: string]: any }>(
  arr: T[],
  key: string
) {
  return arr.reduce<{}>((acc: { [key: string]: T }, item: T) => {
    const accKey: string = item[key]
    acc[accKey] = item

    return acc
  }, {})
}
