<template>

    <article>

        <div class="flex items-center rounded-md overflow-hidden  my-3 shadow-xl bg-white">

            <label for="cryptoSearch" class="p-2 h-full"><i class="fa-solid fa-magnifying-glass"></i></label>

            <input type="search" id="cryptoSearch" placeholder="Buscar moneda"
                class="w-full h-full p-2  text-sm" v-model="searchElement">
        </div>


        <table class="table-auto w-full" v-if="!isLoading">

            <thead>
                <tr>
                    <th>Simbolo</th>
                    <th>Precio Actual</th>
                    <th>ATH</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="crypto in searchElementResult" :key="crypto.id" class="hover:bg-slate-400">
                    <td class="p-2 flex items-center"><img :src="crypto.image" :alt="crypto.symbol" class="w-5 mr-6">
                        {{crypto.symbol.toUpperCase()}}</td>
                    <td class="p-2">$ {{Intl.NumberFormat("en-us").format(crypto.current_price)}}</td>
                    <td class="p-2">$ {{Intl.NumberFormat("en-us").format(crypto.ath)}}</td>
                </tr>
            </tbody>

        </table>

        <div v-else class="h-screen animate-pulse"> 

            <div class="mt-5">
                <div class="w-full h-7 bg-gray rounded-sm mt-3 ">.</div>
                <div class="w-full h-5 bg-gray rounded-sm mt-3 ">.</div>
                <div class="w-full h-5 bg-gray rounded-sm mt-3 ">.</div>
            </div>

            <div  class="animated-pulse mt-5">
                <div class="w-full h-7 bg-gray rounded-sm mt-3 ">.</div>
                <div class="w-full h-7 bg-gray rounded-sm mt-3 ">.</div>
                <div class="w-full h-7 bg-gray rounded-sm mt-3 ">.</div>
            </div>

            <div  class="animated-pulse mt-5">
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


    </article>


</template>

<script>
    import {
        computed,
        onBeforeMount,
        ref
    } from 'vue'

    export default {

        //name: 'homeCrypto',

        setup() {

            const currency = ref([]);

            const searchElement = ref('');
            const isLoading = ref(false)

            //Propiedad computada para ir filtrando los elementos de acuerdo a la criptomoneda buscada
            const searchElementResult = computed(() => {
                let filter = currency.value.filter(element => element.symbol.toLowerCase().includes(
                    searchElement.value.toLowerCase()) || element.name.toLowerCase().includes(
                    searchElement.value.toLowerCase()))
                return filter;
            })

            //Metodo mediante el cual obtenemos todas la criptomonedas
            const cryptoList = async () => {

                try {
                    isLoading.value = true;
                    const response = await fetch(
                        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=15&page=1&sparkline=false'
                        )

                    currency.value = await response.json();
                    isLoading.value = false
                } catch (err) {
                    console.log(err);
                }

            }

            //Al montar la aplicacion hacemos que se ejecute el metodo para traer todas las criptomonedas en una lista
            onBeforeMount(() => {
                cryptoList()
            })

            //Retornando todas los metodos a utilizar
            return {
                currency,
                cryptoList,
                searchElement,
                searchElementResult
            }

        }

    }
</script>

<style>

</style>