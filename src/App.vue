<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Introduce from './components/Introduce.vue'
</script>

<template>
  <header></header>
  <div class="wrapper">
    <Introduce name="haodn.dev" about_me="Hello my name is Hao. I am a full-stack web developer" />
  </div>
  <RouterView />
</template>
