// Review - callback functions
function login(getUserGreeting){
    // console.log(greetUser);
    const greeting = getUserGreeting("John");
    console.log(greeting);
}

// login((username) => {
//     return `Hello ${username}!`;
// });

// login((username) => `Hello ${username}!`);
// login(username => `Hello ${username}!`);

// Example code from today's lecture
// const num1 = 7;
// const num2 = 14;
// const num3 = 21;

// console.log(num1, num2, num3);

// Array
const numbers = [7, 14, 21];
console.log(numbers);

// Adding an element at the end of an array
numbers.push(28);
console.log(numbers);

numbers.push(35, 42);
console.log(numbers);

// Adding an element at the front of an array
numbers.unshift(6);
// console.log(numbers.unshift(6));
console.log(numbers);

// Getting the length of an array
console.log(numbers.length);

// Removing an element from the back of an array
numbers.pop();
console.log(numbers);

// Removing an element from the front of an array
numbers.shift();
console.log(numbers);

// Accessing array indices
console.log(numbers[0]);
console.log(numbers[2]);

// An array with different values with different data types
const differentThings = [7, "hello", true, (num1) => num1 * 2];
console.log(differentThings);
console.log(differentThings[3]);

// const result = differentThings[3](4);
// console.log(result);

const multiplyByTwo = differentThings[3];
const result = multiplyByTwo(5);
console.log(result);

// Get some elements from an array without modifying the original array
console.log(numbers);
console.log(numbers.slice(1, 4));
console.log(numbers.slice(1, 2));
console.log(numbers.slice(1, 2)[0]);
console.log(numbers);

// Remove element(s) in between the array indices
// numbers.splice(1)
numbers.splice(1, 2);
console.log(numbers)
console.log([2, ...numbers, 77]);

// Modifying a value from an array
console.log(numbers);
numbers[1] = 101;
console.log(numbers);

// Objects
const person = {
    name: "Alice Baker",
    age: 23,
    isStudent: true,
    speak: () => {
        console.log("Hello there!");
    }
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.isStudent);
console.log(person.speak);
person.speak();
// console.log(person.speak());

// Adding a new key and value pair to the object referenced by the person variable
person.phoneNumber = "(123) 456-7890";
// person['phoneNumber'] = "(123) 456-7890";
console.log(person);

// We cannot reassign a new value to a variable declared with const
// person = {
//     name: "Bob"
// }

// ...but we change information within an object or array
// person.name = "Bob Carris";
person['name'] = "Bob Carris";
console.log(person);

// for loop vs while loop
for(let counter = 1; counter <= 10; counter++){
    console.log(counter);
}

// The counter variable is block-scoped and cannot be accessed from outside of the for loop
// console.log(counter);

// let counter = 1;
// console.log(counter)
// counter = counter + 1;
// counter += 1;
// counter++;
// console.log(counter)

let counter2 = 10;
while(counter2 >= 1){
    console.log(counter2);
    counter2--;
}

// Using a for loop to loop through an array
const foods = ["pizza", "ice cream", "gyro"];

for(let index = 0; index < foods.length; index++){
    // console.log(foods[index]);
}

// Using the for...of statement to iterate over an array
for(let food of foods){
    // console.log(food);
}

const fruit = {
    name: "apple",
    price: "0.99",
    color: "red"
};

console.log(fruit);

for(let key in fruit){
    // console.log(key);
    // console.log(fruit[key]);
}

// Using the forEach() method to iterate through an array
foods.forEach((food) => {
    console.log(food);
});


const people = [
    {
        name: "Alice",
        age: 23
    },
    {
        name: "Bob",
        age: 34
    },
    {
        name: "Eve",
        age: 29
    }
];

// Using the map() method to iterate through an array and return a new array with different information
const names = people.map(person => {
    return person.name;
});
console.log(names);

// Using the find() method to find an element from an array that meets a specified condition
const foundPerson = people.find(person => {
    return person.name === "Bob";
});
console.log(foundPerson);

// Using the filter() method to return an array that contains multiple elements from an array that meet a specified condition
const filteredPeople = people.filter(person => {
    return person.age > 28;
})
console.log(filteredPeople);

// Using the reduce() method to get a sum of the numbers in an array
const numberValues = [6, 2, 8, 7];
const total = numberValues.reduce((accumulator, number) => {
    // console.log(number);
    // console.log(accumulator);
    return accumulator + number;
}, 0);
console.log(total);