class Person{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    getDetails = function(){
        return `First name is: ${this.firstName} and last name is: ${this.lastName}`;
    };
}

class Student extends Person{
    constructor(firstName,lastName,rollNumber){
        super(firstName,lastName);
        this.rollNumber=rollNumber;
    }
    getDetails = function(){
        return `First name is: ${this.firstName} and last name is: ${this.lastName} and the roll numbber is ${this.rollNumber}`;
    };
}

let person1 = new Person("Shantanu","Shubham");

console.log(person1.firstName);
console.log(person1.getDetails);


let Student1 = new Student("Anurag","Mishra",20);
console.log(Student1.getDetails());