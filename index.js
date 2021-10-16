const http = require('http');
const fs = require('fs');
const port = 8080;

const server = http.createServer((req,res)=>{
    console.log(req.url);
    console.log(req.method);
    //routing
    switch(true){
        case req.url === "/" && req.method === 'GET':

            fs.readFile('index.html','utf8', (err,data)=>{
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(200);
                res.end(data);
            })
        break;
        case req.url === "/alap.css" && req.method === 'GET':

            fs.readFile('alap.css','utf8', (err,data)=>{
                res.setHeader('Content-Type', 'text/css');
                res.writeHead(200);
                res.end(data);
            })
        break;
        case req.url ==="/iras.html" && req.method ==='GET':
            
            fs.readFile('iras.html','utf8',(err,data)=>{
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(200);
                res.end(data);
            })
        break;
        case req.url ==="/fej.html" && req.method ==='GET':
            
            fs.readFile('fej.html','utf8',(err,data)=>{
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(200);
                res.end(data);
            })
        break;
        case req.url === "/fej.jpg" && req.method === "GET":

            fs.readFile('fej.jpg', (err, data) => {
                res.setHeader('Content-Type', 'image/jpeg');
                res.writeHead(200);
                res.end(data);
            })
        break;
        case req.url === "/iras.jpg" && req.method === "GET":

            fs.readFile('iras.jpg', (err, data) => {
                res.setHeader('Content-Type', 'image/jpeg');
                res.writeHead(200);
                res.end(data);
            })
        break;
        default:
            fs.readFile('hiba.html', 'utf8', (err, data) => {
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(200);
                res.end(data);
            })
    }
});

server.listen(port);