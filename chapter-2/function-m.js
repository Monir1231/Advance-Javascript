

// let person ={
//    fullName : function(){
//     return this.firstName + " " + this.lastName
//    }
// }

// let person1 ={
//     firstName : "monir",
//     lastName : "Molla"
// }

// let info = person.fullName.call(person1);
// console.log(info)


// person.fullName.call(person1) 

// let person ={
//    fullName : function(city , country){
//     return this.firstName + " " + this.lastName  + " " + city + " " + country
//    }
// }

// let person1 ={
//     firstName : "monir",
//     lastName : "Molla"
// }

// let info = person.fullName.apply(person1,["rajbari","Banladesh"]);
// console.log(info)


// JavaScript Function bind() 


let person ={
    firstName : "monir",
    lastName : "Molla",
     Display: function(){
    console.log(this.firstName + " " + this.lastName)
   }
}

let time = person.Display.bind(person)
 setTimeout(time,3000)
