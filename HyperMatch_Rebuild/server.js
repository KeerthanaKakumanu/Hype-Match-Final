'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, 'data');
const CREATOR_FILE = path.join(DATA_DIR, 'creators.json');
const STATE_FILE = path.join(DATA_DIR, 'runtime-state.json');
const PORT = Number(process.env.PORT || 3000);
const MIME = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.csv':'text/csv; charset=utf-8','.md':'text/markdown; charset=utf-8','.png':'image/png','.svg':'image/svg+xml','.ico':'image/x-icon'};
function readJson(file, fallback) { try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return fallback; } }
function writeJson(file, data) { fs.mkdirSync(path.dirname(file), {recursive:true}); fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n', 'utf8'); }
function readCreators() { const value = readJson(CREATOR_FILE, []); return Array.isArray(value) ? value : []; }
function readState() { return readJson(STATE_FILE, {saved:[], briefs:[], campaigns:[], messages:[], review:{}}); }
function send(res, status, data, type='application/json; charset=utf-8') { res.writeHead(status, {'Content-Type':type,'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}); res.end(type.startsWith('application/json') ? JSON.stringify(data) : data); }
function body(req) { return new Promise((resolve,reject)=>{let data='', size=0; req.on('data',chunk=>{size+=chunk.length;if(size>8*1024*1024){reject(new Error('Request body exceeds 8 MB'));req.destroy();return;}data+=chunk;});req.on('end',()=>{try{resolve(data?JSON.parse(data):{});}catch{reject(new Error('Invalid JSON body'));}});req.on('error',reject);}); }
const server = http.createServer(async (req,res)=>{
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  try {
    if (req.method === 'GET' && url.pathname === '/api/health') { const creators=readCreators(),state=readState(); const eligible=creators.filter(c=>{const status=(state.review||{})[c.creator_id]||c.verification_status;const profile=c.instagram_url||c.youtube_url||c.other_profile_urls;return status==='Verified'&&!!profile&&!!c.creator_source_url&&!!c.location_evidence_url&&!!c.language_evidence_url&&['Telangana','Andhra Pradesh'].includes(c.state)&&['Telugu','English','Hindi'].includes(c.content_language);}).length; return send(res,200,{ok:true,service:'HyperMatch local JSON API',creatorCandidates:creators.length,eligibleCount:eligible}); }
    if (req.method === 'GET' && url.pathname === '/api/data') return send(res,200,{creators:readCreators(),state:readState()});
    if (req.method === 'POST' && url.pathname === '/api/state') {
      const incoming = await body(req);
      const state = {saved:Array.isArray(incoming.saved)?incoming.saved:[],briefs:Array.isArray(incoming.briefs)?incoming.briefs:[],campaigns:Array.isArray(incoming.campaigns)?incoming.campaigns:[],messages:Array.isArray(incoming.messages)?incoming.messages:[],review:incoming.review && typeof incoming.review==='object' && !Array.isArray(incoming.review)?incoming.review:{}};
      writeJson(STATE_FILE,state); return send(res,200,{ok:true,saved:state.saved.length,briefs:state.briefs.length,campaigns:state.campaigns.length});
    }
    if (req.method === 'POST' && url.pathname === '/api/candidates') {
      const incoming = await body(req); if (!Array.isArray(incoming.creators)) return send(res,400,{error:'Expected creators array'});
      if (incoming.creators.length > 10000) return send(res,413,{error:'Too many candidate records'});
      const seenIds = new Set();
      const clean = incoming.creators.filter(c => c && typeof c === 'object' && String(c.creator_name||'').trim()).map((c,i)=>{
        const id=String(c.creator_id||`IMP-${Date.now()}-${i}`); if(seenIds.has(id)) throw new Error(`Duplicate creator_id: ${id}`); seenIds.add(id);
        return {...c,creator_id:id,verification_status:c.verification_status||'Needs review'};
      });
      writeJson(CREATOR_FILE,clean); return send(res,200,{ok:true,count:clean.length});
    }
    if (req.method !== 'GET' && req.method !== 'HEAD') return send(res,405,{error:'Method not allowed'});
    let pathname = decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname);
    const target = path.resolve(ROOT, '.' + pathname);
    if (!target.startsWith(ROOT + path.sep) && target !== ROOT) return send(res,403,{error:'Forbidden'});
    let file = target;
    if (!fs.existsSync(file) || !fs.statSync(file).isFile()) return send(res,404,{error:'Not found'});
    const type=MIME[path.extname(file).toLowerCase()] || 'application/octet-stream';
    res.writeHead(200,{'Content-Type':type,'X-Content-Type-Options':'nosniff','Cache-Control':path.extname(file)==='.html'?'no-cache':'public, max-age=300'});
    if(req.method==='HEAD') return res.end();
    fs.createReadStream(file).pipe(res);
  } catch (err) { if (!res.headersSent) send(res,400,{error:err.message||'Request failed'}); else res.end(); }
});
server.listen(PORT,'0.0.0.0',()=>console.log(`HyperMatch running on http://0.0.0.0:${PORT}`));
