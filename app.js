const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/home')res.end('home page');
    else console.log(`page not found ${req.url}`);
})

server.listen(5000)