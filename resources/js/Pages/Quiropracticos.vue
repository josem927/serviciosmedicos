<template>
    <div class="flex flex-col items-center">
      <div v-if="quiropracticosData.length > 0" class="mt-8">
        <div v-for="quiropractico in quiropracticosData" :key="quiropractico.id" class="card">
          <div class="md:flex h-full">
            <div class="md:flex-shrink-0">
              <!-- Add content here if needed -->
            </div>
            <div class="p-8 flex flex-col justify-between w-full h-full">
              <div class="flex flex-col mt-32">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  <h1>Tipo de quiropráctico</h1>{{ quiropractico.userType }}
                </div>
                <h2 class="block mt-2 text-lg leading-tight font-medium text-black">
                  <h1>Nombre del consultorio</h1>{{ quiropractico.name }}
                </h2>
                <p class="mt-2 text-gray-500"><h1>Correo</h1>{{ quiropractico.email }}</p>
                <p class="mt-2 text-gray-500"><h1>Cédula Profesional</h1>{{ quiropractico.professional_id }}</p>
                <p class="mt-2 text-gray-500"><h1>Nombre del quiropráctico</h1>{{ quiropractico.name_quiropractico }}</p>
              </div>
              <div class="flex flex-col">
                <p class="mt-2 text-gray-500"><h1>Teléfono</h1><a :href="'tel://' + quiropractico.phone">{{ quiropractico.phone }}</a></p>
                <p class="mt-2 text-gray-500"><h1>Ubicación</h1>{{ quiropractico.ubicacion }}</p>
              </div>
            </div>
          </div>
          <hr class="border-t-2 border-gray-300 my-6">
        </div>
      </div>
      <p v-else>No hay datos de quiroprácticos.</p>
    </div>
  </template>
  
  <script setup>
    import { defineProps } from 'vue';
  
    const props = defineProps(['Quiropracticos']);
  
    if (!props.Quiropracticos || props.Quiropracticos.length === 0) {
      console.warn('No hay datos de quiroprácticos.');
    }
  
    const quiropracticosData = props.Quiropracticos;
  </script>
  
  <style>
    .card {
      width: 8cm;
      height: 15cm;
      border: 1px solid black;
      margin-top: 50px;
      background-color: white;
      border-radius: 0.5rem;
      overflow: hidden;
      box-sizing: border-box;
      border-radius: 20px;
    }
  </style>
  