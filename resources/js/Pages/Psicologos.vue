<template>
<<<<<<< HEAD
  <div>
    <Head title="Psicologos" />
    <div class="background-image">
      <img src="/images/psicologia.jpg" class="max-w-full h-full object-cover" />
    </div>
    <div class="flex flex-col items-center">
      <div class="container">
        <div v-if="psicologosData.length > 0" class="flex flex-wrap justify-center mt-8">
          <div v-for="psicologo in psicologosData" :key="psicologo.id" 
            class="card mx-4 mb-4" 
            :class="'card-' + psicologo.id"
            @mouseover="changeTextColor(psicologo.id, true)" 
            @mouseout="changeTextColor(psicologo.id, false)">
            <div class="md:flex h-full">
              <div class="md:flex-shrink-0"></div>
              <div class="p-8 flex flex-col justify-between w-full h-full">
                <div class="flex flex-col mt-48">
                  <div class="uppercase tracking-wide text-sm text-white font-semibold text-center">
                    <h1>Tipo: </h1>{{ psicologo.userType }}
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
=======
  <Head title="Psicólogos" />
  <div class="background-image">
    <img src="/images/psicologia.jpg" class="max-w-full h-full object-cover" />
  </div>
<<<<<<< HEAD
  <div class="flex flex-col items-center">
    <div v-if="psicologosData.length > 0" class="mt-8">
      <div v-for="psicologo in psicologosData" :key="psicologo.id" class="card">
        <div class="md:flex h-full">
          <div class="md:flex-shrink-0"></div>
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
=======
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
>>>>>>> 7cab6912f181afb063651faf4266f02e82f9f94a
>>>>>>> de4d524e8dcb0d985a274b0dd097a92e5c79d609
            </div>
            <hr class="border-t-2 border-gray-300 my-6">
          </div>
        </div>
<<<<<<< HEAD
        <p v-else>No hay datos de psicólogos.</p>
      </div>
    </div>
  </div>
=======
        <hr class="border-t-2 border-gray-300 my-6">
      </div>
<<<<<<< HEAD
    </div>
    <p v-else>No hay datos de psicólogos.</p>
  </div>
=======
      <hr class="border-t-2 border-gray-300 my-6">
    </div>
  </div>
  <p v-else>No hay datos de psicólogos.</p>
>>>>>>> 7cab6912f181afb063651faf4266f02e82f9f94a
>>>>>>> de4d524e8dcb0d985a274b0dd097a92e5c79d609
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { defineProps } from 'vue';

const props = defineProps(['Psicologos']);

if (!props.Psicologos || props.Psicologos.length === 0) {
  console.warn('No hay datos de psicólogos.');
}

const psicologosData = props.Psicologos;

const changeTextColor = (psicologoId, isHover) => {
  const cardTexts = document.querySelectorAll(`.card-${psicologoId} .text-white, .card-${psicologoId} .text-black`);
  const textColor = isHover ? 'black' : 'white';
  cardTexts.forEach((text) => {
    text.style.color = textColor;
  });

  // Almacenar el estado en localStorage
  localStorage.setItem(`card-${psicologoId}`, textColor);
};

const restoreTextColors = () => {
  for (let i = 0; i < psicologosData.length; i++) {
    const psicologoId = psicologosData[i].id;
    const storedColor = localStorage.getItem(`card-${psicologoId}`);
    if (storedColor) {
      const cardTexts = document.querySelectorAll(`.card-${psicologoId} .text-black, .card-${psicologoId} .text-white`);
      cardTexts.forEach((text) => {
        text.style.color = storedColor;
      });
    }
  }
};

// Restaurar los colores al cargar la página
restoreTextColors();
</script>

<style>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
.text-super-black {
  color: #000; 
}

>>>>>>> 7cab6912f181afb063651faf4266f02e82f9f94a
>>>>>>> de4d524e8dcb0d985a274b0dd097a92e5c79d609
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
  background: rgba(39, 37, 37, 0.486); /* Color de fondo */
  border-radius: 20px;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 10px 10px 20px #c2c2c2, -10px -10px 20px #ffffff; /* Sombras para el efecto neumórfico */
}
.card:hover .text-black {
  color: black; /* Color del texto cuando se pasa el cursor */
}

.card:hover .text-white {
  color: white; /* Color del texto cuando se pasa el cursor */
}

<<<<<<< HEAD
.container .card:nth-child(3n) {
  margin-right: 0;
}

=======
>>>>>>> 7cab6912f181afb063651faf4266f02e82f9f94a
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

.card:not(:last-child) {
  margin-right: 10px;
}
</style>

