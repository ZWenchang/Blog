<template>
  <div class="blog">
  <Head></Head>
  <Body></Body>
  </div>

</template>
<script setup lang = 'ts'>
import { ref, reactive } from 'vue'
import Body from './body/index.vue'
</script >
<style scoped lang="less">
#app {
  height: 100%;
  overflow: hidden;
}

.blog {
  display: flex;
  height: 100%;
  flex-direction: column;
}
</style>