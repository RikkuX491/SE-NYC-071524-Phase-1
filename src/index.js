// console.log('hello')

// console.log(typeof 7)

// const user = "Alice Baker"

// console.log(`Hello ${user}!`)

let firstName = "Steve"
let lastName = "Carris"

// if(firstName === "Alice" || lastName === "Baker"){
//     console.log(`Hello ${firstName} ${lastName}`)
// }
// else if(firstName === "Bob"){
//     console.log("What's up Bob?")
// }
// else{
//     console.log("Invalid name!")
// }

// const greetingPhrase = (firstName === "Alice" && lastName === "Baker") ? `Hello ${firstName} ${lastName}` : "Wrong name!"
// console.log(greetingPhrase)

switch(true){
    case firstName === "Alice" || lastName === "Baker":
        console.log(`Hello ${firstName} ${lastName}`)
        break
    
    case firstName === "Bob":
        console.log("What's up Bob?")
        break

    default:
        console.log("Invalid name!")
}