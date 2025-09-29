<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <section style="text-align:center; padding:3rem 1rem;">
    <h2>404 - Page Not Found</h2>
    <p>The path <code>{{ route.fullPath }}</code> does not exist.</p>
    <RouterLink to="/">Back Home</RouterLink>
  </section>
</template>

