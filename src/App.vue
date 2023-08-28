<template>
  <top-header />
  <router-view />
</template>
<script setup></script>
<script>
import TopHeader from '@/components/HeaderSection/TopHeader.vue'
export default {
  name: 'App',
  components: {
    TopHeader
  }
}
</script>
