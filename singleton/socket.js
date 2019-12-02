const options = { port, host }



const socketClient = io.conenct(options)

// error handler

// reconnection handler

export default socketClient

