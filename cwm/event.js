let EventEmiter = require('events')

const emitter = new EventEmiter()
//registere a listener
emitter.on("messageLogged",()=>{
    console.log("emitter is listening")
})
emitter.emit("messageLogged")
//emit means making a noise or rising something

