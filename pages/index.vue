<template>
  <button @click="onLogin">Login</button>
</template>

<script lang="ts" setup>
  const onLogin = async() => {
    navigateTo('/login')
  }
</script>
