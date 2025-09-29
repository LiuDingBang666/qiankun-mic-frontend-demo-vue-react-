<script setup lang="ts">
</script>

<template>
  <div>
    <!-- 重要: 路径需要与 registerMicroApps 中 activeRule 一致 -->
    <router-link to="/app-vue">Vue 子应用</router-link>
    <router-link style="margin-left: 12px" to="/app-react">React 子应用</router-link>
  </div>
  <div id="child-app"></div>
</template>

<style scoped>

</style>
