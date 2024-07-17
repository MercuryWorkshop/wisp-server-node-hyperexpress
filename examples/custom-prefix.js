const wsn = require("wisp-server-node")
const HyperExpress = require('hyper-express');
const Server = new HyperExpress.Server();
const Router = new HyperExpress.Router();

Router.ws('/wisp/', {
    idle_timeout: 60,
    max_payload_length: 32 * 1024,
    message_type: "Buffer"
}, (ws) => {
    console.log(ws.ip + ' is now connected using websockets!');
    console.log(ws instanceof HyperExpress.Websocket)
    wsn.routeRequest(ws);
});

// Websocket connections can now connect to '/wisp/'
Server.use('/', Router);
Server.listen(8080);