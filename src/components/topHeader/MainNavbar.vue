<template>
  <div class="flex space-x-20">
    <div v-for="(navItem, index) in navItems" :key="index" class="flex flex-row ">
      <!-- <router-link :to="navItem">{{ navItem }}</router-link> -->
      <span class="hover:bg-brand-navy-3 p-2 rounded-md transition duration-700 ease-in-out ">{{ navItem }}</span>
    </div>
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
