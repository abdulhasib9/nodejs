let EventEmiter = require('events')

const emitter = new EventEmiter()
//registere a listener
emitter.on("messageLogged",(args)=>{
    console.log("emitter is listening",args.id)
})
emitter.emit("messageLogged",{id:1,url:'https://'})
//emit means making a noise or rising something

