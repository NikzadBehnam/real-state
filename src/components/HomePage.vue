<template>
  <div>
    <header>
      <top-header />
    </header>
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
import TopHeader from '@/components/HeaderSection/TopHeader.vue'
import MainHero from '@/components/HeroSection/MainHero.vue'
import HomeBody from '@/components/BodySection/HomeBody.vue'
import MainFooter from '@/components/FooterSection/MainFooter.vue'
export default {
  name: 'HomePage',
  components: {
    TopHeader,
    MainHero,
    HomeBody,
    MainFooter
  }
}
</script>
