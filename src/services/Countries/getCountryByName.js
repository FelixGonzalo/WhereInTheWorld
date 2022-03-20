export const getCountryByName = name => {
  return window
    .fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => response.json())
}
