<template>
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <!-- Logo o título -->
        <router-link to="/" class="text-white text-lg font-semibold">
          Mi Sitio
        </router-link>
  
        <!-- Menú de navegación -->
        <div class="space-x-4">
          <router-link to="/" class="text-white">Inicio</router-link>
          <router-link to="/about" class="text-white">Acerca de</router-link>
          <router-link to="/contact" class="text-white">Contacto</router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  // Puedes agregar lógica aquí si es necesario
  </script>
  
  <style scoped>
  /* Puedes agregar estilos adicionales aquí */
  </style>
  