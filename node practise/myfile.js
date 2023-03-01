var fs = require("fs");

//Asynchronus
fs.readFile('input.txt',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log("Asynchronus read :" + data.toString());
});


//synchronus read
var data=fs.readFileSync('input.txt');
console.log("Synchronus read :"+data.toString());
console.log("program Ended");