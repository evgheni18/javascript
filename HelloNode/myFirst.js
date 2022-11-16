var http = require("http");
var dt = require("./myFirstModule")
http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("time and date: " + dt.myDateTime())
  res.end("is that correct?");
}).listen(8080);