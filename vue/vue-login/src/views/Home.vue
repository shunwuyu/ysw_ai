<template>
  <div class="home-container">
    <div v-if="userStore.isLogin">
      <h2>欢迎：{{userStore.username}}</h2>
      <button @click="logout">退出登录</button>
    </div>
    <div v-else>
      <p>请先 <router-link to="/login">登录</router-link></p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();

const logout = () => {
  userStore.logout();
  router.push('/login');
}

</script>