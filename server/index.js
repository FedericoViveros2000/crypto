const express = require("express");
const {
  createServer
} = require("http");
const {
  Server
} = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    credentials: true
  }
});

const binance = require('./binance.config')

  io.on('connection', (socket) => {

    binance.websockets.miniTicker(markets => {
      socket.emit('my-event', markets)
    });

  })


httpServer.listen(3000);