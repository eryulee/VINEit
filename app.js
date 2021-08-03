const DOMAIN = 'https://api.spoonacular.com/food/wine/recommendation'
const API_KEY = 'e804b9f68f3945eb901463f2b88baf78'
// const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`



// create dynamic dropdown menu by type of wine
//create text search menu by wine name 
// hardcode selection list for drop-down menu: white wine, red wine, dessert wine, rose wine, sparkling wine, sherry, vermouth, fruit wine, and mead.

const selectTag = document.querySelector('#select-wine')
const form = document.querySelector('form')
const dataContainer = document.querySelector('#wine-results')
const searchButton = document.querySelector('#button1')
const getResults = document.querySelector('#button2')

// console.log(form)
// console.log(button)


const getAllWines = async () => {
  try {
    
    const wineSearchValue = document.querySelector('#wine-search').value
    // console.log(wineSearchValue)
    // const wineURL = `https://api.spoonacular.com/food/wine/recommendation?wine=${wineType}&number=10&apiKey=e804b9f68f3945eb901463f2b88baf78`
    const wineURL = `${DOMAIN}?wine=${wineSearchValue}&number=10&apiKey=${API_KEY}`
    const response = await axios.get(wineURL)
    // console.log(response.data.recommendedWines)
      
    const wineList = Object.keys(response.data.recommendedWines)

    return wineList
  } catch (error) {
    console.error(error)
  }
}
searchButton.addEventListener('click', (e) => {
  e.preventDefault()
  getAllWines() 
})

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
getResults.addEventListener('click', (e) => {
  e.preventDefault()
  getWineType()
 
  
})

function renderList(wineList) {
  console.log(wineList)
  
  let section = document.querySelector('wineItems')
  wineList.forEach((wine) => {
    let wineStats = document.createElement('div')
    section.append(wineStats)

    //wine name
    let wineTitle = document.createElement('h2')
    wineTitle.textContent = `${data.recommendedWines.title}`
    wineStats.append(wineTitle)

    //wine Image

    let wineImg = document.createElement('img')
    wineImg.src = `${data.recommendedWines.title}`
    wineStats.append(wineTitle)

    //wine score
    let wineScore = document.createElement('h3')
    wineScore.textContent = `${data.recommendedWines.score}`
    wineStats.append(wineScore)

    //wine description
    let wineDesc = document.createElement('p')
    wineDesc.textContent = `${data.recommendedWines.description}`
    wineStats.append(wineDesc)

    // wine price
    let winePrice = document.createElement('h5')
    winePrice.textContent = `${data.recommendedWines.price}`
    wineStats.append(winePrice)
    })

}

// render wine Data

const getData = async () => {
  try {
    const wineInput =
      document.querySelector('input').value
    console.log(wineInput)
    const data = await axios.get(`https://api.spoonacular.com/food/wine/recommendation?wine=${wineInput}&number=10&apiKey=e804b9f68f3945eb901463f2b88baf78`)
    console.log(data.data)
    return data
    
  } catch (err) {
    console.error(err)
  }
}













