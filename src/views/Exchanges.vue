<template>
  <div class="w-full">

    <div class="w-full font-poppins grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"  v-if="!isLoading">

      <div v-for="exchange in exchanges" :key="exchange.id">

        <div class="w-full flex flex-col bg-white shadow-xl mt-5 rounded-lg  items-center p-5">

          <figure class="rounded-full overflow-hidden w-24">
            <img :src="exchange.image" :alt="exchange.name" class="object-cover w-full">
          </figure>

          <div class="text-left leading-10 w-full mt-5 md:mt-6">
            <p class="text-lg text-center font-bold">{{exchange.name}}</p>
            <p> <span class="font-semibold">Año de fundacion:</span> {{exchange.year_established}}</p>
            <p><span class="font-semibold">Volumen transacciones 24 hs:</span>
              ${{Intl.NumberFormat('en-us').format(exchange.trade_volume_24h_btc)}}</p>
            <a :href="exchange.url" target="_blank"
              class="bg-primary py-1 mt-3 text-white font-semibold px-5 block text-center rounded-md "
              rel="noopener noreferrer">Visitar</a>
          </div>

        </div>

      </div>

    </div>

    <div class="w-full font-poppins grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5" v-else>

     <!-- Cards que se muestran cuando el contenido este cargandose -->
     
        <div  class="animate-pulse w-full flex flex-col bg-white shadow-xl mt-5 rounded-lg p-5">
          <div class="text-left leading-10 w-full">
            <div class="animated-pulse bg-gray rounded-md h-36">.</div>
            <p class="animate-pulse w-full h-5 mt-5 rounded-sm bg-gray"></p>
            <p class="animate-pulse w-full h-3 mt-5 rounded-sm bg-gray"></p>
            <p class="animate-pulse w-full h-3 mt-5 rounded-sm bg-gray"></p>
            <a href="#" target="_blank"
              class="animate-pulse block w-full h-10 mt-5 rounded-md bg-gray "
              rel="noopener noreferrer">.</a>
          </div>
        </div>
        <div  class="animate-pulse w-full flex flex-col bg-white shadow-xl mt-5 rounded-lg p-5">
          <div class="text-left leading-10 w-full">
            <div class="animated-pulse bg-gray rounded-md h-36">.</div>
            <p class="animate-pulse w-full h-5 mt-5 rounded-sm bg-gray"></p>
            <p class="animate-pulse w-full h-3 mt-5 rounded-sm bg-gray"></p>
            <p class="animate-pulse w-full h-3 mt-5 rounded-sm bg-gray"></p>
            <a href="#" target="_blank"
              class="animate-pulse block w-full h-10 mt-5 rounded-md bg-gray "
              rel="noopener noreferrer">.</a>
          </div>
        </div>
        <div  class="animate-pulse w-full flex flex-col bg-white shadow-xl mt-5 rounded-lg p-5">
          <div class="text-left leading-10 w-full">
            <div class="animated-pulse bg-gray rounded-md h-36">.</div>
            <p class="animate-pulse w-full h-5 mt-5 rounded-sm bg-gray"></p>
            <p class="animate-pulse w-full h-3 mt-5 rounded-sm bg-gray"></p>
            <p class="animate-pulse w-full h-3 mt-5 rounded-sm bg-gray"></p>
            <a href="#" target="_blank"
              class="animate-pulse block w-full h-10 mt-5 rounded-md bg-gray "
              rel="noopener noreferrer">.</a>
          </div>
        </div>
        <div  class="animate-pulse w-full flex flex-col bg-white shadow-xl mt-5 rounded-lg p-5">
          <div class="text-left leading-10 w-full">
            <div class="animated-pulse bg-gray rounded-md h-36">.</div>
            <p class="animate-pulse w-full h-5 mt-5 rounded-sm bg-gray"></p>
            <p class="animate-pulse w-full h-3 mt-5 rounded-sm bg-gray"></p>
            <p class="animate-pulse w-full h-3 mt-5 rounded-sm bg-gray"></p>
            <a href="#" target="_blank"
              class="animate-pulse block w-full h-10 mt-5 rounded-md bg-gray "
              rel="noopener noreferrer">.</a>
          </div>
        </div>
        <div  class="animate-pulse w-full flex flex-col bg-white shadow-xl mt-5 rounded-lg p-5">
          <div class="text-left leading-10 w-full">
            <div class="animated-pulse bg-gray rounded-md h-36">.</div>
            <p class="animate-pulse w-full h-5 mt-5 rounded-sm bg-gray"></p>
            <p class="animate-pulse w-full h-3 mt-5 rounded-sm bg-gray"></p>
            <p class="animate-pulse w-full h-3 mt-5 rounded-sm bg-gray"></p>
            <a href="#" target="_blank"
              class="animate-pulse block w-full h-10 mt-5 rounded-md bg-gray "
              rel="noopener noreferrer">.</a>
          </div>
        </div>
        <div  class="animate-pulse w-full flex flex-col bg-white shadow-xl mt-5 rounded-lg p-5">
          <div class="text-left leading-10 w-full">
            <div class="animated-pulse bg-gray rounded-md h-36">.</div>
            <p class="animate-pulse w-full h-5 mt-5 rounded-sm bg-gray"></p>
            <p class="animate-pulse w-full h-3 mt-5 rounded-sm bg-gray"></p>
            <p class="animate-pulse w-full h-3 mt-5 rounded-sm bg-gray"></p>
            <a href="#" target="_blank"
              class="animate-pulse block w-full h-10 mt-5 rounded-md bg-gray "
              rel="noopener noreferrer">.</a>
          </div>
        </div>
        <div  class="animate-pulse w-full flex flex-col bg-white shadow-xl mt-5 rounded-lg p-5">
          <div class="text-left leading-10 w-full">
            <div class="animated-pulse bg-gray rounded-md h-36">.</div>
            <p class="animate-pulse w-full h-5 mt-5 rounded-sm bg-gray"></p>
            <p class="animate-pulse w-full h-3 mt-5 rounded-sm bg-gray"></p>
            <p class="animate-pulse w-full h-3 mt-5 rounded-sm bg-gray"></p>
            <a href="#" target="_blank"
              class="animate-pulse block w-full h-10 mt-5 rounded-md bg-gray "
              rel="noopener noreferrer">.</a>
          </div>
        </div>
        <div  class="animate-pulse w-full flex flex-col bg-white shadow-xl mt-5 rounded-lg p-5">
          <div class="text-left leading-10 w-full">
            <div class="animated-pulse bg-gray rounded-md h-36">.</div>
            <p class="animate-pulse w-full h-5 mt-5 rounded-sm bg-gray"></p>
            <p class="animate-pulse w-full h-3 mt-5 rounded-sm bg-gray"></p>
            <p class="animate-pulse w-full h-3 mt-5 rounded-sm bg-gray"></p>
            <a href="#" target="_blank"
              class="animate-pulse block w-full h-10 mt-5 rounded-md bg-gray "
              rel="noopener noreferrer">.</a>
          </div>
        </div>
        <div  class="animate-pulse w-full flex flex-col bg-white shadow-xl mt-5 rounded-lg p-5">
          <div class="text-left leading-10 w-full">
            <div class="animated-pulse bg-gray rounded-md h-36">.</div>
            <p class="animate-pulse w-full h-5 mt-5 rounded-sm bg-gray"></p>
            <p class="animate-pulse w-full h-3 mt-5 rounded-sm bg-gray"></p>
            <p class="animate-pulse w-full h-3 mt-5 rounded-sm bg-gray"></p>
            <a href="#" target="_blank"
              class="animate-pulse block w-full h-10 mt-5 rounded-md bg-gray "
              rel="noopener noreferrer">.</a>
          </div>
        </div>
        <div  class="animate-pulse w-full flex flex-col bg-white shadow-xl mt-5 rounded-lg p-5">
          <div class="text-left leading-10 w-full">
            <div class="animated-pulse bg-gray rounded-md h-36">.</div>
            <p class="animate-pulse w-full h-5 mt-5 rounded-sm bg-gray"></p>
            <p class="animate-pulse w-full h-3 mt-5 rounded-sm bg-gray"></p>
            <p class="animate-pulse w-full h-3 mt-5 rounded-sm bg-gray"></p>
            <a href="#" target="_blank"
              class="animate-pulse block w-full h-10 mt-5 rounded-md bg-gray "
              rel="noopener noreferrer">.</a>
          </div>
        </div>
        <div  class="animate-pulse w-full flex flex-col bg-white shadow-xl mt-5 rounded-lg p-5">
          <div class="text-left leading-10 w-full">
            <div class="animated-pulse bg-gray rounded-md h-36">.</div>
            <p class="animate-pulse w-full h-5 mt-5 rounded-sm bg-gray"></p>
            <p class="animate-pulse w-full h-3 mt-5 rounded-sm bg-gray"></p>
            <p class="animate-pulse w-full h-3 mt-5 rounded-sm bg-gray"></p>
            <a href="#" target="_blank"
              class="animate-pulse block w-full h-10 mt-5 rounded-md bg-gray "
              rel="noopener noreferrer">.</a>
          </div>
        </div>
        <div  class="animate-pulse w-full flex flex-col bg-white shadow-xl mt-5 rounded-lg p-5">
          <div class="text-left leading-10 w-full">
            <div class="animated-pulse bg-gray rounded-md h-36">.</div>
            <p class="animate-pulse w-full h-5 mt-5 rounded-sm bg-gray"></p>
            <p class="animate-pulse w-full h-3 mt-5 rounded-sm bg-gray"></p>
            <p class="animate-pulse w-full h-3 mt-5 rounded-sm bg-gray"></p>
            <a href="#" target="_blank"
              class="animate-pulse block w-full h-10 mt-5 rounded-md bg-gray "
              rel="noopener noreferrer">.</a>
          </div>
        </div>
       
   


    </div>


  </div>

