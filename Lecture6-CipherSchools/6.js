const myfunction=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("this is inside promise");
            resolve();
        },2000)
    });
};
myfunction().then(()=>{
    console.log("Resolved");
}).catch(()=>{
    console.error("Rejected");
});