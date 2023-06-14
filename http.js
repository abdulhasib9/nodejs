const http = require("http")

const server = http.createServer((req,res)=>{
// res.write("first website on node js ")
// res.end()

if(req.url==="/") {res.end("home Page ")
return
}
if(req.url==="/about") {
    
    res.end("this our short history")
    return
    
}
else res.end(`
<h1>Opps the page not exists</h1>
<a href="/" >back to home </a>
`)
})

server.listen(3000)