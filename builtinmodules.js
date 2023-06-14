const os = require('os')

//info about current user 
const currentUser = os.userInfo()
console.log(currentUser)

//system uptime
console.log(`the system uptime is ${os.uptime() /60}`)

//more info about current system 
const systemInfo = {
    name: os.type(),
    release:os.release(),
    totalMem : os.totalmem( ) ,
    freeMem :os.freemem()

}
console.log(systemInfo)


