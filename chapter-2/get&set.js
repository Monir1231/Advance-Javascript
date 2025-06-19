

// get 
// let info ={
//     name : "Monir",
//     age : 12,
//     get myname(){
//         return this.name;
//     }
// }

// let person = info.myname
// console.log(person)

// set 

let info ={
    name : "Monir",
    age : 12,
    set myname(newName){
        return this.name = newName
    }
}

info.myname = "nasir"
console.log(info)