<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="container">
    <div class="title">vw适配方案</div>
    <button class="button">hello</button>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 16px;
}
.title {
  font-size: 18px;
  text-align: center;
  margin-bottom: 24px;
}
.button {
  width: 200px;
  height: 48px;
  line-height: 48px;
  background: #007aff;
  color: #fff;
  text-align: center;
  border-radius: 8px;
  margin: 0 auto;
}
</style>
