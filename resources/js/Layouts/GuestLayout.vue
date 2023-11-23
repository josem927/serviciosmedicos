<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
</script>

<template>
  <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-transparent">
    <div class="w-full sm:max-w-md mb-2 px-6 py-2 overflow-hidden sm:rounded-lg animate__animated animate__fadeInUp lights-animation form-container">
      <div class="text-center mb-4">
        <img src="/images/MediConnect.png" class="w-32 h-30 mx-auto" />
      </div>
      <slot/>
    </div>
  </div>
</template>

<style scoped>
@keyframes lights {
  0% {
    border-color: rgb(11, 3, 119);
  }
  25% {
    border-color: #ff5e00;
  }
  50% {
    border-color: #ff0000; /* Color verde para la línea */
  }
  75% {
    border-color: rgb(11, 3, 119); /* Color rojo para la línea */
  }
  100% {
    border-color: #0000ff; /* Color azul para la línea */
  }
}

body {
  background-image: src="/images/MediConnect.png" class="w-40 h-40 text-gray-50";
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  
}
body {
background-color: #001f3f; /* Código de color para azul marino */
  margin: 0;
}
.lights-animation {
  animation: lights 5s infinite linear;
  border: 4px solid;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
}

.form-container {
  background-color: rgba(0, 31, 63, 0); 
  padding: 10px;background-color: rgba(0, 31, 63, 0); 
  padding: 10px; 
  max-width: 450px;
  margin: auto;
}
</style>
