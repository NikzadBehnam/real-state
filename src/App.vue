<script setup></script>

<template>
  <header>
    <top-header />
  </header>

  <main></main>
</template>

<script>
import TopHeader from './components/topHeader/TopHeader.vue'
export default {
  name: 'App',
  components: {
    TopHeader
  }
}
</script>
