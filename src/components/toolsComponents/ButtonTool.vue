<template lang="">
  <button class="py-1 px-3 text-sm capitaliz shadow outline-none border-none" :class="bgColor">
    {{ title }}
  </button>
</template>
<script>
export default {
  props: {
    title: String,
    bgColor: String
  }
}
</script>
