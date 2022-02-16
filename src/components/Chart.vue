<template>
  <div class="container">
    <LineChart :chartData="testData" />
  </div>
</template>

<script>
  import {
    defineComponent,
    onMounted,
    ref
  } from 'vue';
  import {
    LineChart
  } from 'vue-chart-3';
  import {
    Chart,
    registerables
  } from "chart.js";

  Chart.register(...registerables);
  import {
    io
  } from 'socket.io-client'

  export default defineComponent({
    name: 'Home',
    components: {
      LineChart
    },

    setup() {

      const socket = io('http://localhost:3000/')
      const datos = ref(0)
      const testData = {
        labels: ['Bitcoin'],
        datasets: [{
          data: [datos.value],
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        }, ],
      };

      onMounted(() => {
        socket.on('my-top-5', (data) => {
          datos.value = []
          let coin = data.filter(coin => coin.symbol === 'BTCUSDT')
          datos.value = coin[0].close
        })
      })

      return {
        testData
      };
    },
  });
</script>