<template>
  <header class="bg-white">
    <div class="flex justify-around items-center w-full mx-auto">
      <!-- Logo -->
      <company-logo />

      <!-- Menu Tabs -->
      <main-navbar :openMenu="openMenu" />

      <!-- Mobile View menu bar -->
      <!-- <div class="flex items-center gap-6">

        <font-awesome-icon v-if="openMenu" @click="openMenu = false" :icon="['fas', 'fa-bars']" class="cursor-pointer" />
        <font-awesome-icon v-else @click="openMenu = true" :icon="['fas', 'fa-times']" />
      </div> -->
    </div>
  </header>
</template>
<script>
import MainNavbar from '@/components/HeaderSection/MainNavbar.vue'
import CompanyLogo from '@/components/HeaderSection/CompanyLogo.vue'
export default {
  name: 'TopHeader',
  components: {
    MainNavbar,
    CompanyLogo
  },
  data() {
    return {
      openMenu: true
    }
  }
}
</script>
<style lang=""></style>
