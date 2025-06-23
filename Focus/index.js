

let password = document.querySelector("#password");

password.addEventListener("focus",(e)=>{
  e.target.style.backgroundColor = "red";
})

let username = document.querySelector("#username");

username.addEventListener("blur",(e)=>{
  e.target.style.backgroundColor = " ";
})