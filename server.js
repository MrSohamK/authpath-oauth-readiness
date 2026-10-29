const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { investigate } = require("./api/investigate");
const root = path.join(__dirname,"public");
const server = http.createServer(async (req,res) => {
  if (req.url === "/api/investigate" && req.method === "POST") {
    let raw = "";
    req.on("data",chunk => { raw += chunk; if (raw.length > 10000) req.destroy(); });
    req.on("end", async () => {
      try {
        const body = JSON.parse(raw || "{}");
        const result = await investigate(body.input);
        res.writeHead(result.status,{"content-type":"application/json; charset=utf-8","cache-control":"no-store"});
        res.end(JSON.stringify(result.body));
      } catch {
        res.writeHead(400,{"content-type":"application/json"});
        res.end(JSON.stringify({ok:false,error:"Invalid JSON request."}));
      }
    });
    return;
  }
  const file = req.url === "/" ? "index.html" : req.url.split("?")[0].replace(/^\/+/,"");
  const full = path.resolve(root,file);
  if (!full.startsWith(root + path.sep) || !fs.existsSync(full) || !fs.statSync(full).isFile()) {
    res.writeHead(404); return res.end("Not found");
  }
  res.writeHead(200,{"content-type":file.endsWith(".html")?"text/html; charset=utf-8":"application/octet-stream"});
  fs.createReadStream(full).pipe(res);
});
const port = process.env.PORT || 3000;
server.listen(port,()=>console.log(`AuthPath running at http://localhost:${port}`));
