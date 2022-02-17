<template>
    <section class="mt-4">
        <table class="table-auto w-full text-center">

            <thead>
                <tr>
                    <th scope="col" >Simbolo</th>
                    <th scope="col" >Precio Actual</th>
                    <th scope="col" >Cambio en 24hs</th>
                </tr>
            </thead>
            <tbody>

                <tr class="p-2" v-for="(coin, index) in coinsSort" :key="index">
                    <td class="p-3">{{coin.symbol}}</td>
                    <td class="p-3">{{coin.close}}</td>
                    <td class="p-3"><p :class="{ 'bg-red rounded-sm py-2 text-white': coin.percentChange < 0, 'bg-green rounded-sm py-2 text-white':coin.percentChange > 0 }">{{coin.percentChange}}</p></td>
                </tr>

            </tbody>
        </table>
    </section>
</template>

<script>
    import {
        ref,
        onMounted,
        computed
    } from 'vue'

    import {
        io
    } from 'socket.io-client'

    export default {
        name: 'crypoList',

        setup() {
            const coins = ref([]);

            const socket = io('http://localhost:3000/')

            const coinsSort = computed(() => {  
                return [...coins.value].sort((a, b) => b[1].close - a[1].close)
            })

            onMounted(() => {

                socket.on('my-event', (data) => {
                    coins.value = []
                    /* coins.value = [];
                    let dataTwo = Object.entries(data);
                    coins.value = dataTwo */
                    coins.value.push(data)
                })

            })

            return {
                coins,
                coinsSort
            }

        }

    }
</script>

<style>

</style>