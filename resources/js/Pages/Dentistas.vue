
<template>
    <div class="flex flex-col items-center">
      <div v-if="dentistaData.length > 0" class="mt-8">
        <div v-for="dentista in Dentistas" :key="dentista.id" class="card" style="width: 8cm; height: 15cm; margin-top: 16px;">
          <div class="md:flex h-full"> 
            <div class="md:flex-shrink-0">
              
            </div>
            <div class="p-8 flex flex-col justify-between w-full h-full">
              <div class="flex flex-col mt-32">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  <h1>Tipo de dentista</h1>{{ dentista.userType }}
                </div>
                <h2 class="block mt-2 text-lg leading-tight font-medium text-black">
                  <nombre-del-consultorio></nombre-del-consultorio> <h1>Nombre del consultorio</h1>{{ dentista.name }}
                </h2>
                <p class="mt-2 text-gray-500"> <h1>Correo</h1>{{ dentista.email }}</p>
                <p class="mt-2 text-gray-500"><h1>Cedula Profesional</h1>{{ dentista.professional_id }}</p>
                <p class="mt-2 text-gray-500"><h1>Nombre del dentista</h1>{{ dentista.name_doctor }}</p>
              </div>
              <div class="flex flex-col">
                <p class="mt-2 text-gray-500"><h1>Teléfono</h1><a :href="'tel://' + dentista.phone">{{ dentista.phone }}</a></p>
                <p class="mt-2 text-gray-500"><h1>Ubicación</h1>{{ dentista.ubicacion }}</p>
              </div>
            </div>
          </div>
          <hr class="border-t-2 border-gray-300 my-6">
        </div>
      </div>
      <p v-else>No hay datos de dentistas.</p>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps(['Dentistas']);
  
  if (!props.Dentistas || props.Dentistas.length === 0) {
    console.warn('No hay datos de dentistas.');
  }
  
  const dentistaData = props.Dentistas;
  </script>
  
  <style>
  .card {
    width: 8cm;
    height: 15cm;
    border: 1px solid black;
    margin-top: 50px; /* Ajustar según sea necesario */
    background-color: white;
    border-radius: 0.5rem;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 20px;
  }
  </style>
  