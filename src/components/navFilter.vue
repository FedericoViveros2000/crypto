<template>
  
  <div>

      <ul class="flex justify-between items-center overflow-x-scroll overflow-y-hidden min-w-full py-2 md:py-3 mb-10">
          <li :class="{'min-w-fit mr-4 bg-primary text-white p-2 rounded-lg': $route.path === '/'}" class="min-w-fit mr-4" > 
          <router-link to="/" class="bg-amber-400 p-3 rounded-md text-sm"> Principales criptomonedas  </router-link></li>


          <li :class="{'min-w-fit mr-4 bg-primary text-white p-2 rounded-lg': $route.path === '/exchanges'}" class="min-w-fit mr-4"> <router-link to="/exchanges" class="bg-amber-400 p-3 rounded-md text-sm"> Plataformas de Intercambios  </router-link></li>
          <li class="min-w-fit mr-4" :class="{'min-w-fit mr-4 bg-primary text-white p-2 rounded-lg': $route.path === '/todas'}"> <router-link to="/todas">Todas las criptomonedas</router-link> </li>
          <li class="min-w-fit mr-4"> <a href="#" class="bg-amber-400 p-3 rounded-md text-sm"> Volumen total  </a></li>
      </ul>

  </div>


</template>

<script>

import {ref} from 'vue'

export default {
    name: 'navFilter',

    setup(){

        const crypto = ref('')

        return{
            crypto
        }
    }

}
</script>

<style>

</style>