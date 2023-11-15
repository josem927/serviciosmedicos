<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
</script>

<template>
  <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
    <div>
      <!-- Reemplaza la imagen y la ruta con tus propios valores -->
      <Link href="/">
        <img src="/images/MediConnect.png" class="w-40 h 20 fill-current text-gray-50"
        />  
      </Link>
    </div>

    <div
      class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"
    >
      <slot />
    </div>
  </div>
</template>
