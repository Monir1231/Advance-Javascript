

// const btn = document.querySelector("#btn");
// const radioButtons = document.querySelectorAll('input[type="radio"]');
// const output = document.querySelector("#ptag");

// btn.addEventListener("click",(e) =>{
//     let selectedlang;
     
//     for (const radioButton of radioButtons){
//        if(radioButton.checked){
//         selectedlang = radioButton.value;
//          break;
//        } 
//     }

//     output.innerHTML = `This is ${selectedlang} programming language`;
// })


// let sc = document.querySelector("#accept");
//   sc.addEventListener("click",()=>{
//     if(sc.checked === true){
//     alert("yes")
//   } else{
//     alert("no")
//   }
//   })



let framework = document.querySelector("#framework");

let btn = document.querySelector("#btn")

btn.addEventListener("click",()=>{
  alert(framework.value)
})
