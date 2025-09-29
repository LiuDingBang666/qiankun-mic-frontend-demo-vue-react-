<script setup lang="ts">
</script>

<template>
  <div>
    <!-- 重要: 路径需要与 registerMicroApps 中 activeRule 一致 -->
    <router-link replace to="/app-vue/?token=1112">Vue 子应用</router-link>
    <router-link replace style="margin-left: 12px" to="/app-react/?token=1112">React 子应用</router-link>
  </div>
  <div id="child-app"></div>
</template>

<style scoped>

</style>
