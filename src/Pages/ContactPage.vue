<template>
  <div class="bg-gray-200 py-8">
    <div class="container mx-auto">
      <!-- Existing content -->
      <h1 class="text-3xl font-semibold mb-4">Contact Me</h1>
      <div class="flex items-center space-x-4">
        <a :href="'mailto:' + email" class="text-blue-500">
          <i class="far fa-envelope"></i> Email
        </a>
        <a :href="instagram" class="text-purple-500">
          <i class="fab fa-instagram"></i> Instagram
        </a>
        <a :href="linkedin" class="text-blue-800">
          <i class="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
      <p class="text-gray-600 mt-4">
        "Tech and style, beautifully combined with Tailwind CSS."
      </p>
      <!-- Rotating and fading text -->
      <div class="text-center mt-8">
        <div
          class="text-8xl font-bold text-red-500 animate__animated animate__rotate-180 animate__fadeOut cursor-pointer transition-transform transform duration-300 hover:rotate-180"
        >
          Thank you
        </div>
        <p class="text-gray-600 text-sm mt-2">
          For more info, you can contact me using the social links above.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const email = "julietwambuku361@gmail.com";
const instagram = "https://www.instagram.com/_juli.e.e_/";
const linkedin = "https://www.linkedin.com/in/juliet-wambuku-033502222";
</script>

<style scoped></style>
