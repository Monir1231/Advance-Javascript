
class car{
    constructor(Brand){
        this.Brand = Brand
    }
    preant(){
        return `my car brand name is ${this.Brand}`
    }
}

class model extends car{
    constructor(Brand,Model){
      super(Brand)
      this.Model = Model
    }
    show(){
        return `this.preant() .car model is ${this.Model}`
    }
}

let mycar = new model("Tasla","500")
console.log(mycar)