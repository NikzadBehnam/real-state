<template>
  <nav
    class="nav-links md:static absolute bg-white min-h-[10vh] h-[10vh] left-0 duration-1000 md:w-auto w-full flex items-center px-5"
  >
    <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
      <li>
        <a
          class="hover:text-gray-500 transition ease-out duration-1000 hover:border-b p-[10px] cursor-default"
          href="#"
          >Products</a
        >
      </li>
      <li>
        <a
          class="hover:text-gray-500 transition ease-out duration-1000 hover:border-b p-[10px] cursor-default"
          href="#"
          >Blog</a
        >
      </li>
      <li>
        <a
          class="hover:text-gray-500 transition ease-out duration-1000 hover:border-b p-[10px] cursor-default"
          href="#"
          >Gallery</a
        >
      </li>
      <li>
        <a
          class="hover:text-gray-500 transition ease-out duration-1000 hover:border-b p-[10px] cursor-default"
          href="#"
          >Contact</a
        >
      </li>
      <li>
        <a
          class="hover:text-gray-500 transition ease-out duration-1000 hover:border-b p-[10px] cursor-default"
          href="#"
          >About</a
        >
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'MainNavbar',
  data() {
    return {
      navItems: ['Home', 'About', 'Contact', 'Blog']
    }
  }
}
</script>
<style lang=""></style>
