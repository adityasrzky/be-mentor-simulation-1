const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello, Adit!");
    } else if (req.url === "/revou") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello, RevoU!");
    } else {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("URL Nyasar!");
    }
});

const PORT = 3000;
const IP = "127.0.0.1";

server.listen(PORT, IP, () => {
    console.log("Server sudah jalan");
});
