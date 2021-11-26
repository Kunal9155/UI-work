var http = require('http');
var fs = require('fs');
var port = fs.readFileSync('kunal-portfolio\index.html');
var calc = fs.readFileSync('calculator\index.html');
var olp = fs.readFileSync('File-System\index.html');
http.createServer(function (req, res) {
    if(req.url == "/calc.html")
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(calc);
    return res.end();
    }
    if(req.url == "/port.html")
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(port);
    return res.end();
    }
   else if (req.url == "/olp.html")
   {
       res.writeHead(200, {'Content-Type': 'text/html'});
   res.write(olp);
   return res.end();
   }
  
  fs.readFile('all.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);