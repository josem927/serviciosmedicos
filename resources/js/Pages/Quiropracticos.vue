<template>
  <div>
    <Head title="Quiropracticos" />
    <div class="background-image">
      <img src="/images/quiropraxia.jpg" class="max-w-full h-full object-cover" />
    </div>
    <div class="flex flex-col items-center">
      <div class="container">
        <div v-if="quiropracticosData.length > 0" class="mt-8 flex flex-wrap -mx-2">
          <div v-for="quiropractico in quiropracticosData" :key="quiropractico.id" 
            class="card mx-4 mb-4" 
            :class="'card-' + quiropractico.id"
            @mouseover="changeTextColor(quiropractico.id, true)" 
            @mouseout="changeTextColor(quiropractico.id, false)">
            <div class="md:flex h-full">
              <div class="md:flex-shrink-0"></div>
              <div class="p-8 flex flex-col justify-between w-full h-full">
                <div class="flex flex-col mt-32">
                  <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    <h1>Tipo de quiropráctico</h1>{{ quiropractico.userType }}
                  </div>
                  <h2 class="block mt-2 text-lg leading-tight font-medium text-white">
                    <h1>Nombre del consultorio: {{ quiropractico.name }}</h1>
                  </h2>
                  <p class="mt-2 text-black"><h1>Correo: </h1>{{ quiropractico.email }}</p>
                  <p class="mt-2 text-black"><h1>Cédula Profesional: </h1>{{ quiropractico.professional_id }}</p>
                  <p class="mt-2 text-gray-500 text-white"><h1>Nombre del doctor: </h1>{{ quiropractico.name_doctor }}</p>
                  <p class="mt-2 text-gray-500 text-white"><h1>Teléfono: </h1><a :href="'whatsapp://' + quiropractico.phone">{{ quiropractico.phone }}</a></p>
                  <p class="mt-2 text-gray-500 text-white"><h1>Ubicación: </h1>{{ quiropractico.ubicacion }}</p>
                </div>
              </div>
            </div>
            <hr class="border-t-2 border-gray-300 my-6">
          </div>
        </div>
        <p class="mt-2 text-white" v-else>No hay datos de quiroprácticos.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { defineProps } from 'vue';

const props = defineProps(['Quiropracticos']);

if (!props.Quiropracticos || props.Quiropracticos.length === 0) {
  console.warn('No hay datos de quiroprácticos.');
}

const quiropracticosData = props.Quiropracticos;

const changeTextColor = (quiropracticoId, isHover) => {
  const cardTexts = document.querySelectorAll(`.card-${quiropracticoId} .text-white, .card-${quiropracticoId} .text-black`);
  const textColor = isHover ? 'black' : 'white';
  cardTexts.forEach((text) => {
    text.style.color = textColor;
  });

  // Almacenar el estado en localStorage
  localStorage.setItem(`card-${quiropracticoId}`, textColor);
};

const restoreTextColors = () => {
  for (let i = 0; i < quiropracticosData.length; i++) {
    const quiropracticoId = quiropracticosData[i].id;
    const storedColor = localStorage.getItem(`card-${quiropracticoId}`);
    if (storedColor) {
      const cardTexts = document.querySelectorAll(`.card-${quiropracticoId} .text-black, .card-${quiropracticoId} .text-white`);
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

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
}

.card {
  flex: 0 0 calc(33.333% - 20px);
  width: 15cm;
  height: 17.5cm;
  margin: 10px;
  background: rgba(128, 128, 128, 0.5);
  border-radius: 20px;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3);
}

.card:nth-child(3n) {
  margin-right: 0;
}

.container .card:nth-child(3n) {
  margin-right: 0;
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
