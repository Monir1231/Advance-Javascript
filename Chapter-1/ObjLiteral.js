
// Home » JavaScript Tutorial » Object Literal Syntax Extensions in ES6 Object Literal Syntax Extensions in ES6

//  step -1 
// function mynam(name,age){
//     return{
//         name : name,
//         age : age
//     }
// }

// let myinfo = mynam("Monir",34)
// console.log(myinfo)

//  step -2

// let yourName = "Mahim"
// let study = "shahajuddin muto bar para"

// const yourInfo ={
//     yourName,
//     study
// }

// console.log(yourInfo)

//  step -3 Computed property name


// let name = "Ai name"

// let Ai ={
//     [name] : "server",
//     "Ai hours" : 10000

// }

// console.log(Ai[name])
// console.log(Ai["Ai hours"])

// step - 4 Concise method syntax 

let server = {
    name : "monir Molla",
    restart(){
        console.log(`this is ${this.name}.I am computer programmer`)
    }
}

console.log(server.restart())

