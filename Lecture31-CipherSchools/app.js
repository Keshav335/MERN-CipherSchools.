const http =require("http");

const server = http.createServer((req,res)=>{
    res.write("This is some info from first Node.js server");
    res.end();
});

server.listen(8080,()=>{
    console.log("Server is running");
});
