export const getCountriesByCodes = codes => {
  return window
    .fetch(`https://restcountries.com/v3.1/alpha?codes=${codes.join(',')}`)
    .then(response => response.json())
}
