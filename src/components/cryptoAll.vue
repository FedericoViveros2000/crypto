<template>
    <section class="mt-4">
        <table class="table-auto w-full">

            <thead>
                <tr>
                    <th>Simbolo</th>
                    <th>Precio actual</th>
                    <th>Menor precio en 24hs</th>
                    <th>Mayor precio en 24hs</th>
                </tr>
            </thead>
            <tbody v-for="(coin, index) in coins" :key="index">

                <tr class="p-2">
                    <td class="p-2">{{coin[0]}}</td>
                    <td class="p-2">{{Intl.NumberFormat('en-Us').format(coin[1].close)}}</td>
                    <td class="p-2">{{Intl.NumberFormat('en-Us').format(coin[1].low)}}</td>
                    <td class="p-2">{{Intl.NumberFormat('en-Us').format(coin[1].high)}}</td>
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

                socket.on('my-event', (data) => {
                    coins.value = [];
                    let coin = Object.entries(data);
                    let coinsSort = coin.sort((a, b) => b[1].close - a[1].close)
                    coins.value = coinsSort;
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