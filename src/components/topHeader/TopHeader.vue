<template>
  <div class="bg-brand-navy-3">
    <h1>Top Header</h1>
    <main-navbar />
    <company-logo />

  </div>
</template>
<script>
import MainNavbar from '@/components/topHeader/MainNavbar.vue'
import CompanyLogo from './CompanyLogo.vue';
export default {
  name: "TopHeader",
  components: {
    MainNavbar,
    CompanyLogo
  }
}
</script>
<style lang="">
  
</style>