var fs = require("fs");
fs.readFile("text.txt", function(err, data){
  if(err){
    console.log(err);
  }
  setTimeout(()=>{
    console.log("display after 3 seconds")
  }, 3000);
});
console.log("start");