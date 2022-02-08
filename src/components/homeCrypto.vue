<template>

    <article>

        <input type="search" placeholder="Buscar moneda" class="w-full rounded-md border-2 border-neutral-900 p-2 my-3 text-sm" v-model="searchElement">

        <table class="table-auto w-full">

            <thead>
                <tr>
                    <th>Simbolo</th>
                    <th>Precio Actual</th>
                    <th>ATH</th>
                </tr>
            </thead>

            <tbody>

                <tr v-for="crypto in searchElementResult" :key="crypto.id" class="hover:bg-slate-400">
                    <td class="p-2 flex items-center"><img :src="crypto.image" :alt="crypto.symbol" class="w-5 mr-6"> {{crypto.symbol.toUpperCase()}}</td>
                    <td class="p-2">$ {{Intl.NumberFormat("en-us").format(crypto.current_price)}}</td>
                    <td class="p-2">$ {{Intl.NumberFormat("en-us").format(crypto.ath)}}</td>
                </tr>

            </tbody>
        </table>

    </article>


</template>

<script>

    import { computed, onMounted, ref } from 'vue'

    export default {

        //name: 'homeCrypto',

        setup() {

            const currency = ref([]);

            const searchElement = ref('');


            //Propiedad computada para ir filtrando los elementos de acuerdo a la criptomoneda buscada
            const searchElementResult = computed(() => {

                let filter =  currency.value.filter(element =>  element.symbol.toLowerCase().includes(searchElement.value.toLowerCase()) || element.name.toLowerCase().includes(searchElement.value.toLowerCase()))

                return filter;
            })

            //Metodo mediante el cual obtenemos todas la criptomonedas
            const cryptoList = async () => {

                try {

                    const response =  await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=15&page=1&sparkline=false')

                    currency.value = await response.json();

                    console.log(currency.value);

                } catch (err) {
                    console.log(err);
                }

            }

            //Al montar la aplicacion hacemos que se ejecute el metodo para traer todas las criptomonedas en una lista
            onMounted(() => {
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