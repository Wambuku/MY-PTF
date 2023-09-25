<template>
  <div class="container mx-auto bg-slate-950 mt-8">
    <div
      class="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-8"
    >
      <div class="w-full md:w-1/2">
        <img
          :class="{ 'rotate-90': imageRotated }"
          @click="rotateImage"
          src="../assets/portfolio.jpg"
          alt="Tech Image"
          class="max-w-full h-auto cursor-pointer transition-transform transform duration-300 hover:rotate-90 rounded-full hover:opacity-75"
        />
      </div>
      <div class="w-full md:w-1/2">
        <h1 class="text-4xl text-red-900 font-bold">About Me</h1>
        <p class="text-white mt-4">
          I am Juliet Kinyanjui.l enjoy programming working with the PHP HTML
          CSS and Javascript with different frameworks like React js, Vuejs and
          styling with Tailwind mostly to create front-end. We are not always
          perfect but we learn from each other and build each other as a team.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const imageRotated = ref(false);

const rotateImage = () => {
  imageRotated.value = !imageRotated.value;
};
</script>

<style scoped>
.rotate-90 {
  transform: rotate(90deg);
}
</style>
