import { createStore } from 'vuex'

export default createStore({

  state: {

    top: [
      'BTC',
      'ETH',
      'SOL'
    ],

    pares: [
      'BTCUSDT',
      'ETHUSDT',
      'BNBUSDT',
      'SOLUSDT',
      'ADAEUR'
    ],

    unidades: {
      USDT: 'Tether'
    },

    unidadesDeBase: {
      USDT: 'usdt'
    }

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
