import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';

createServer(async (request, response) => {
    if (request.method !== 'GET' || new URL(request.url, 'http://localhost').pathname !== '/api/articles') {
        response.writeHead(404).end();
        return;
    }
    try {
        const data = JSON.parse(await readFile(new URL('./db.json', import.meta.url), 'utf8'));
        response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' }).end(JSON.stringify(data.articles));
    } catch {
        response.writeHead(500).end();
    }
}).listen(4000, '127.0.0.1', () => console.log('Fake API: http://localhost:4000/api/articles'));
