<template>

  <div class="w-full">

    <div class="w-full bg-white shadow-xl mt-5 rounded-lg flex px-4 justify-between h-24 items-center" v-for="exchange in exchanges" :key="exchange.id">

      <figure class="rounded-full overflow-hidden">
        <img :src="exchange.image" :alt="exchange.name" class="object-cover">
      </figure>


      <p>{{exchange.name}}</p>

      <a :href="exchange.url" target="_blank"  class="bg-sky-600 py-1 mt-2 text-white font-bold px-5 inline-block rounded-lg min-w-fit" rel="noopener noreferrer">Visitar</a>


    </div>

  </div>

</template>

<script>

import { onMounted, ref } from 'vue'

export default {
    name: 'Exchanges',

    setup(){

      const exchanges = ref([]);

      const getExchanges = async () => {

        try {

          let response = await fetch('https://api.coingecko.com/api/v3/exchanges?per_page=10&page=1');

          exchanges.value = await response.json();

          console.log(exchanges.value);
          
        } catch (err) {
          console.error(err);
        }


      }

      onMounted(()=> {
        getExchanges();
      })


      return {
        exchanges
      }

    }
}
</script>

<style>

</style>