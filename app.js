


const DOMAIN = 'https://api.spoonacular.com/food/wine/recommendation'
const API_KEY = 'e804b9f68f3945eb901463f2b88baf78'
// const API_KEY = '621f424e835c4c40b570dcf2b35d8828'
// const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`



// create dynamic dropdown menu by type of wine
//create text search menu by wine name 

// select drop down menu list and put it in a constant
// select form and put it in a constant
const selectTag = document.querySelector('#select-wine')
const form = document.querySelector('form')


// select submit button and put it in a constant
// select main div where all the data from api will be appended and put it in const main Data
const getResults = document.querySelector('#button2')
const mainData = document.querySelector('main')



const getWineType = async () => {
  try {
    // let wineType = 'cabernet sauvignon'
    // const wineSearchValue = document.querySelector('#select-wine').value
    // console.log(wineSearchValue)
    // const wineURL = `https://api.spoonacular.com/food/wine/recommendation?wine=${wineType}&number=10&apiKey=621f424e835c4c40b570dcf2b35d8828`
    const inputValue = document.querySelector('select').value
    const wineURL = `${DOMAIN}?wine=${inputValue}&number=9&apiKey=${API_KEY}`
    const response = await axios.get(wineURL)
    console.log(response.data.recommendedWines)
  removeElement(mainData)
     renderList(response.data.recommendedWines)


    // return response
    // return wineList
  } catch (error) {
    console.error(error)
  }

}
console.log(getResults)

form.addEventListener('submit', (e) => {
  e.preventDefault()
  // console.log(inputValue)
  getWineType()
 
  
})

function renderList(wineList) {
  // console.log(`this is the wine list`, wineList)
  
  
  wineList.forEach((wine) => {
    console.log(wine.score)
    
    //wine Image
    let wineImg = document.createElement('img')
    wineImg.src = wine.imageUrl
    mainData.append(wineImg)
  
    //wine name
    let wineTitle = document.createElement('h3')
    wineTitle.textContent = wine.title
    mainData.append(wineTitle)

     //wine score
     let wineScore = document.createElement('h4')
     wineScore.textContent= `wine score: ${wine.averageRating}`
     mainData.append(wineScore)

    // wine price
    let winePrice = document.createElement('h4')
    winePrice.textContent = wine.price
    mainData.append(winePrice)

   //wine description
    let wineDesc = document.createElement('p')
    wineDesc.textContent = wine.description
    mainData.append(wineDesc)

  
    })

}

function removeElement(element) {
  while (element.lastChild) {
    element.removeChild(element.lastChild)
  }
}














