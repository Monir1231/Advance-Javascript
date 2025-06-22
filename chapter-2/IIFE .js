// (function(a,b){
//    console.log(a + b)
// })(12,34)


// let name = "Rahim";

// (function() {
//     let name = "Karim";
//     console.log("ভিতরের নাম:", name); // Karim
// })();

// console.log("বাইরের নাম:", name); // Rahim

// call back funtion 

function displayer (userdata){
    console.log(`Hay, ${userdata}`)
}

function userName (firstname,lastname,age,year){
   firstname,
   lastname,
   age,
   year

   let info = `${firstname} ${lastname} ${age} ${year}`
   return info
}

let myinfo = userName("monirul","islam",19,2025)
displayer(myinfo)
