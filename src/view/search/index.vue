<template>
  <div>
    <vue-header/>
    <search></search>
    <router-view/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import vueHeader from '@/components/header.vue';
  import search from '@/components/search'
  export default {
    components: {
      vueHeader,
      search
    }
  }
</script>

<style scoped>
</style>
