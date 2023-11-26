<template>
  <div class="flex-1 p-6">
    <div class="flex items-center justify-center">
      <div class="card-container max-w-full max-h-full flex bg-black bg-opacity-25 rounded-md p-4">
        <img :src="imageSrc" class="card-image max-h-full" />
        <div class="text-left ml-4">
          <h1 class="font-serif font-bold text-4xl">{{ title }}</h1>
          <p class="text-left">{{ content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  width: 345px; /* este es para el ancho del contorno de las tarjetas */
  height: 200px; /* este es para la altura */
  transition: background-color 0.3s; /* Agregue una transición suave al cambio de color */
}

.card-container:hover {
  background-color: rgb(20, 102, 102);
}

.card-image {
  max-width: 100%;
  max-height: 100%;
}
</style>

<script setup lang="ts">
const props = defineProps(['imageSrc', 'title', 'content']);
</script>
