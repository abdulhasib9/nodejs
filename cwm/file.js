let fs = require("fs")

let readfile = fs.readdirSync('./')
console.log(readfile)

fs.readdir("./",(err,files)=>{
    if(err) console.log("error occured",err)
    else console.log(`result : ${files}`)
})