const {
  info
} = require("console");

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

  binance.websockets.prevDay(false, (error, response) => {
    socket.emit('my-event', response)
  });

  // For all symbols:
    binance.websockets.prevDay(false, (error, response) => {
      socket.emit('all-crypto', response)
    });
  //Para obtener los datos especificos de ciertas criptomonedas
  binance.websockets.prevDay(['BTCUSDT', 'BNBUSDT', 'ETHUSDT', 'SOLUSDT', 'ADAUSDT', 'USDT', 'LUNAUSDT', 'DOTUSDT', 'SHIBUSDT'], (error, response) => {

    data.push(response)

    if (data.length === 9) {
      let sortData = data.sort((a, b) => b.close - a.close)
      socket.emit('my-top-5', sortData)
    } else if (data.length > 9) {
      data = []
    }

  })


  binance.websockets.chart("BTCUSDT", "1m", (symbol, interval, chart) => {
    let tick = binance.last(chart);
    const last = chart[tick].close;
    // Optionally convert 'chart' object to array:
    // let ohlc = binance.ohlc(chart);
    // console.info(symbol, ohlc);
    console.info(symbol + " last price: " + last)

    let datos = {
      prueba: chart,
      chart: chart[tick].close,
      symbol,
      last,
    }

    socket.emit('crypto-selected', datos)

  });

})

httpServer.listen(3000);