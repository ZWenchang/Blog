<template>
  <div id="body">
    <div class="jack">
      <h1>JackSparrow</h1>
    </div>
    <div class="jacksparrow">
      <div class="image style1">
        <img src="src\assets\zzz.png" style="height: 400px;width: 400px;">
      </div>
      <div class="box" style="padding: 0px,40px;">
        <div class="text style1">
          <ul>
            <h1 style="font-size: 30px;">About me</h1>
            <br>
            <br>
            <br>
            <p class="one">"Hello! I’m a senior at Duke University studying computer science and statistics. My passion
              for tech ranges from" </p>
              <p class="one">"Hello! I’m a senior at Duke University studying computer science and statistics. My passion
              for tech ranges from" </p>
          </ul>
        </div>
        <div class="icon">
          <img src="src\assets\icon\github.svg">
          <img src="" alt="">
          <img src="" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang = 'ts'>
import { ref, reactive } from 'vue'

</script>
<style scoped lang="less">
#body {
  .jack {
    margin-top: 100px;
    text-align: center;
    margin-bottom: 60px;
  }

  .jacksparrow {
    display: flex;
    justify-content: center;


    .style1 {
      height: 300px;
      width: 400px;
    }
    .icon {
      display: flex;
      width: 30px;
      height: 30px;
    }

    .one {
      color: rgb(68, 68, 68);
      font-size: 18px;
      line-height: 1.5;
    }
  }
}

h1 {
  display: inline-block;
  margin: 0px;
  color: rgb(68, 68, 68);
  font-weight: bold;
  text-align: center;
  font-size: 50px;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}</style>