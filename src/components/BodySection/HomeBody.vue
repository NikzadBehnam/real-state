<template>
  <div class="container mx-auto">
    <div class="">
      <h1 class="text-6xl uppercase py-10">Lorem ipsum dolor sit</h1>
      <div class="pb-10 grid grid-cols-3 gap-10 ">
        <div class="col-span-2 container mx-auto">
          <!-- <p class="py-10 leading-loose text-justify font-sans text-lg text-brand-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sequi quidem? Aperiam
            repellendus, omnis rem magnam sequi dolores! Harum sunt rerum adipisci explicabo dolores
            voluptatum nisi reprehenderit! Ullam, expedita dolor! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dicta, sequi quidem? Aperiam repellendus, omnis rem magnam
            sequi dolores! Harum sunt rerum adipisci explicabo dolores voluptatum nisi reprehenderit!
            Ullam, expedita dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            sequi quidem? Aperiam repellendus, omnis rem magnam
          </p> -->
          <img class="object-cover h-[50vh] w-full" src="@/assets/2.jpg" alt="" />
          <p class="py-10 leading-loose text-justify font-sans text-lg text-brand-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sequi quidem? Aperiam
            repellendus, omnis rem magnam sequi dolores! Harum sunt rerum adipisci explicabo dolores
            voluptatum nisi reprehenderit! Ullam, expedita dolor! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dicta, sequi quidem? Aperiam repellendus, omnis rem magnam
            sequi dolores! Harum sunt rerum adipisci explicabo dolores voluptatum nisi reprehenderit!
            Ullam, expedita dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            sequi quidem? Aperiam repellendus, omnis rem magnam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor accusamus accusantium aliquid, laborum eveniet
            illum ex quod distinctio quidem dolorum excepturi perferendis nobis eos eum nesciunt nihil temporibus aliquam
            ipsum?
          </p>
        </div>
        <div class="">
          <div class="pb-16">
            <img src="@/assets/1.jpg" alt="" />
            <p class="text-center pb-5 pt-2 leading-loose font-light text-brand-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sequi quidem? Aperiam
              repellendus, omnis rem magnam sequi dolores! Harum sunt rerum adipisci explicabo dolores
              voluptatum nisi reprehenderit! Ullam, expedita dolor! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dicta, sequi quidem? Aperiam repellendus, omnis rem magnam
              sequi dolores! Harum sunt rerum adipisci explicabo dolores voluptatum nisi reprehenderit!
              Ullam, expedita dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              sequi quidem? Aperiam repellendus, omnis rem magnam
            </p>
            <div class="font-thin text-center text-brand-black leading-none py-0">Safiullah Amani <br />
              <small class="text-brand-gray py-0">5-Star Google Review</small>
            </div>
          </div>
          <div class="pb-16">
            <img src="@/assets/3.jpg" alt="" />
            <p class="text-center pb-5 pt-2 leading-loose font-light text-brand-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sequi quidem? Aperiam
              repellendus, omnis rem magnam sequi dolores! Harum sunt rerum adipisci explicabo dolores
              voluptatum nisi reprehenderit! Ullam, expedita dolor! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dicta, sequi quidem? Aperiam repellendus, omnis rem magnam
              sequi dolores! Harum sunt rerum adipisci explicabo dolores voluptatum nisi reprehenderit!
              Ullam, expedita dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              sequi quidem? Aperiam repellendus, omnis rem magnam
            </p>
            <div class="font-thin text-center text-brand-black leading-none py-0">Safiullah Amani <br />
              <small class="text-brand-gray py-0">5-Star Google Review</small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <latest-projects />

  </div>
</template>
<script>
import LatestProjects from '@/components/General/LatestProjects.vue'
export default {
  name: 'HomePage',
  components: {
    LatestProjects
  }

}
</script>
