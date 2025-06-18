

// Introduction to the JavaScript for…of loop

let arr = [1,2,3,"monir"];

for (let num of arr){
    console.log(num)
}

// step 2 

let info = [
    {name:"monir",age:19,},
    {name:"mahim",age:7,},
    {name:"mahedi",age:18,}
]

let text = 0

for (let {age} of info){
    // text += age ;
    console.log(age)
}

// console.log(`total age is ${text}`)


// step 3 

let name = "Monirul"
for (let i of name){
    console.log(i)
}