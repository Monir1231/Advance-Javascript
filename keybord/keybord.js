

let keypress = document.querySelector("#keypress");
let myPtag =document.querySelector(".myPtag")

// keypress.addEventListener("keydown",(even)=>{
//     myPtag.innerHTML = even.key
// })

// keypress.addEventListener("keypress",(even)=>{
//     myPtag.innerHTML = even.key
// })

keypress.addEventListener("keyup",(even)=>{
    myPtag.innerHTML = even.key
})