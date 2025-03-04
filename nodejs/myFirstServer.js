let http = require("http");
let url = require("url");

http.createServer(function(req, res){
  let query = url.parse(req.url, true);

  
  res.writeHead(200, {"content-type": "text/plain"})
  res.write("Hello, world!");
  res.write("Host: " + query.host);
  res.write("Path: " + query.path);
  res.end();
}).listen(8080);
