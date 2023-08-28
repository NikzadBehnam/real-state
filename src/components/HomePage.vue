<template>
  <div>
    <main>
      <main-hero />
      <home-body />
    </main>
    <footer>
      <main-footer />
    </footer>
  </div>
</template>
<script>
import MainHero from '@/components/HeroSection/MainHero.vue'
import HomeBody from '@/components/BodySection/HomeBody.vue'
import MainFooter from '@/components/FooterSection/MainFooter.vue'
export default {
  name: 'HomePage',
  components: {
    MainHero,
    HomeBody,
    MainFooter
  }
}
</script>
