<template>
  <div>
    <Head title="Medico General" />
    <div class="background-image">
      <img src="/images/general.jpg" class="max-w-full h-full object-cover" />
    </div>
    <div class="flex flex-col items-center">
      <div class="container">
<<<<<<< HEAD
        <div v-if="medicoData.length > 0" class="mt-8 flex flex-wrap -mx-2">
          <div v-for="medico in medicogral" :key="medico.id" 
            class="card mx-4 mb-4" 
            :class="'card-' + medico.id"
            @mouseover="changeTextColor(medico.id, true)" 
            @mouseout="changeTextColor(medico.id, false)">
=======
        <div v-if="medicoData.length > 0" class="mt-7 flex flex-wrap -mx-4">
          <div v-for="medico in medicogral" :key="medico.id" class="card mx-4 mb-4">
>>>>>>> de4d524e8dcb0d985a274b0dd097a92e5c79d609
            <div class="md:flex h-full">
              <div class="md:flex-shrink-0"></div>
              <div class="p-8 flex flex-col justify-between items-center w-full h-full">
<<<<<<< HEAD
                <div class="flex flex-col mt-48">
                  <div class="uppercase tracking-wide text-sm text-white font-semibold text-center">
                    <h1>Tipo: {{ medico.userType }}</h1>
                  </div>
                  
                  <h2 class="block mt-4 text-lg leading-tight font-medium text-white">
=======
                <div class="flex flex-col mt-40">
                  <div class="uppercase tracking-wide text-lg text-black font-semibold">
                    <h1>Tipo : {{ medico.userType }}</h1>
                  </div>
                  
                  <h2 class="block mt-2 text-lg leading-tight font-medium text-white">
>>>>>>> de4d524e8dcb0d985a274b0dd097a92e5c79d609
                    <h1>Nombre del consultorio: {{ medico.name }}</h1>
                  </h2>
                  <p class="mt-2 text-white"><h1>Correo: </h1>{{ medico.email }}</p>
                  <p class="mt-2 text-white"><h1>Cédula Profesional: </h1>{{ medico.professional_id }}</p>
                  <p class="mt-2 text-white"><h1>Nombre del doctor: </h1>{{ medico.name_doctor }}</p>
                  <p class="mt-2 text-white"><h1>Teléfono: </h1><a :href="'whatsapp://' + medico.phone">{{ medico.phone }}</a></p>
                  <p class="mt-2 text-white"><h1>Ubicación: </h1>{{ medico.ubicacion }}</p>
                </div>
              </div>
            </div>
            <hr class="border-t-2 border-gray-300 my-6">
          </div>
        </div>
        <p v-else>No hay datos de médicos generales.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { defineProps } from 'vue';

const props = defineProps(['medicogral']);

if (!props.medicogral || props.medicogral.length === 0) {
  console.warn('No hay datos de médicos generales.');
}

const medicoData = props.medicogral;

const changeTextColor = (medicoId, isHover) => {
  const cardTexts = document.querySelectorAll(`.card-${medicoId} .text-white, .card-${medicoId} .text-black`);
  const textColor = isHover ? 'black' : 'white';
  cardTexts.forEach((text) => {
    text.style.color = textColor;
  });

  // Almacenar el estado en localStorage
  localStorage.setItem(`card-${medicoId}`, textColor);
};
const restoreTextColors = () => {
  for (let i = 0; i < medicoData.length; i++) {
    const medicoId = medicoData[i].id;
    const storedColor = localStorage.getItem(`card-${medicoId}`);
    if (storedColor) {
      const cardTexts = document.querySelectorAll(`.card-${medicoId} .text-black, .card-${medicoId} .text-white`);
      cardTexts.forEach((text) => {
        text.style.color = storedColor;
      });

// Restaurar los colores al cargar la página
restoreTextColors();
    }
  }
};
</script>

<style>

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
  height: 17.5cm;
  margin: 10px;
<<<<<<< HEAD
  background: rgba(39, 37, 37, 0.486); /* Color de fondo */
=======
  background: rgba(10, 17, 17, 0.5);
>>>>>>> de4d524e8dcb0d985a274b0dd097a92e5c79d609
  border-radius: 20px;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: scale(1.05);
<<<<<<< HEAD
  box-shadow: 10px 10px 20px #c2c2c2, -10px -10px 20px #ffffff; /* Sombras para el efecto neumórfico */
}
.card:hover .text-black {
  color: black; /* Color del texto cuando se pasa el cursor */
=======
<<<<<<< HEAD
  box-shadow: 0 0 20px rgba(44, 40, 40, 0.5), 0 0 40px rgba(255, 255, 255, 0.3);
=======
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3);
>>>>>>> 7cab6912f181afb063651faf4266f02e82f9f94a
>>>>>>> de4d524e8dcb0d985a274b0dd097a92e5c79d609
}

.card:hover .text-white {
  color: white; /* Color del texto cuando se pasa el cursor */
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  background: linear-gradient(45deg, #20b2d6, #ffffff); /* Degradado de fondo */
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s;
}

.card:hover::before {
  opacity: 1;
}
<<<<<<< HEAD

.card:not(:last-child) {
  margin-right: 10px;
}
</style>
=======
</style>
>>>>>>> de4d524e8dcb0d985a274b0dd097a92e5c79d609
