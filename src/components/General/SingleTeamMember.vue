<template>
  <div
    class="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
    <!-- Image Container -->
    <div class="h-full w-full">
      <img
        class="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-1000"
        src="../../assets/person1.jpg" alt="" />
    </div>

    <!-- overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 transition duration-1000">
    </div>

    <!-- Text Container -->
    <div
      class="absolute inset-0 flex flex-col items-center justify-center px-10  text-center translate-y-[100%] group-hover:translate-y-0 translate-all duration-1000">
      <h1 class="text-xl font-bold text-white">Devid Beckham</h1>
      <p class="text-sm italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quasi eius dolorum.
      </p>
      <div class="">
        <i class="text-xl hover:text-gray-400 text-white duration-500 mx-2 fa-brands fa-facebook"></i>
        <i class="text-xl hover:text-gray-400 text-white duration-500 mx-2 fa-brands fa-square-instagram"></i>
        <i class="text-xl hover:text-gray-400 text-white duration-500 mx-2 fa-brands fa-square-twitter"></i>
        <i class="text-xl hover:text-gray-400 text-white duration-500 mx-2 fa-brands fa-youtube"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SingleProject',

}
</script>
