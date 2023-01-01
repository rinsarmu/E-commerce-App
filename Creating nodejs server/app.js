
//-------------------------------------
    // const fs = require('fs');
    // console.log("Hello from nodejs.")

    // // to write on the file 
    // fs.writeFileSync('hello.txt', 'Hello from nodejs')

//-------------------------------------

const http = require('http');

const server = http.createServer((req, res) =>{
    console.log(req.path)
    console.log("request ... ");
     console.log(req)
})

server.listen(8000);
