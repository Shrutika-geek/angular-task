var http=require('http');
var dt=require('./mymodule');

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write("the date and time are currently :"+ dt.myDateTime());
    res.end('hello world');
}).listen(8081);