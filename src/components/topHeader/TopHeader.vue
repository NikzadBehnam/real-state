<template>
  <div
    class="flex items-center justify-between h-10vh bg-gradient-to-l from-brand-navy-3 to-brand-navy-2"
  >
    <company-logo />
    <main-navbar />
  </div>
</template>
<script>
import MainNavbar from '@/components/topHeader/MainNavbar.vue'
import CompanyLogo from './CompanyLogo.vue'
export default {
  name: 'TopHeader',
  components: {
    MainNavbar,
    CompanyLogo
  }
}
</script>
<style lang=""></style>
