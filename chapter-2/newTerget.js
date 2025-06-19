
function myfun(name){
    if(!new.target){
        throw "must use new operator with Person";
    }
    this.name=name ;
}

let myterget = new myfun("monir")
console.log(myterget)