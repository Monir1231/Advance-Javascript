

let btnAdd = document.querySelector("#btnAdd");
let btnRemove = document.querySelector("#btnRemove");
let framework =document.querySelector("#framework");
let list = document.querySelector("#list");

btnAdd.addEventListener("click", (even)=>{
 even.preventDefault()

if(framework.value === ""){
  alert("you input filed is empty");
  return
}

const option = new Option(framework.value,framework.value);
list.add(option,undefined);

framework.value = ""
})

// remove selected option

btnRemove.addEventListener("click", (e)=>{
    e.preventDefault();

   
    let selected = [];

    for (let i = 0; i< list.options.length; i++){
        selected[i] = list.options[i].selected;
    }

     // remove all selected option

     let index = list.options.length;

     while(index--){
        if(selected[index]){
            list.remove(index);
        }
     }
  
      

})