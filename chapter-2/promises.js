
let massage = false ;

let myPromises = new Promise ((resolve,rejcet)=>{
    if(massage){
        resolve([
            {name:"Monir",age:19,proff:"programmer"},
            {name:"Leone",age:21,proff:"programmer"}
        ])
    } else{
        rejcet("you are not bangladesi")
    }
})

myPromises.then((succes)=>{
    console.log(succes)
})

myPromises.catch((error)=>{
    console.log(error)
})