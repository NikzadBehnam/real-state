<template>
  <div class="flex items-center justify-center">
    <di v class="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-2">
      <!-- Container -->
      <div
        class="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow"
      >
        <!-- Image Container -->
        <div class="h-[60vh] w-[100vw]">
          <img class="object-top transition-transform duration-1000" src="@/assets/4.jpg" alt="" />
        </div>

        <!-- overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 transition duration-10000"
        ></div>

        <!-- Text Container -->
        <div
          class="absolute inset-0 flex flex-col items-start pl-96 w-[70vw] space-y-5 justify-center text-left translate-all duration-1000"
        >
          <span class="text-3xl md:font-xl text-white font-semibold">Lorem ipsum dolor sit.</span>
          <h1 class="text-7xl text-white">Lorem ipsum dolor sit amet consectetur.</h1>

          <p
            class="text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quasi eius dolorum.
          </p>
        </div>
      </div>
    </di>

    <!-- copyright -->
  </div>
</template>
<script>
export default {
  name: 'MainHero',
  components: {},
  props: {
    title: String
  }
}
</script>
<style lang=""></style>
