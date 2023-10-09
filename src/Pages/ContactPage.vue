<template>
  <div class="bg-gray-200 py-8">
    <div class="container mx-auto">
      <!-- <div v-for="contact in contacts" :key="contact.id" class="Contactpage"> -->
      <!-- Existing content -->
      <form>
        <div class="flex items-center space-x-4 mb-4">
          <a :href="'Email:' + email" class="text-blue-500">
            <i class="far fa-envelope"></i> Email
          </a>
          <a :href="'Instagram:' + instagram" class="text-purple-500">
            <i class="fab fa-instagram"></i> Instagram
          </a>
          <a :href="'Linkedin:' + linkedin" class="text-blue-800">
            <i class="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
        <h1
          class="text-2xl bold text-blue-800 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce"
        >
          GET IN TOUCH WITH ME
        </h1>
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-600"
            >Name</label
          >
          <input
            id="name"
            type="name"
            name="name"
            class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Your Name"
          />

          <label for="email" class="block text-sm font-medium text-gray-600"
            >Email</label
          >
          <input
            id="email"
            type="email"
            name="email"
            class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Your Email"
          />
        </div>
        <div class="mb-4">
          <label for="message" class="block text-sm font-medium text-gray-600"
            >Message</label
          >
          <textarea
            id="message"
            name="message"
            rows="4"
            class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  <!-- </div> -->
</template>

<script setup>
const email = "julietwambuku361@gmail.com";
const instagram = "https://www.instagram.com/_juli.e.e_/";
const linkedin = "https://www.linkedin.com/in/juliet-wambuku-033502222";
</script>

<style scoped></style>
