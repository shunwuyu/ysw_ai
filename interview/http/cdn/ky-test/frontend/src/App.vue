<script setup>
import HelloWorld from './components/HelloWorld.vue'
// CORS policy
// Cross-Origin Resource Sharing policy。
async function fetchUser() {
  // 前端知道访问的地址和域名
  // 委托vite 工程化 帮解决下
  const res = await fetch('/api/user');
  const data = await res.json();
  console.log(data);
}

fetchUser();
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
