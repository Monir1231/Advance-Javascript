// const fruits = ["banana","apple","mango",]
// const check = fruits.includes("appl")
// console.log(check)

// let your = "Money";
// if (your === "Money"){
//     console.log("ভালোবাসা মানুষের অভাব হবে না এবং তোমাকে সবাই দাম দিবে")
// } else{
//     console.log("তোমাকে কেউ দাম দিবে না")
// }


const myArray = [1,2,3,4,5,6,7];

const newArray = myArray.every(myfun);
function myfun(value,index,array){
  return value >= 1
}

console.log(newArray)