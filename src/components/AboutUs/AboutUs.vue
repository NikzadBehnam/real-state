<template lang="">
  <main>
    <local-hero title="About Us" />
    <div class="container mx-auto">
      <div class="">
        <h1 class="text-6xl uppercase py-10">Lorem ipsum dolor sit</h1>
        <div class="pb-10 grid grid-cols-1 gap-10">
          <div class="col-span-2 container mx-auto">
            <img class="object-cover h-[50vh] w-full" src="@/assets/2.jpg" alt="" />
            <p class="py-10 leading-loose text-justify font-sans text-lg text-brand-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sequi quidem? Aperiam
              repellendus, omnis rem magnam sequi dolores! Harum sunt rerum adipisci explicabo
              dolores voluptatum nisi reprehenderit! Ullam, expedita dolor! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Dicta, sequi quidem? Aperiam repellendus, omnis rem
              magnam sequi dolores! Harum sunt rerum adipisci explicabo dolores voluptatum nisi
              reprehenderit! Ullam, expedita dolor! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dicta, sequi quidem? Aperiam repellendus, omnis rem magnam Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Dolor accusamus accusantium
              aliquid, laborum eveniet illum ex quod distinctio quidem dolorum excepturi perferendis
              nobis eos eum nesciunt nihil temporibus aliquam ipsum?
            </p>
          </div>
        </div>
      </div>
      <latest-team-members />
    </div>
    <about-us-testimonials />
    <main-footer />

  </main>
</template>
<script>
import MainFooter from '../FooterSection/MainFooter.vue';
import LatestTeamMembers from '@/components/General/LatestTeamMembers.vue';
import LocalHero from '@/components/HeroSection/LocalHero.vue'
import AboutUsTestimonials from '@/components/General/AboutUsTestimonials.vue'
export default {
  name: 'AboutUs',
  components: {
    LocalHero,
    LatestTeamMembers,
    MainFooter,
    AboutUsTestimonials
  }
}
</script>
