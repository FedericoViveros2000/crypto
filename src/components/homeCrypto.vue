<template>

    <article>

        <div class="flex items-center rounded-md overflow-hidden  my-3 shadow-xl bg-white">

            <label for="cryptoSearch" class="p-2 h-full"><i class="fa-solid fa-magnifying-glass"></i></label>

            <input type="search" id="cryptoSearch" placeholder="Buscar moneda" class="w-full h-full p-2  text-sm"
                v-model="searchElement">
        </div>


        <table class="table-auto w-full" v-if="currency.length > 0">

            <thead>
                <tr>
                    <th>Simbolo</th>
                    <th>Precio Actual</th>
                    <th>Menor precio en 24hs</th>
                    <th>Mayor precio en 24hs</th>
                </tr>
            </thead>

            <tbody v-for="(coin, index) in currency" :key="index">

                <tr class="hover:bg-slate-400" >

                    <td class="p-2">BTC / USDT</td>
                    
                    <td class="p-2">
                        <span
                            class="inline-block py-1 px-4 rounded-m">{{Intl.NumberFormat("en-Us").format(coin.BTCUSDT.close)}}</span>
                    </td>

                    <td class="p-2">{{Intl.NumberFormat("en-Us").format(coin.BTCUSDT.low)}}</td>
                    <td class="p-2">{{Intl.NumberFormat("en-Us").format(coin.BTCUSDT.high)}}</td>

                </tr>

                <tr class="hover:bg-slate-400" >

                    <td class="p-2">BNB / USDT</td>
                    
                    <td class="p-2">
                        <span
                            class="inline-block py-1 px-4 rounded-m">{{Intl.NumberFormat("en-Us").format(coin.BNBUSDT.close)}}</span>
                    </td>

                    <td class="p-2">{{Intl.NumberFormat("en-Us").format(coin.BNBUSDT.low)}}</td>
                    <td class="p-2">{{Intl.NumberFormat("en-Us").format(coin.BNBUSDT.high)}}</td>

                </tr>

                <tr class="hover:bg-slate-400" >

                    <td class="p-2">ADA / USDT</td>
                    
                    <td class="p-2">
                        <span
                            class="inline-block py-1 px-4 rounded-m">{{Intl.NumberFormat("en-Us").format(coin.ADAUSDT.close)}}</span>
                    </td>

                    <td class="p-2">{{Intl.NumberFormat("en-Us").format(coin.ADAUSDT.low)}}</td>
                    <td class="p-2">{{Intl.NumberFormat("en-Us").format(coin.ADAUSDT.high)}}</td>

                </tr>

                <tr class="hover:bg-slate-400" >

                    <td class="p-2">ETH / USDT</td>
                    
                    <td class="p-2">
                        <span
                            class="inline-block py-1 px-4 rounded-m">{{Intl.NumberFormat("en-Us").format(coin.ETHUSDT.close)}}</span>
                    </td>

                    <td class="p-2">{{Intl.NumberFormat("en-Us").format(coin.ETHUSDT.low)}}</td>
                    <td class="p-2">{{Intl.NumberFormat("en-Us").format(coin.ETHUSDT.high)}}</td>

                </tr>

                <tr class="hover:bg-slate-400" >

                    <td class="p-2">SOL / USDT</td>
                    
                    <td class="p-2">
                        <span
                            class="inline-block py-1 px-4 rounded-m">{{Intl.NumberFormat("en-Us").format(coin.SOLUSDT.close)}}</span>
                    </td>

                    <td class="p-2">{{Intl.NumberFormat("en-Us").format(coin.SOLUSDT.low)}}</td>
                    <td class="p-2">{{Intl.NumberFormat("en-Us").format(coin.SOLUSDT.high)}}</td>

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

        <button class="bg-primary py-2 px-4 inline-block text-white rounded-sm mt-4">Ver mas</button>

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
                let filter = currency.value.filter(element => element.includes(searchElement.value))
                return filter;
            })

            //Al montar la aplicacion hacemos que se ejecute el metodo para traer todas las criptomonedas en una lista
            onMounted(() => {                
                socket.on("my-event", (data) => {
                    currency.value = []
                    currency.value.push(data);
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