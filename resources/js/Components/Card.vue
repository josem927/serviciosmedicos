<template>
    <div class="flex-1 p-6">
      <div class="flex items-center justify-center">
        <div class="max-w-full max-h-full flex">
          <img :src="imageSrc" class="max-w-1/2 max-h-full" />
          <div class="text-left ml-4">
            <h1 class="font-serif font-bold text-4xl">{{ title }}</h1>
            <p class="text-left">{{ content }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps(['imageSrc', 'title', 'content']);
  </script>
  
