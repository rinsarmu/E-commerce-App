
//-------------------------------------
    // const fs = require('fs');
    // console.log("Hello from nodejs.")

    // // to write on the file 
    // fs.writeFileSync('hello.txt', 'Hello from nodejs')

//-------------------------------------

const http = require('http');

const server = http.createServer((req, res) =>{
    // request
    console.log(req.url, req.headers, req.method)
    console.log("request started... ");

    // response 
    res.setHeader('Content-Type', 'text/html')
    res.write("<html>")
        res.write("<head>")
            res.write("<title>")

            res.write("Hello Nodejs")
            res.write("</title>")
         res.write("<head>")
        
        res.write("<body>")
            res.write("<h1>Hello from my nodejs server</h1>")
        res.write("</body>")

    res.write("</html>")

    res.end(); // After end we cant write response after it.
    // process.exit();/
})

server.listen(8000);
