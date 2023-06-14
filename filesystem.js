const {readFileSync,writeFileSync, read, readFile} = require('fs')

const first = readFileSync("./content/first.txt","utf-8")
const second = readFileSync("./content/secondfile.txt","utf-8")

console.log(first,second)
 writeFileSync("./content/newFile.txt",
 `this is the new file ${first}, ${second} `,{flag:'a'})

