<script setup lang="ts">
// 集成路由后只需引入 RouterLink / RouterView
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="logos">
      <a href="https://vite.dev" target="_blank"><img src="/vite.svg" class="logo" alt="Vite logo" /></a>
      <a href="https://vuejs.org/" target="_blank"><img src="/vue.svg" class="logo vue" alt="Vue logo" /></a>
    </div>
    <nav class="nav">
      <RouterLink to="/">Home</RouterLink>
      <span class="sep">|</span>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <main>
    <!-- 路由出口 -->
    <RouterView />
  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover { filter: drop-shadow(0 0 2em #646cffaa); }
.logo.vue:hover { filter: drop-shadow(0 0 2em #42b883aa); }
.nav { margin-top: .5rem; display: flex; gap: .75rem; align-items: center; }
.sep { opacity: .5; }
header { text-align: center; }
main { padding: 1.5rem; }
.logos { display: flex; justify-content: center; }
.nav a { text-decoration: none; color: inherit; }
.router-link-active { color: #42b883; font-weight: 600; }
.router-link-exact-active { text-decoration: underline; }
</style>
