<template>
  <h1 class="text-6xl uppercase py-10">Lorem ipsum dolor sit</h1>
  <p class="pb-5 font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto distinctio, repellat
    incidunt
    doloribus
    cumque
    sed, voluptatum harum quibusdam maxime laudantium sit neque optio necessitatibus. Odit fuga doloribus adipisci velit
    culpa.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto distinctio, repellat
    incidunt
    doloribus
    cumque
    sed, voluptatum harum quibusdam maxime laudantium sit neque optio necessitatibus. Odit fuga doloribus adipisci velit
    culpa.</p>
  <div class=" p-10 mb-10 border-solid border-2 border-black-500">
    <div class="grid grid-cols-5 gap-1  mx-auto items-center justify-center ">
      <single-project />
      <single-project />
      <single-project />
      <single-project />
      <single-project />
    </div>
  </div>
</template>
<script>
import SingleProject from '@/components/General/SingleProject.vue';
export default {
  name: "LatestProjects",
  components: {
    SingleProject
  }
}
</script>
