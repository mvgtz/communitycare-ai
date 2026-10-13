import http from 'node:http';
import path from 'node:path';
import { readFile,stat } from 'node:fs/promises';
const root=path.resolve('out');
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.txt':'text/plain; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.ico':'image/x-icon','.woff2':'font/woff2'};
http.createServer(async(req,res)=>{try{const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);let file=path.resolve(root,`.${pathname}`);if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}if((await stat(file)).isDirectory())file=path.join(file,'index.html');res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});res.end(await readFile(file));}catch{res.writeHead(404,{'Content-Type':'text/html'});try{res.end(await readFile(path.join(root,'404.html')));}catch{res.end('Not found. Run the production build first.');}}}).listen(Number(process.env.PORT)||3000,'127.0.0.1',()=>console.log(`CommunityCare AI: http://127.0.0.1:${process.env.PORT||3000}`));
