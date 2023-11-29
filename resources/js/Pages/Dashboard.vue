<script setup lang="ts">
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';

onMounted(() => {
  setTimeout(() => {
    const cardElement = document.querySelector('.card') as HTMLElement | null;
    if (cardElement) {
      cardElement.style.opacity = '1';
      cardElement.style.transform = 'translateY(0)';
    }
  }, 100);
});

const showPlaceholder = ref(true);
const imageSrc = ref('');

const handleImageChange = (event: Event) => {
  const inputElement = event.target as HTMLInputElement;
  showPlaceholder.value = inputElement.files?.length === 0;

  if (inputElement.files && inputElement.files[0]) {
    const reader = new FileReader();
    reader.onload = () => {
      imageSrc.value = reader.result as string;
    };
    reader.readAsDataURL(inputElement.files[0]);
  }
};

const openFileInput = () => {
  if (showPlaceholder.value) {
    const fileInput = document.getElementById('foto_consultorio') as HTMLInputElement;
    fileInput.click();
    showPlaceholder.value = true;
  }
};
</script>


<template>
  <Head title="Dashboard" />
  <AuthenticatedLayout>
    <div class="py-8 px-4 sm:px-6 lg:px-8">
      <div class="flex justify-center items-center h-screen">
        <!-- Tarjeta con bordes negros -->
        <div class="card mt-4 border border-black rounded-lg overflow-hidden w-64 h-76 transition-opacity transition-transform">
          <div class="card-body flex flex-col justify-between h-full">
            <form action="{{ route('guardar-informacion') }}" method="post">
              <div class="mb-5 relative text-center">
                <label for="foto_consultorio" class="form-label text-center font-bold text-lg">Consultorio:</label>
                <div class="skeleton" >
                  <div class="loading-circle" :class="{ 'hidden': !showPlaceholder }"></div>
                  <input
                    v-if="showPlaceholder"
                    type="file"
                    id="foto_consultorio"
                    class="form-control rounded-full opacity-0 absolute inset-0"
                    name="foto_consultorio"
                    accept="image/*"
                    required
                    @change="handleImageChange"
                  />
                  <div v-if="!showPlaceholder" class="relative mt-1 flex items-center justify-center h-44">
                    <img :src="imageSrc" alt="Foto de perfil" class="rounded-full max-w-full h-full object-cover cursor-pointer" @click="openFileInput" 
                    />
                  </div>
                </div>
              </div>
                <div class="mb-3">
                  <label for="nombre" class="form-label ml-2">Nombre del Doctor: </label>
                  <input type="text" class="form-control rounded-full w-80" name="nombre" required @input="(event: Event) => (showPlaceholder = (event.target as HTMLInputElement).value === '')">
                </div>

                <div class="mb-3">
                  <label for="cedula_profesional" class="form-label ml-2">Cédula Profesional: </label>
                  <input type="text" class="form-control rounded-full w-80" name="cedula_profesional" required @input="(event: Event) => (showPlaceholder = (event.target as HTMLInputElement).value === '')">
                </div>

                <div class="mb-3">
                  <label for="horarios " class="form-label ml-2">Horarios de Atención: </label>
                  <input type="text" class="form-control rounded-full w-80" name="horarios" required @input="(event: Event) => (showPlaceholder = (event.target as HTMLInputElement).value === '')">
                </div>
                
                <div class="mb-3">
                  <label for="direccion" class="form-label ml-2">Dirección: </label>
                  <input type="text" class="form-control rounded-full w-80" name="direccion" required @input="(event: Event) => (showPlaceholder = (event.target as HTMLInputElement).value === '')">
                </div>

                <div class="mb-3">
                  <label for="tipo_consultorio" class="form-label ml-2">Tipo de Consultorio: </label>
                  <select class="form-select rounded-full" name="tipo_consultorio" required @input="(event: Event) => (showPlaceholder = (event.target as HTMLSelectElement).value === '')">
                    <option value="medicogeneral">Médico General</option>
                    <option value="Dentistas">Dentista</option>
                    <option value="Nutriologos">Nutriólogo</option>
                    <option value="Psicologos">Psicólogo</option>
                    <option value="Quiropracticos">Quiropráctico</option>
                  </select>
                </div>

            </form>

            <div class="flex items-center justify-center">
              <button type="submit" class="btn mb-3 bg-black text-white rounded-full py-2 px-4 hover:bg-black-600 focus:outline-none focus:shadow-outline-black active:bg-black-800">
                Guardar información
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<style>

  body {
    background-image: url('ruta_de_tu_imagen.jpg');
    background-size: cover; /* Esto ajustará la imagen para cubrir toda la página */
    background-position: center center;
    background-repeat: no-repeat; 
  }

  .overlay-message {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(5, 2, 2);
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    padding: 20px;
    border-radius: 8px;
  }

  .skeleton {
    border-radius: 8px;
    height: 180px;
    width: 80%;
    max-width: 400px;
    background-color: #ccc;
    cursor: pointer;
    position: relative;
    margin: 0 auto;
    overflow: hidden;
  }

  .skeleton .loading-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 4px solid transparent;
    border-top-color: #db4d34;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  }

  .rounded-full img {
    border-radius: 8px;
  }
  </style>


    
  <style>
  .card {
    border: 4px solid #000000;
    border-radius: 20px; 
    overflow: hidden;
    transition: opacity 0.3s, transform 0.3s;
    box-shadow: 0 8px 12px rgba(14, 1, 1, 0.2);
    width: 500px;
    height: 600px;
  }

  .card:hover {
    border-color: #010d14; 
  }

  .card:focus {
    outline: none;
    border-color: #041520; 
  }
  </style>
    