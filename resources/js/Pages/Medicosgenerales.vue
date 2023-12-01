<template>
  <div class="flex flex-col items-center">
    <div v-if="medicoData.length > 0" class="mt-8">
      <div v-for="medico in medicogral" :key="medico.id" class="card" style="width: 8cm; height: 15cm; margin-top: 16px;">
        <div class="md:flex h-full"> 
          <div class="md:flex-shrink-0">
           
          </div>
          <div class="p-8 flex flex-col justify-between w-full h-full "> 
            <div class="flex flex-col mt-32"> 
  <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
    <h1>Tipo de médico</h1>{{ medico.userType }}
  </div>
  <h2 class="block mt-2 text-lg leading-tight font-medium text-black">
    <nombre-del-consultorio></nombre-del-consultorio> <h1>Nombre del consultorio</h1>{{ medico.name }}
  </h2>
  <p class="mt-2 text-gray-500"> <h1>Correo</h1>{{ medico.email }}</p>
  <p class="mt-2 text-gray-500"><h1>Cédula Profesional</h1>{{ medico.professional_id }}</p>
  <p class="mt-2 text-gray-500"><h1>Nombre del doctor</h1>{{ medico.name_doctor }}</p>
</div>

            <div class="flex flex-col"> 
              <p class="mt-2 text-gray-500"><h1>Teléfono</h1><a :href="'whatsapp://' + medico.phone">{{ medico.phone }}</a></p>
              <p class="mt-2 text-gray-500"><h1>Ubicación</h1>{{ medico.ubicacion }}</p>
            </div>
          </div>
        </div>
        <hr class="border-t-2 border-gray-300 my-6">
      </div>
    </div>
    <p v-else>No hay datos de médicos generales.</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['medicogral']);

if (!props.medicogral || props.medicogral.length === 0) {
  console.warn('No hay datos de médicos generales.');
}

const medicoData = props.medicogral;
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
