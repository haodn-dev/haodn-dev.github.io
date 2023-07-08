<script setup>
import WelcomeItem from './WelcomeItem.vue'
import Github from './icons/Github.vue'
import Gitlab from './icons/Gitlab.vue'
import Gmail from './icons/Gmail.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <Github />
    </template>
    <template #heading>Github</template>
    This is my 
    <a href="https://github.com/haodn-dev" target="_blank" rel="noopener">Github</a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <Gitlab />
    </template>
    <template #heading>Gitlab</template>
    <a href="https://gitlab.com/duongnhathao001" target="_blank" rel="noopener">Gitlab</a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <Gmail />
    </template>
    <template #heading>Email contact</template>
    For any questions, please contact me via email <a href="mailto:haodn.dev@gmail.com">haodn.dev@gmail.com</a>
  </WelcomeItem>
</template>
