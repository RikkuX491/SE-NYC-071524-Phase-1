// write your code here

const phrase1 = "Good morning!";

function helloFlatiron(){
    const phrase2 = "Hey what's up?";
    return phrase2;
}

const returnedPhrase = helloFlatiron();

// console.log(phrase1);

function sum(num1, num2){
    return num1 + num2;
}

// const result = sum(9, 24);
// console.log(result);
// const average = result / 2;
// console.log(average);

function difference(num1 = 1, num2 = 7){
    // console.log(num1)
    // console.log(num2)
    return num1 - num2;
}

const result2 = difference();
// console.log(result2);

if(result2 === -6){
    // Always declare variables with the const or let keyword inside of a block to ensure that they will be block-scoped
    const personName1 = "Alice"
    let personName2 = "Bob";

    // Variables declared with the var keyword do not get block-scoped
    // var personName3 = "Eve";
}

// console.log(personName1);
// console.log(personName2);
// console.log(personName3);

function product(num1 = 7, num2 = 14){
    if((typeof num1 === 'number') && (typeof num2 === 'number')){
        return num1 * num2;
    }
    else{
        return "Invalid input!"
    }
}

const result3 = product(34, '5');

// alert() is a built-in method that we can use
// We can use it to display a message box in the browser
// alert("Hello Flatiron");

// prompt() is another built-in method that we can use
// We can use it to get user input. The prompt displays in the browser
// const nameInput = prompt("Enter your name:");

function greetUser(name){
    alert(`Hello ${name}!`);
}

// greetUser(nameInput);

// const purchaseItem = function (item) {
//     console.log(`You purchased an ${item}!`)
// };

// console.log(purchaseItem)
// console.log(greetUser)
// purchaseItem("apple");

// const sellItem = (item) => {
//     console.log(`You sold a ${item}!`)
// };

// sellItem("banana");

// supermarket() is a higher-order function since it accepts a function as an argument (stored in the purchaseItem parameter) and also returns a function
function supermarket(purchaseItem){
    // console.log(purchaseItem)
    alert("Welcome to Flatiron Supermarket!");
    const item = prompt("What item would you like to purchase?");
    purchaseItem(item);

    // We are returning a closure function
    return () => {
        alert(`You sold ${item} back to the supermarket!`);
    };
}

// A callback function is a function that is passed in as an argument to another function
const sellItem = supermarket(function (item) {
    alert(`You purchased an ${item}!`)
});

sellItem();

// Additional info about arrow functions:

// An arrow function can implicitly return a value when its function body has just 1 line of code
const divide = (num1, num2) => num1 / num2;

const result4 = divide(6, 2);
console.log(result4);