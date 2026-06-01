const http = require('http');

const PORT = process.env.PING_LISTEN_PORT || 8080;

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/ping') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(req.headers, null, 2));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: "Route non trouvée. Utilisez GET /ping" }));
    }
});

server.listen(PORT, () => {
    console.log(`Le serveur écoute sur le port ${PORT}`);
});