<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="search" to="/discount">特惠专区</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/collection">收藏</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to="/trip">行程</van-tabbar-item>
    <van-tabbar-item icon="user-o" to="/account">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const active = ref<number>(0)
</script>