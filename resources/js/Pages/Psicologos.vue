<template>
  <Head title="Psicologos" />
  <div class="background-image">
    <img src="/images/psicologia.jpg" class="max-w-full h-full object-cover" />
  </div>
  <div v-if="psicologosData.length > 0" class="flex flex-wrap justify-center mt-8">
    <div v-for="psicologo in psicologosData" :key="psicologo.id" class="card">
      <div class="md:flex h-full">
        <div class="md:flex-shrink-0">
          <!-- Add content here if needed -->
        </div>
        <div class="p-8 flex flex-col justify-between w-full h-full">
          <div class="flex flex-col mt-32">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              <h1>Tipo </h1>{{ psicologo.userType }}
            </div>
            <h2 class="block mt-2 text-lg leading-tight font-medium text-white">
              <h1>Nombre del consultorio: {{ psicologo.name }}</h1>
            </h2>
            <p class="mt-2 text-gray-500 text-white"><h1>Correo: </h1>{{ psicologo.email }}</p>
            <p class="mt-2 text-gray-500 text-white"><h1>Cédula Profesional: </h1>{{ psicologo.professional_id }}</p>
            <p class="mt-2 text-gray-500 text-white"><h1>Nombre del doctor: </h1>{{ psicologo.name_doctor }}</p>
            <p class="mt-2 text-gray-500 text-white"><h1>Teléfono: </h1><a :href="'whatsapp://' + psicologo.phone">{{ psicologo.phone }}</a></p>
            <p class="mt-2 text-gray-500 text-white"><h1>Ubicación: </h1>{{ psicologo.ubicacion }}</p>
          </div>
        </div>
      </div>
      <hr class="border-t-2 border-gray-300 my-6">
    </div>
  </div>
  <p v-else>No hay datos de psicólogos.</p>
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { defineProps } from 'vue';

const props = defineProps(['Psicologos']);

if (!props.Psicologos || props.Psicologos.length === 0) {
  console.warn('No hay datos de psicólogos.');
}

const psicologosData = props.Psicologos;
</script>

<style>
.text-super-black {
  color: #000; 
}

.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
}

.background-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card {
  flex: 0 0 calc(33.333% - 20px);
  width: 15cm;
  height: 15cm;
  margin: 10px;
  background: rgba(128, 128, 128, 0.5);
  border-radius: 20px;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  transition: transform 0.3s, box-shadow 0s;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3);
}

.card:not(:last-child) {
  margin-right: 10px;
}

.card::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border-radius: 22px;
  background: linear-gradient(45deg);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s;
}

.card:hover::before {
  opacity: 1;
}
</style>

