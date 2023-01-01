
//-------------------------------------
    // const fs = require('fs');
    // console.log("Hello from nodejs.")

    // // to write on the file 
    // fs.writeFileSync('hello.txt', 'Hello from nodejs')

//-------------------------------------

const http = require('http');
 const fs = require('fs');
 const requestHandler = require('./routes');

const server = http.createServer(requestHandler)

server.listen(8000);
