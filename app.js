const DOMAIN = 'https://api.spoonacular.com/food/wine/recommendation'
const API_KEY = 'e804b9f68f3945eb901463f2b88baf78'
// const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`



// create dynamic dropdown menu
// make request and concert response to dropdown menu 
// hardcode selection list for drop-down menu: white wine, red wine, dessert wine, rose wine, sparkling wine, sherry, vermouth, fruit wine, and mead.

const selectTag = document.querySelector('#select-wine')
const form = document.querySelector('form')
const dataContainer = document.querySelector('#wine-results')
const searchButton = document.querySelector('#button1')
const secondButton = document.querySelector('#button2')
// const wineSelect = document.querySelector('#select-wine')
// console.log(form)
// console.log(button)
// const wineList = ["white wine, red wine, dessert wine, rose wine, sparkling wine, sherry, vermouth, fruit wine, mead"]

const getAllWines = async () => {
  try {
    // let wineType = 'cabernet sauvignon'
    const wineSearchValue = document.querySelector('#wine-search').value
    console.log(wineSearchValue)
    // const wineURL = `https://api.spoonacular.com/food/wine/recommendation?wine=${wineType}&number=10&apiKey=e804b9f68f3945eb901463f2b88baf78`
    const wineURL = `${DOMAIN}?wine=${wineSearchValue}&number=10&apiKey=${API_KEY}`
    const response = await axios.get(wineURL)
    console.log(response.data.recommendedWines)
      // .then(res => {
      //   console.log(res.data)
      // })


    // console.log(responseObject)
    // object.keys returns an array from winerecommendations list in API Docs
    // const wineList = Object.keys(response.data.message)
    // console.log(wineList)

    return response
    // return wineList
  } catch (error) {
    console.error(error)
  }
}
searchButton.addEventListener('click', (e) => {
  e.preventDefault()
  getAllWines() 
})
// getAllWines()


const getWineType = async () => {
  try {
    // let wineType = 'cabernet sauvignon'
    const wineSearchValue = document.querySelector('#select-wine').value
    console.log(wineSearchValue)
    // const wineURL = `https://api.spoonacular.com/food/wine/recommendation?wine=${wineType}&number=10&apiKey=e804b9f68f3945eb901463f2b88baf78`
    const wineURL = `${DOMAIN}?wine=${wineSearchValue}&number=10&apiKey=${API_KEY}`
    const response = await axios.get(wineURL)
    console.log(response.data.recommendedWines)
      // .then(res => {
      //   console.log(res.data)
      // })


    // console.log(responseObject)
    // object.keys returns an array from winerecommendations list in API Docs
    // const wineList = Object.keys(response.data.message)
    // console.log(wineList)

    return response
    // return wineList
  } catch (error) {
    console.error(error)
  }
}
secondButton.addEventListener('click', (e) => {
  e.preventDefault()
  getWineType() 
})

// create form option tags from request



