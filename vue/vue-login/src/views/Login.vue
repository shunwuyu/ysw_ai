<template>
  <div className="login-container">
    <h2>登录</h2>
    <form @submit.prevent="handleLogin">
      <input type="text" placeholder="用户名" required  v-model="username"/>
      <input type="password" placeholder="密码" required  v-model="password"/>
      <button type="submit">登录</button>
    </form>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useUserStore } from '@/stores/user';
import { login } from '@/api/login';
import { useRouter } from 'vue-router'

const username = ref("");
const password = ref("");
const userStore = useUserStore();
const router = useRouter();

const handleLogin = async () => {
  try {
    const data = await login({
      username: username.value,
      password: password.value
    })
    console.log(data);
    userStore.setToken(data.token);
    userStore.setUsername(data.username);
    router.push('/')

  } catch(err) {
    console.error(err)
  }
}



</script>