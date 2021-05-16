const http = require('http');


const server = http.createServer((req, res) =>{
        res.setHeader('Content-Tyep','text/html');
        res.write('<h1>hello rasika</h1>');
        res.end();
});


server.listen(3000, 'localhost' , ()=>{
        console.log('port 3000');
});