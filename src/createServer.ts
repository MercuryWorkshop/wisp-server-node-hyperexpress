import HyperExpress from "hyper-express";

import wisp from "./ConnectionHandler";

const Server = new HyperExpress.Server();
const Router = new HyperExpress.Router();

Router.ws('/*', {
    idle_timeout: 60,
    max_payload_length: 32 * 1024,
    message_type: "Buffer"
}, (ws: HyperExpress.Websocket) => {
    wisp.routeRequest(ws);
});

// Websocket connections can now connect to '/wisp/'
Server.use('/', Router);
Server.listen(8080);