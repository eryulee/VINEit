


const DOMAIN = 'https://api.spoonacular.com/food/wine/recommendation'
const API_KEY = 'e804b9f68f3945eb901463f2b88baf78'
// const API_KEY = '621f424e835c4c40b570dcf2b35d8828'
// const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`


// select drop down menu list and put it in a constant
// select form and put it in a constant
const selectTag = document.querySelector('#select-wine')
const form = document.querySelector('form')


// select submit button and put it in a constant
// select main div where all the data from api will be appended and put it in const main Data
const getResults = document.querySelector('#button2')
const mainData = document.querySelector('main')


// make request
const getWineType = async () => {
  try {
    // const wineURL = `https://api.spoonacular.com/food/wine/recommendation?wine=${wineType}&number=10&apiKey=621f424e835c4c40b570dcf2b35d8828`
    const inputValue = document.querySelector('select').value
    const wineURL = `${DOMAIN}?wine=${inputValue}&number=15&apiKey=${API_KEY}`
    const response = await axios.get(wineURL)
    console.log(response.data.recommendedWines)
  removeElement(mainData)
     renderList(response.data.recommendedWines)
  } catch (error) {
    console.error(error)
  }

}
console.log(getResults)

// add event listener for form to work
form.addEventListener('submit', (e) => {
  e.preventDefault()

// invoke function
  getWineType()
 })


function renderList(wineList) {
  
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














