function factory(aclass){
     return new aclass()
}

let greeting = factory(class{
    sayHi(){
        console.log("hi there")
    }
})

greeting.sayHi()