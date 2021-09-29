export default function getQuery(queryStr = '') {
  if (queryStr) {
    const queryObj = {}
    const queryArr = (
      queryStr[0] === '?' ? queryStr.substring(1, queryStr.length) : queryStr
    ).split('&')

    queryArr.forEach((str) => {
      const [key, val] = str.split('=')

      queryObj[key] = val
    })

    return queryObj
  } else {
    console.warn('Query string is not defined')
    return {}
  }
}
