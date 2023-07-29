let os = require("os")

let osType= os.type()
console.log(osType)

let totalMem = os.totalmem()
console.log(totalMem)

let totalFreeMem = os.freemem()
console.log(totalFreeMem)

let osVersion = os.version()
console.log(`the windows version is: ${osVersion}`)