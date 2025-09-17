<template>
  <div>
    <router-view />
    <div class="footer h-12">
      <TabBar class="fixed bottom-0" />
    </div>
  </div>
</template>
<script setup lang="ts">
import TabBar from '@/views/layout/TabBar.vue';
</script>