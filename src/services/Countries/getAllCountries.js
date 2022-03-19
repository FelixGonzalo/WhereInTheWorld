export const getAllCountries = () => {
  return window.fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
}
