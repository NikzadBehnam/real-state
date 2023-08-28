<template>
  <div class="text-white bg-gray-900 px-5">
    <!-- Subscribe imput section -->
    <div class="md:flex md:justify-between md:items-center py-7">
      <h1 class="mb-6 text-3xl lg:text-4xl md:mb-0 lg:leading-normal font-sembold md:w/2/5">
        <span class="text-brand-gray">Free</span> until you're ready to lunch
      </h1>
      <div>
        <input type="text" placeholder="Your email address ... "
          class="w-full lg:mb-0 mr-1 text-gray-800 sm:w-72 sm:mr-5 mb-4 py-2.5 px-2 focus:outline-none" />
        <button class="px-5 duration-500 bg-black hover:bg-gray-400 py-2.5 text-white md:w-auto w-full">
          Request Code
        </button>
      </div>
    </div>

    <!-- Items Container -->

    <div class="h-full grid gird-cols-4 sm:grid-cols-3 lg:grid-cols-5 gap-6 py-16 border-t">
      <div id="item">
        <h1 class="text-lg text-white mb-5">Lorem, ipsum dolor</h1>
        <ul>
          <li class="mb-1 text-sm font-thin text-white">
            <i class="fa-solid fa-phone"></i> +39 331 342 7992
          </li>
          <li class="mb-1 text-sm font-thin text-white">
            <i class="fa-solid fa-envelope"></i> anything@somthing.com
          </li>
          <li class="mb-1 text-sm font-thin text-white">
            <i class="fa-solid fa-location-dot"></i> Lorem, ipsum dolor - Lorem, ipsum. 1.
          </li>
        </ul>
      </div>

      <div id="item">
        <h1 class="text-lg text-white mb-5">Lorem, ipsum dolor</h1>
        <p class="text-justify text-sm font-thin text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum delectus inventore totam
          fugiat nemo perspiciatis qui ipsa facilis voluptates, corporis repellat, quam, repellendus
          nostrum veniam iusto sapiente nobis harum a? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Illum delectus inventore totam fugiat nemo perspiciatis qui ipsa facilis
          voluptates, corporis repellat, quam, repellendus nostrum veniam iusto sapiente nobis harum
          a? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum delectus inventore totam
          fugiat nemo perspiciatis qui ipsa facilis voluptates, corporis repellat, quam, repellendus
          nostrum veniam iusto sapiente nobis harum
        </p>
      </div>

      <div id="item" class="col-span-3 bg-gray-900">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11254.902034595372!2d10.829391150000001!3d45.1521565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sit!4v1693214520417!5m2!1sen!2sit"
          width="100%" height="100%" style="border: 0" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>

    <div class="bg-gray-900 flex items-center justify-between py-5 border-t">
      <div class="font-thin">
        Copyright © 2023 All rights reserved by <span class="text-gray-400">Real State</span>
      </div>
      <div class="">
        <i class="text-3xl hover:text-gray-400 duration-500 mx-5 fa-brands fa-facebook"></i>
        <i class="text-3xl hover:text-gray-400 duration-500 mx-5 fa-brands fa-square-instagram"></i>
        <i class="text-3xl hover:text-gray-400 duration-500 mx-5 fa-brands fa-square-twitter"></i>
        <i class="text-3xl hover:text-gray-400 duration-500 mx-5 fa-brands fa-youtube"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MainFooter'
}
</script>
