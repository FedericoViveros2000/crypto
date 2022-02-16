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
let data = []
io.on('connection', (socket) => {

  binance.websockets.miniTicker(markets => {
    socket.emit('my-event', markets)
  });
  
  //Para obtener los datos especificos de ciertas criptomonedas
  binance.websockets.prevDay(['BTCUSDT', 'BNBUSDT', 'ETHUSDT', 'SOLUSDT', 'ADAUSDT', 'USDT', 'LUNAUSDT', 'DOTUSDT', 'SHIBUSDT'] , (error, response) => {

    data.push(response)

    if (data.length === 9) {
      let sortData = data.sort((a, b) => b.close - a.close)
      socket.emit('my-top-5', sortData)
    }else if(data.length > 9) {
      data = []
    }

  })
  
})

httpServer.listen(3000);