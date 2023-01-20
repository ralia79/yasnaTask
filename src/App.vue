<script setup>
import { RouterLink, RouterView } from 'vue-router'
import headerView from './view/user/header/header.view.vue'
import Footer from './view/user/footer/footer.vue'
</script>

<template>
  <headerView></headerView>
  
  <RouterView />

  <Footer></Footer>

</template>

<style scoped>

</style>
