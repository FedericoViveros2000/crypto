<template>
  
  <div>

      <ul class="flex justify-between items-center overflow-x-scroll min-w-full h-16 mb-7">
          <li class="min-w-fit mr-4"> <router-link to="/" class="bg-amber-400 p-3 rounded-md text-sm"> Criptomonedas  </router-link></li>
          <li class="min-w-fit mr-4"> <router-link to="/exchanges" class="bg-amber-400 p-3 rounded-md text-sm"> Plataformas de Intercambios  </router-link></li>
          <li class="min-w-fit mr-4"> <router-link to="/todas">Todas las criptomonedas</router-link> </li>
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