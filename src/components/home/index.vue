<template>
  <div class="home">
    <nav1></nav1>
    <content></content>
  </div>
</template>
<script setup lang = 'ts'>
import { ref, reactive } from "vue";
import nav1 from './head/index.vue'
import content from './body/index.vue'
</script>
<style  lang ="less">
html,
body,
#app {
  height: 100%;
  overflow: hidden;
}

.home {
  display: flex;
  height: 100%;
  flex-direction: column;
}
</style>