<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  about_me: {
    type: String,
    required: false
  }
})
import { ref } from 'vue'
const typed = ref(false)
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ name }}</h1>
    <h2>
      <vue-typer
        :text="about_me"
        :repeat="0"
        initial-action="typing"
        caret-animation="blink"
        class="about-me"
        v-if="!typed && about_me"
        @completed="typed = true"
      ></vue-typer>
      <span class="about-me" v-else>{{ about_me }}</span>
    </h2>
  </div>
</template>
<style lang="scss">
.greetings {
  @media (min-width: 1024px) {
    width: 50vw;
    padding: 2vw 0;
  }
  .about-me {
    color: var(--color-text-primary);
    &.vue-typer {
      .char {
        color: var(--color-text-primary);
        &.selected {
          background-color: #264f78;
        }
      }
      .caret {
        width: 10px;
        background-color: #3f51b5;
      }
    }
  }
}
</style>
