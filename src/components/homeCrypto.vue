<template>

    <article>

        <div class="flex items-center rounded-md overflow-hidden  my-3 shadow-xl bg-white">

            <label for="cryptoSearch" class="p-2 h-full"><i class="fa-solid fa-magnifying-glass"></i></label>

            <input type="search" id="cryptoSearch" placeholder="Buscar moneda" class="w-full h-full p-2 focus:outline-none"
                v-model="searchElement">
        </div>


        <table class="table-auto w-full  text-center" v-if="currency.length > 0">

            <thead>
                <tr>
                    <th scope="col">Simbolo</th>
                    <th scope="col">Precio Actual</th>
                    <th scope="col">Cambio en 24hs</th>
                </tr>
            </thead>

            <tbody>

                <tr class="hover:bg-hover rounded-md" v-for="(coin, index) in searchElementResult" :key="index">

                    <td class="md:py-4 md:px-6  text-gray-900 whitespace-nowrap ">{{coin.symbol}}</td>
                    
                    <td class="md:py-4 md:px-6  text-gray-900 whitespace-nowrap" >
                        <span
                            class="inline-block py-1 px-4 rounded-m" >{{Intl.NumberFormat("en-Us").format(coin.close)}}</span>
                    </td>

                    <td class=" text-gray-900 whitespace-nowrap py-3">
                        <span class="bg-green inline-block px-3 py-2 md:px-4 rounded-md text-white" v-if="coin.percentChange > 0">{{coin.percentChange}} %</span>   
                        <span class="bg-red inline-block px-3 py-2 md:px-4  rounded-md text-white" v-else>{{coin.percentChange}} %</span>   
                    </td>

                </tr>

            </tbody>

        </table>


        <div v-else class="h-screen animate-pulse">

            <div class="mt-5">
                <div class="w-full h-7 bg-gray rounded-sm mt-3 ">.</div>
                <div class="w-full h-5 bg-gray rounded-sm mt-3 ">.</div>
                <div class="w-full h-5 bg-gray rounded-sm mt-3 ">.</div>
            </div>

            <div class="animated-pulse mt-5">
                <div class="w-full h-7 bg-gray rounded-sm mt-3 ">.</div>
                <div class="w-full h-7 bg-gray rounded-sm mt-3 ">.</div>
                <div class="w-full h-7 bg-gray rounded-sm mt-3 ">.</div>
            </div>

            <div class="animated-pulse mt-5">
                <div class="w-full h-7 bg-gray rounded-sm mt-3 ">.</div>
                <div class="w-full h-7 bg-gray rounded-sm mt-3 ">.</div>
                <div class="w-full h-7 bg-gray rounded-sm mt-3 ">.</div>
            </div>

            <div class="animated-pulse mt-5">
                <div class="w-full h-7 bg-gray rounded-sm mt-3 ">.</div>
                <div class="w-full h-7 bg-gray rounded-sm mt-3 ">.</div>
                <div class="w-full h-7 bg-gray rounded-sm mt-3 ">.</div>
            </div>

            <div class="animated-pulse mt-5">
                <div class="w-full h-7 bg-gray rounded-sm mt-3 ">.</div>
                <div class="w-full h-7 bg-gray rounded-sm mt-3 ">.</div>
                <div class="w-full h-7 bg-gray rounded-sm mt-3 ">.</div>
            </div>

            <div class="animated-pulse mt-5">
                <div class="w-full h-7 bg-gray rounded-sm mt-3 ">.</div>
                <div class="w-full h-7 bg-gray rounded-sm mt-3 ">.</div>
                <div class="w-full h-7 bg-gray rounded-sm mt-3 ">.</div>
            </div>

        </div>

        <button class="bg-primary py-2 px-4 inline-block w-full text-white rounded-sm mt-4">Ver mas</button>

    <router-view></router-view>
    
    </article>


</template>

<script>
    import {
        computed,
        onMounted,
        ref
    } from 'vue'

    import {
        io
    } from "socket.io-client";

    import { useStore } from 'vuex'

    export default {
        
        setup() {
            
            const store = useStore();

            const socket = io('http://localhost:3000/')

            const currency = ref([]);
            const searchElement = ref('');

            const pares = computed(() => store.state.pares)
            //Propiedad computada para ir filtrando los elementos de acuerdo a la criptomoneda buscada
            const searchElementResult = computed(() => {
                let filter = currency.value.filter(coin => coin.symbol.includes(searchElement.value))
                return filter;
            })

            //Al montar la aplicacion hacemos que se ejecute el metodo para traer todas las criptomonedas en una lista
            onMounted(() => {                
                socket.on("my-top-5", (data) => {
                    
                    currency.value = []
                    currency.value = data;
                });
            })

            //Retornando todas los metodos a utilizar
            return {
                currency,
                searchElement,
                searchElementResult,
                pares
            }

        }

    }
</script>

<style>

</style>