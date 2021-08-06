# Project Overview

## Project Name
VINEit
https://github.com/eryulee/VINEit/edit/main/README.md
https://eryulee.github.io/VINEit/

## Project Description

This app will provide wine enthusiast users with a complete wine guide by typing in the name, type, or category of wine. The wine guide will include the title(name) of the wine, a description, the price, an image, and the average rating.

## API and Data Sample
I will be using the Spoonacular API:
https://spoonacular.com/food-api/docs

```json
{
"id": 441028,
            "title": "Santa Ema Reserve Chardonnay",
            "description": "Santa Ema Chardonnay Reserva is a bright golden yellow colored wine that comes from the Leyda Valley. A bouquet of ripe tropical fruits emerges, such as bananas and passion fruit along with touches of honey and vanilla. In the mouth, it is a wine of good balance and pleasant acidity.Ideal to go with oily fish and sauces, seafood and grilled crab. Also ideal for white meat and mature cheeses.",
            "price": "$13.99",
            "imageUrl": "https://spoonacular.com/productImages/441028-312x231.jpg",
            "averageRating": 0.86,
            "ratingCount": 5.0,
            "score": 0.7975,
            "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fsanta-ema-reserve-chardonnay-2014%2F153496"
        },
```

## Wireframes

[wireframe] (https://whimsical.com/vineit-H7oy7xSHwYqg5NUvpkWwqF)



### MVP/PostMVP
- Remove previous search data when new search is made
- Style the card flexbox
- Search wines to make a request to an external data source and insert some of the retrieved data on to the DOM
- Render image, price, and rating using one media query/breakpoint


#### PostMVP  
- Add basic error handling
- Hamburger menu

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|July 30| Prompt / Wireframes / Priority Matrix / Timeframes |complete
|August 2| Project Approval / Core Application Structure (HTML, CSS, etc.), Pseudocode/ actual code | complete
|August 3| Css/flexbox | complete
|August 4| Initial Clickable Model/MVP  | complete
|August 5| PMVP/advanced Css | Incomplete
|August 6| Presentations | complete

## Priority Matrix

[priority matrix] (https://miro.com/app/board/o9J_l4M7rVQ=/)

## Timeframes
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Researching API | H | 3hrs| 3hrs | 3hrs |
| Adding Form | H | 3hrs | 2hrs | 2hrs |
| Styling the header | L | 3hrs | 3hrs | 3hrs |
| html structure | H | 3hrs| 1hrs | 1hrs |
| css structure | H | 3hrs | 3hrs | 3hrs |
| Psuedo code JS | H | 3hrs | 1hrs | 1hrs |
| Acutal code JS | H | 3hrs | 10hrs | 10hrs |
| Create array for wine list | H | 2hrs | 2hrs | 2hrs |
| Adding dropdown menu | H | 3hrs | 6hrs | 6hrs |
| handle form submission | H | 3hrs | 3hrs | 3hrs |
| styling the background | L | 3hrs | 4hrs | 4hrs |
| styling the text | L | 2hrs | 4hrs | 4hrs |
| remove previous search data | H | 3hrs | 1hrs | 1hrs |
| styling card using flexbox | H | 3hrs | 2hrs | 2hrs |
| media query for desktop | H | 3hrs | 2hrs | 2hrs |
| PMVP basic error handling | L | 3hrs | hrs | hrs |
| PMVP Hamburger menu | L | 3hrs | hrs | hrs |
| Total | H | 46hrs| hrs | hrs |




## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
.bouncing {
  animation                : bounce 0.4s;
  animation-iteration-count: infinite;
  animation-direction      : alternate;
}

This code snippet sets the bounce speed in css. It was my first time using animation and I found this to be really interesting and useful.
```

## Change Log
I initially had two forms: a drop down menu and a search bar. I ended up getting rid of the text search input bar because having two forms made the app look cluttered and difficult for the user to navigate.
