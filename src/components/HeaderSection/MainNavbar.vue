<template>
  <header>
    <nav
      class="nav-links md:static absolute bg-white min-h-[10vh] h-[10vh] left-0 duration-1000 md:w-auto w-full flex items-center px-5"
    >
      <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
        <li>
          <router-link
            to="/"
            class="hover:text-gray-500 transition ease-out duration-1000 hover:border-b p-[10px] cursor-default"
            href="#"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            to="/about"
            class="hover:text-gray-500 transition ease-out duration-1000 hover:border-b p-[10px] cursor-default"
            href="#"
            >About</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
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
