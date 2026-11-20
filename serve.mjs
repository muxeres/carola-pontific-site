import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const root=resolve('public');
const types={'.html':'text/html;charset=utf-8','.js':'text/javascript;charset=utf-8','.css':'text/css;charset=utf-8','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.woff2':'font/woff2'};
createServer(async(req,res)=>{
  try{let url=new URL(req.url??'/', 'http://localhost').pathname;let path=resolve(root,'.'+decodeURIComponent(url==='/'?'/index.html':url));if(path!==root&&!path.startsWith(root+sep)){res.writeHead(403).end();return;}
    if((await stat(path)).isDirectory()) path=resolve(path,'index.html'); const data=await readFile(path);res.writeHead(200,{'Content-Type':types[extname(path)]??'application/octet-stream'}).end(data);
  }catch{res.writeHead(404).end('404 · Not found');}
}).listen(Number(process.env.PORT??4173),()=>console.log(`PONTIFIC: http://localhost:${process.env.PORT??4173}`));
