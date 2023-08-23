<template>
  <div class="flex items-center h-20vh border-b">
    <div class=" flex items-center justify-around container mx-auto ">
      <company-logo />
      <main-navbar />
    </div>
  </div>
</template>
<script>
import MainNavbar from '@/components/topHeader/MainNavbar.vue'
import CompanyLogo from '@/components/topHeader/CompanyLogo.vue'
export default {
  name: 'TopHeader',
  components: {
    MainNavbar,
    CompanyLogo
  }
}
</script>
<style lang=""></style>
