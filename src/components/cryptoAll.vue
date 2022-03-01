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
                <tr class="p-2" v-for="(coin, index) in coins" :key="index">
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
        onMounted
    } from 'vue'

    import {
        io
    } from 'socket.io-client'

    export default {
        name: 'crypoList',

        setup() {
            const coins = ref([]);

            const socket = io('http://localhost:3000/')

            onMounted(() => {

                socket.on('all-crypto', (data) => {
                    
                    coins.value.push(data)

                    coins.value.forEach((coin, index) => {
                        if (coin.symbol === data.symbol) {
                            coins.value[index] = data;
                        }
                    })

                    coins.value.sort((a, b) => b.close - a.close)
                })

            })

            return {
                coins
            }

        }

    }
</script>

<style>

</style>