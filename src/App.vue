<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
</script>

<template>
  <router-view />
</template>

<style>
html,
body {
  height: 100%;
  overflow-y: hidden;
  margin: 0;
}
#app {
  height: 100%;
}
</style>
