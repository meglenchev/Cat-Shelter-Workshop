import http from 'http';

const server = http.createServer((req, res) => {

    res.end();
});

server.listen(5000);
console.log('Server is litening on http://localhost:5000....');