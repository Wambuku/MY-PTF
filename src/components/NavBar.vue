<template>
  <nav class="bg-primary text-white py-0">
    <div class="bg-gray-900 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-2xl font-bold">
          <img
            src="../assets/jlogo.png"
            alt="My Logo"
            class="w-16 h-16 mr-8 rounded-full"
          />
        </div>
        <ul class="flex space-x-6">
          <li><router-link to="/" class="text-blue-500">Home</router-link></li>
          <li>
            <router-link to="/AboutPage" class="text-blue-500"
              >About</router-link
            >
          </li>
          <li>
            <router-link to="/ServicePage" class="text-blue-500"
              >Services</router-link
            >
          </li>
          <li>
            <router-link to="/ContactPage" class="text-blue-500"
              >Contact</router-link
            >
          </li>
          <!-- Link to the Services page -->
          <!-- <li><router-link to="/contact">Contact</router-link></li> -->
          <!-- <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
// import { ref } from "vue";

// const isDropdownOpen = ref(false);

// const toggleDropdown = () => {
//   isDropdownOpen.value = !isDropdownOpen.value;
// };
</script>

<style scoped></style>
