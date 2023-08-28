<template>
  <div
    class="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
    <!-- Image Container -->
    <div class="h-full w-full">
      <img
        class="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-1000"
        src="../../assets/1.jpg" alt="" />
    </div>

    <!-- overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 transition duration-1000">
    </div>

    <!-- Text Container -->
    <div
      class="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 translate-all duration-1000">
      <h1 class="text-3xl font-bold text-white">Beauty</h1>
      <p class="text-sm italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quasi eius dolorum.
      </p>
      <button-tool title="See More" bgColor="bg-white" />
    </div>
  </div>
</template>
<script>
import ButtonTool from '../toolsComponents/ButtonTool.vue'
export default {
  name: 'SingleProject',
  components: {
    ButtonTool
  }
}
</script>
