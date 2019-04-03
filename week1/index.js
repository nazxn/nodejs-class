var http = require('http')
//I m going to use http module

//Create a HTTP Server
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'})
	res.end('Hello Node!')
//Whenever anyone request for me, return hello world
}).listen(8080)
//Wait at port 8080

console.log('Server started on port 8080. Please press Ctrl+C to stop')