</template>

<script>
  import {
    onBeforeMount,
    onMounted,
    onUnmounted,
    ref
  } from 'vue'

  export default {
    name: 'Exchanges',

    setup() {

      let exchanges = ref([]);
      let page = ref(20)
      let isLoading = ref(false)


      //Trayendo los exchanges disponibles para mostrar
      const getExchanges = async () => {

        try {

          if (page.value <= 372) {

            isLoading.value = true;
            let response = await fetch(`https://api.coingecko.com/api/v3/exchanges?per_page=${page.value}&page=1`);

            exchanges.value = await response.json();

            isLoading.value = false;

          }

        } catch (err) {
          console.error(err);
        }

      }

      //Funcion para ir cargando mas datos
      const moreData = () => {
        if (page.value <= 372) {
          page.value += 10;
          getExchanges()

        }
      }

      //Evento que ejecuta la carga mediante el scroll
      const scrolling = ({
        target
      }) => {

        const {
          scrollingElement
        } = target;

        const gap = 50;

        if (scrollingElement.scrollTop + scrollingElement.clientHeight + gap >= scrollingElement.scrollHeight) {
          moreData()
        }

      }

      onMounted(() => {
        window.addEventListener('scroll', scrolling)
      })

      onUnmounted(() => {
        window.removeEventListener('scroll', scrolling)
      })

      onBeforeMount(() => {
        getExchanges();
      })

      return {
        exchanges,
        isLoading
      }

    }
  }
</script>

<style>

</style>