const http = require('http');
const hostname = 'localhost';
const port = 8000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    // res.setHeader = {'Content-Type': 'text/text'};
    // res.end("Hi, selamat datang di nodejs");

    res.setHeader = {'Content-Type': 'text/html'};
    res.end("<h1>Hi, selamat datang di nodejs</h1>");
})

// server.listen(8000);
server.listen(port, hostname, () => {
    console.log(`server running on http://${hostname}:${port}`);
});
// console.log("server running on http://localhost:8000");

// start node app.js
// stop ctrl+c