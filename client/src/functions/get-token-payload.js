export default function getTokenPayload(token = '') {
  if (token) {
    const informativePart = token.split('.')[1]
    const payload = JSON.parse(window.atob(informativePart))

    return payload
  } else {
    console.warn('Token is not defined')
    return {}
  }
}
