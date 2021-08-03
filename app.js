// let recommendedWines = [
//   {
//       "id": 447938,
//       "title": "Rombauer Merlot",
//       "averageRating": 0.96,
//       "description": "Enticing and lively red color; beautifully aromatic with black cherry and ripe plum. On the palate a purity of blackcurrant, cedar and mint flavors blend together seamlessly. Soft and supple, this wine has a medium-bodied mouth-feel with plush tannins that integrate with the generous finish.Our favorite pairings for this wine include chicken parmesan, cedar-planked salmon over wild rice, and mushroom pizza.",
//       "imageUrl": "https://spoonacular.com/productImages/447938-312x231.jpg",
//       "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Frombauer-merlot-2008%2F116883",
//       "price": "$25.59",
//       "ratingCount": 5.0,
//       "score": 0.8975
//   },
//   {
//       "id": 430475,
//       "title": "NV The Big Kahuna Merlot",
//       "averageRating": 0.9,
//       "description": "A ripe and rounded Merlot with notes of plum, blackberry, and hint of spice.",
//       "imageUrl": "https://spoonacular.com/productImages/430475-312x231.jpg",
//       "link": "https://www.amazon.com/Big-Kahuna-Merlot-Red-Wine/dp/B01F5XPTUW?tag=spoonacular-20",
//       "price": "$6.99",
//       "ratingCount": 4.0,
//       "score": 0.823076923076923
//   }
// ]


const DOMAIN = 'https://api.spoonacular.com/food/wine/recommendation'
// const API_KEY = 'e804b9f68f3945eb901463f2b88baf78'
const API_KEY = '621f424e835c4c40b570dcf2b35d8828'
// const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`



// create dynamic dropdown menu by type of wine
//create text search menu by wine name 
// hardcode selection list for drop-down menu: white wine, red wine, dessert wine, rose wine, sparkling wine, sherry, vermouth, fruit wine, and mead.

const selectTag = document.querySelector('#select-wine')
const form = document.querySelector('form')



const getResults = document.querySelector('#button2')
const mainData = document.querySelector('main')
// console.log(mainData)

// console.log(form)
// console.log(button)


const getWineType = async () => {
  try {
    // let wineType = 'cabernet sauvignon'
    // const wineSearchValue = document.querySelector('#select-wine').value
    // console.log(wineSearchValue)
    // const wineURL = `https://api.spoonacular.com/food/wine/recommendation?wine=${wineType}&number=10&apiKey=621f424e835c4c40b570dcf2b35d8828`
    const wineURL = `${DOMAIN}?wine=${wineType}&number=10&apiKey=${API_KEY}`
    const response = await axios.get(wineURL)
    console.log(response.data.recommendedWines)
  removeElement(mainData)
     renderList(recommendedWines)


    // return response
    // return wineList
  } catch (error) {
    console.error(error)
  }

}
console.log(getResults)

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputValue = document.querySelector('select').value
  console.log(inputValue)
  getWineType()
 
  
})

function renderList(wineList) {
  // console.log(`this is the wine list`, wineList)
  
  
  wineList.forEach((wine) => {
    console.log(wine.score)
    

    //wine name
    let wineTitle = document.createElement('h2')
    wineTitle.textContent = wine.title
    mainData.append(wineTitle)

  //   //wine Image

    let wineImg = document.createElement('img')
    wineImg.src = wine.imageUrl
    mainData.append(wineImg)

  //   //wine score
    let wineScore = document.createElement('h3')
    wineScore.textContent= `wine score: ${wine.score}`
    mainData.append(wineScore)

  //   //wine description
    let wineDesc = document.createElement('p')
    wineDesc.textContent = wine.description
    mainData.append(wineDesc)

  //   // wine price
    let winePrice = document.createElement('h5')
    winePrice.textContent = wine.price
    mainData.append(winePrice)
    })

}

function removeElement(element) {
  while (element.lastChild) {
    element.removeChild(element.lastChild)
  }
}














