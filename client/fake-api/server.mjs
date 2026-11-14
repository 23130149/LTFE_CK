import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';

createServer(async (request, response) => {
    const url = new URL(request.url, 'http://localhost');
    if (request.method !== 'GET' || !['/api/articles', '/api/news'].includes(url.pathname)) {
        response.writeHead(404).end();
        return;
    }
    try {
        const data = JSON.parse(await readFile(new URL('./db.json', import.meta.url), 'utf8'));
        const zone = url.searchParams.get('zone');
        const result = url.pathname === '/api/articles' ? data.articles : zone ? data.news.filter(item => item.zone === zone) : data.news;
        response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' }).end(JSON.stringify(result));
    } catch {
        response.writeHead(500).end();
    }
}).listen(4000, '127.0.0.1', () => console.log('Fake API: http://localhost:4000/api/articles'));
