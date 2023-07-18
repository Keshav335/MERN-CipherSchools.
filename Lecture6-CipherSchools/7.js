const person={
    firstName:"John",
    lastName:"Doe",
    age:30,
    eyecolor:"blue",
};
let id=Symbol('id');
person[id]=140111;
console.log(person);