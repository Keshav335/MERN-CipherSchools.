class Person {
    constructor(name, id) {    
    this.name=name;
    this.id = id;
    }    
    addAddress(newAddress){
         this.address= newAddress;
    }    
    getDetails() {    
    console.log(`Nane is: ${this.name}, and address is: ${this.address}`);
    }
}    
let person1= new Person("Naruto", 24);
person1.addAddress("Leaf Village"); 
person1.getDetails();