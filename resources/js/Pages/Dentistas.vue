<template>
  <div>
    <Head title="Dentistas" />
    <div class="background-image">
      <img src="/images/dentista.jpg" class="max-w-full h-full object-cover" />
    </div>
    <div class="flex flex-col items-center">
<<<<<<< HEAD
      <div class="container">
        <div v-if="dentistaData.length > 0" class="mt-8 flex flex-wrap -mx-2">
          <div v-for="dentista in dentistaData" :key="dentista.id" 
            class="card mx-4 mb-4" 
            :class="'card-' + dentista.id"
            @mouseover="changeTextColor(dentista.id, true)" 
            @mouseout="changeTextColor(dentista.id, false)">
            <div class="md:flex h-full">
              <div class="md:flex-shrink-0"></div>
              <div class="p-8 flex flex-col justify-between items-center w-full h-full">
                <div class="flex flex-col mt-48">
                  <div class="uppercase tracking-wide text-sm text-white font-semibold text-center">
                    <h1>Tipo: {{ dentista.userType }}</h1>
                  </div>
                  
                  <h2 class="block mt-4 text-lg leading-tight font-medium text-white">
                    <h1>Nombre del consultorio: {{ dentista.name }}</h1>
                  </h2>
                  <p class="mt-2 text-white"><h1>Correo: </h1>{{ dentista.email }}</p>
                  <p class="mt-2 text-white"><h1>Cédula Profesional: </h1>{{ dentista.professional_id }}</p>
                  <p class="mt-2 text-white"><h1>Nombre del doctor: </h1>{{ dentista.name_doctor }}</p>
                  <p class="mt-2 text-white"><h1>Teléfono: </h1><a :href="'whatsapp://' + dentista.phone">{{ dentista.phone }}</a></p>
                  <p class="mt-2 text-white"><h1>Ubicación: </h1>{{ dentista.ubicacion }}</p>
=======
      <div v-if="dentistaData.length > 0" class="mt-8">
        <div v-for="dentista in Dentistas" :key="dentista.id" class="card" style="width: 8cm; height: 15cm; margin-top: 16px;">
          <div class="md:flex h-full"> 
            <div class="md:flex-shrink-0">
              
            </div>
            <div class="p-8 flex flex-col justify-between w-full h-full">
              <div class="flex flex-col mt-32">
                <div class="uppercase tracking-wide text-sm text-black font-semibold">
                  <h1>Tipo de dentista</h1>{{ dentista.userType }}
>>>>>>> de4d524e8dcb0d985a274b0dd097a92e5c79d609
                </div>
              </div>
            </div>
            <hr class="border-t-2 border-gray-300 my-6">
          </div>
        </div>
        <p v-else>No hay datos de dentistas.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import { defineProps } from 'vue';

const props = defineProps(['Dentistas']);

if (!props.Dentistas || props.Dentistas.length === 0) {
  console.warn('No hay datos de dentistas.');
}

const dentistaData = props.Dentistas;

const changeTextColor = (dentistaId, isHover) => {
  const cardTexts = document.querySelectorAll(`.card-${dentistaId} .text-white, .card-${dentistaId} .text-black`);
  const textColor = isHover ? 'black' : 'white';
  cardTexts.forEach((text) => {
    text.style.color = textColor;
  });

  // Almacenar el estado en localStorage
  localStorage.setItem(`card-${dentistaId}`, textColor);
};

const restoreTextColors = () => {
  for (let i = 0; i < dentistaData.length; i++) {
    const dentistaId = dentistaData[i].id;
    const storedColor = localStorage.getItem(`card-${dentistaId}`);
    if (storedColor) {
      const cardTexts = document.querySelectorAll(`.card-${dentistaId} .text-black, .card-${dentistaId} .text-white`);
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
