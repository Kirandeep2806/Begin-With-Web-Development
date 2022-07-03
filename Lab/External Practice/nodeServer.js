let http = require('http');
let fs = require('fs');

fs.readFile('./jquery.html', (err, html) => {
    if (err)
        throw err;
    http.createServer((req, res) => {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write(html);
        res.end();
    }).listen(1337);
})
