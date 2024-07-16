// Deliverable # 1 solution
function flatburgerGreeting(){
    console.log("Welcome to Flatburger!");
}

// Deliverable # 2 solution
function printGreeting(greeting){
    console.log(greeting);
}

// Deliverable # 3 solution
function getSum(num1, num2){
    return num1 + num2;
}

// Deliverable # 4 solution
const getSumString = function (sum, num1, num2) {
    return `${num1} + ${num2} = ${sum(num1, num2)}`;
};

// Deliverable # 5 solution
const getAverage = (num1 = 0, num2 = 0) => getSum(num1, num2) / 2;