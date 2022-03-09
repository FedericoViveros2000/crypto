<template>
  <div class="p-3">
    <nav-filter></nav-filter>
    <router-link to="/"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import navFilter from '@/components/navFilter.vue'

  export default {
    components: {
      navFilter
    }
  }
</script>


<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>