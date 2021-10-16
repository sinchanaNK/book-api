const filesystem = require("fs/promises");
const { Server } = require("http");

//create a file
filesystem.unlink("tesla.text")

filesystem.mkdir("database");

const operatingSystem =require("os");
//print out os
console.log(operatingSystem.platform());

console.log(operatingSystem.arch());

//environment variables
console.log(process.env);

//create a Server
const http = require("http");


http.createServer(( request,response) => response.end("hello client!!!!"));
listen(3000);