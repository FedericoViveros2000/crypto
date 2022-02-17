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
      const datos = ref([])
      const testData = {
        labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
        datasets: [{
          data: [30, 40, 60, 70, 5],
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        }, ],
      };

      onMounted(() => {
        socket.on('crypto-selected', (data) => {
          datos.value = []
        console.log(data);
          datos.value.push(data[0].chart);

         
        })
      })

      return {
        testData
      };
    },
  });
</script>