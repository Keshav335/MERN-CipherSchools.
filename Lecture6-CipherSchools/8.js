function add1(...args){
    let sum=0;
    for(let a of args){
        sum=sum+a;
    }
    return sum
};

console.log(add1(1,2,3,4,5,5,56))