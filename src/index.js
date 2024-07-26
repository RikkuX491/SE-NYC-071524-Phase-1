const restaurantMenu = document.getElementById('restaurant-menu')

fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(foods => {
    displayFoodDetails(foods[0])

    foods.forEach(food => {
        addFoodImageToRestaurantMenu(food)
    })
})

function addFoodImageToRestaurantMenu(food){
    const imgElement = document.createElement('img')
    imgElement.src = food.image
    imgElement.addEventListener('mouseover', () => {
        displayFoodDetails(food)
    })

    imgElement.addEventListener('click', () => {

        imgElement.remove()

        fetch(`http://localhost:3000/foods/${currentlyDisplayedFood.id}`, {
            method: "DELETE"
        })
    })

    restaurantMenu.appendChild(imgElement)
}

function displayFoodDetails(food){
    currentlyDisplayedFood = food
    const foodDetailImageElement = document.getElementsByClassName('detail-image')[0]
    foodDetailImageElement.src = food.image
    const foodNameElement = document.getElementsByClassName('name')[0]
    foodNameElement.textContent = food.name
    const foodDescriptionDisplayElement = document.getElementById('description-display')
    foodDescriptionDisplayElement.textContent = food.description
}

// Example code
// Access <ul> element where the cryptocurrency data will be displayed inside of (in a <li> element for each cryptocurrency)
const cryptocurrencyListElement = document.getElementById('cryptocurrency-list')

// Access the <select> element which will be used to filter the cryptocurrencies that are displayed on the web page
const cryptocurrencyFilterElement = document.getElementById('cryptocurrency-filter')

fetch("https://api.coincap.io/v2/assets")
.then(response => {
    if(response.ok){
        // alert("GET request was successful!")
        response.json().then(apiDataObject => {
            // Iterate through our data and display all cryptocurrency data on the web page
            // apiDataObject.data.forEach(cryptocurrency => {
            //     const liElement = document.createElement('li')
            //     liElement.textContent = `${cryptocurrency.name} (${cryptocurrency.symbol}): Rank # ${cryptocurrency.rank}`
            //     cryptocurrencyListElement.appendChild(liElement)
            // })

            // Get the top ten cryptocurrencies and store them into a variable
            // const topTenCryptocurrencies = apiDataObject.data.filter(cryptocurrency => {
            //     return Number(cryptocurrency.rank) <= 10
            // })
            
            // Iterate through our filtered data and display the top ten cryptocurrencies (by rank)
            // topTenCryptocurrencies.forEach(addCryptocurrencyToList)

            displayCryptocurrencyData(apiDataObject.data)

            // Add an event listener so that the <select> element will listen for a change event and execute code in response to the change
            cryptocurrencyFilterElement.addEventListener('change', () => {
                displayCryptocurrencyData(apiDataObject.data)
            })
        })
    }
    else{
        alert("Error: Unable to retrieve cryptocurrency data!")
    }
})

function addCryptocurrencyToList(cryptocurrency) {
    const liElement = document.createElement('li')
    liElement.textContent = `${cryptocurrency.name} (${cryptocurrency.symbol}): Rank # ${cryptocurrency.rank}`
    cryptocurrencyListElement.appendChild(liElement)
}

function displayCryptocurrencyData(cryptocurrencies){
    cryptocurrencyListElement.innerHTML = ""

    if(cryptocurrencyFilterElement.value === "all"){
        cryptocurrencies.forEach(addCryptocurrencyToList)
    }
    else if(cryptocurrencyFilterElement.value === "less_than"){
        cryptocurrencies.forEach(cryptocurrency => {
            if(Number(cryptocurrency.rank) <= 50){
                addCryptocurrencyToList(cryptocurrency)
            }
        })
    }
    else if(cryptocurrencyFilterElement.value === "greater_than"){
        cryptocurrencies.forEach(cryptocurrency => {
            if(Number(cryptocurrency.rank) > 50){
                addCryptocurrencyToList(cryptocurrency)
            }
        })
    }
}