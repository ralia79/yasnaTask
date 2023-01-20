<script setup>
import { RouterLink, RouterView } from 'vue-router'
import headerView from './view/user/header/header.view.vue'
</script>
<!-- <RouterLink to="/">Home</RouterLink> -->

<template>
    <headerView></headerView>

  <RouterView />
</template>

<style scoped>

</style>
