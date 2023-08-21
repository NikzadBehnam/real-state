<template>
  <div v-for="(navItem, index) in navItems" :key="index" class="flex flex-row">
    <!-- <router-link :to="navItem">{{ navItem }}</router-link> -->
    <span>{{ navItem }}</span>
  </div>
</template>
<script>
export default {
  name: 'MainNavbar',
  data() {
    return {
      navItems: [
        'Home',
        'About',
        'Contact',
        'Blog',

      ]
    }
  }
}
</script>
<style lang=""></style>
