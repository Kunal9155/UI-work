var http = require("http");
var dt = require("./date");

const server = http.createServer(function(req,res){
        res.writeHead(200, { "Content-Type":"text/plain" });
        res.write("This is BHAVESH KRISHAN GARG")
        res.write("\n The date and time currently : "+ dt.myDateTime());
        res.write(dt.hello());
        res.end("Hello World!");

})
server.listen(8080);
1;
