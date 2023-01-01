
//-------------------------------------
    // const fs = require('fs');
    // console.log("Hello from nodejs.")

    // // to write on the file 
    // fs.writeFileSync('hello.txt', 'Hello from nodejs')

//-------------------------------------

const http = require('http');
 const fs = require('fs');

const server = http.createServer((req, res) =>{
    // request
    console.log(req.url, req.headers, req.method)
    const url = req.url;
    const method = req.method;

    //Routing requests
    if(url === '/add-product'){
        res.write("<html>")
            res.write("<head>")
                res.write("<title>")
                res.write("Add Product")
                res.write("</title>")
            res.write("<head>")
            
            res.write("<body>")
                res.write("<form action = '/product' method = 'POST'>")
                    res.write("<h1>Add product page</h1>")
                    res.write("<input type= 'text' name = 'title'>")
                    res.write("<button type = 'submit'> Add </button>")
                res.write("</form>")
            res.write("</body>")

        res.write("</html>")

    return res.end(); // used to return from this anonymous function
    }

    // Redirecting 
    if(url === '/product' && method ==="POST"){
        fs.writeFileSync('hello.txt', 'hi from node js')
        res.statusCode = 302;
        res.setHeader("Location", '/add-product');
    }
    else if(url === '/shop'){
        res.write("<html>")

        res.write("<head>")
            res.write("<title>")

            res.write("Shop")
            res.write("</title>")
         res.write("<head>")
        
        res.write("<body>")
            res.write("<h1>Shop page</h1>")
        res.write("</body>")

    res.write("</html>")

    return res.end();
    }
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
