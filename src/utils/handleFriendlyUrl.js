export function handleFriendlyUrl (url) {
  if (url.includes('-')) return url.split('-').join(' ')
  return url.split(' ').join('-')
}
