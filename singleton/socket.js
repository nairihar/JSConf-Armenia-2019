const options = { port, host };
const socketClient = io.conenct(options);

// error handlers ...
// other handler (i.g. reconnection) ...

export default socketClient;
