// write your code here

// Example code
// let foodsArray = []

// console.log("Before the fetch")

// const promiseObject = fetch('http://localhost:3000/foods')
// const promiseObject2 = promiseObject.then((response) => response.json())
// promiseObject2.then((foodsData) => {
//     console.log(foodsData)
//     foodsArray = foodsData
//     console.log(foodsArray)
// })

// console.log("After the fetch")

// Using async and await with Promises
// async function fetchTheData(){
//     const responseObject = await fetch('http://localhost:3000/foods')
//     console.log(responseObject)
//     const foodsData = await responseObject.json()
//     console.log(foodsData)
// }
// fetchTheData()

const restaurantMenu = document.getElementById('restaurant-menu')

function addFoodImageToRestaurantMenu(food){
    const imgElement = document.createElement('img')
    imgElement.src = food.image
    restaurantMenu.appendChild(imgElement)

    imgElement.addEventListener('click', () => {
        displayFoodDetails(food)
    })
}

function displayFoodDetails(food){
    const detailImageElement = document.querySelector('.detail-image')
    detailImageElement.src = food.image
    
    const nameElement = document.querySelector('.name')
    nameElement.textContent = food.name

    const descriptionDisplayElement = document.getElementById('description-display')
    descriptionDisplayElement.textContent = food.description
}

fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(foods => {
    displayFoodDetails(foods[0])

    foods.forEach(addFoodImageToRestaurantMenu)
})