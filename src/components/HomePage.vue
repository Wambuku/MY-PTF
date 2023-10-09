<template>
  <div
    class="bg-cover bg-center h-screen flex items-center"
    :style="{ backgroundImage: 'url(' + backgroundImage + ')' }"
  >
    <div class="container mx-auto text-center">
      <h1
        class="text-8xl font-bold text-gray-300 mb-4 animate__animated animate__fadeInUp"
      >
        Welcome to My Portfolio
      </h1>
      <p
        class="text-2xl text-gray-300 font-bold mb-8 animate__animated animate__fadeIn"
      >
        I am a tech enthusiast and a Front-end developer.
      </p>
      <div class="text-center mt-8">
        <a
          href="../assets/my cv.pdf"
          class="bg-primary text-gray-300 font-bold px-6 py-2 rounded-full text-lg hover:bg-secondary text-amber-600 animate__animated animate__bounceIn animate__delay-3s"
          download="CURRICULUM VITAE Edited.pdf"
        >
          My CV
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import backgroundImage from "../assets/background.jpg";

const name = "HomePage";
</script>

<style scoped>
@media (max-width: 640px) {
  /* Example: Adjust styles for screens smaller than 640px */
  .text-4xl {
    font-size: 2rem;
  }
}
</style>
