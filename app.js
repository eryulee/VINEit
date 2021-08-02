// create dynamic dropdown menu
// make request and concert response to dropdown menu 
// hardcode selection list for drop-down menu: white wine, red wine, dessert wine, rose wine, sparkling wine, sherry, vermouth, fruit wine, and mead.

const selectTag = document.querySelector('#select-wine')
const form = document.querySelector('form')
const dataContainer = document.querySelector('#wine-results')

// console.log(form)

// const wineList = ["white wine, red wine, dessert wine, rose wine, sparkling wine, sherry, vermouth, fruit wine, mead"]

const getAllWines = async () => {
  try {
    const wineURL = "https://api.spoonacular.com/food/wine/recommendation?wine=white wine&number=5&apiKey=e804b9f68f3945eb901463f2b88baf78"
    const response = await axios.get(wineURL)
    console.log(response.data.message)
    // const wineList = Object.keys(response.data.message)
    // console.log(wineList)

    // return wineList
  } catch (error) {
    console.error(error)
  }
}

getAllWines()
