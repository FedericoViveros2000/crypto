const Binance = require('node-binance-api');
const binance = new Binance().options({
  APIKEY: 'mCx3ZaRg8Ss50R1zTHlbvwaa2vV934ULT8y387YDGDaiBCgAwHaxnnBfW0XsGM9k',
  APISECRET: 'iWaaKReDNyeqf6063rtVvq0tcKD97jTlPdMDxB6cgAd4ZvMdgLf4JQ0sMh1xrOaU'
});

module.exports = binance;