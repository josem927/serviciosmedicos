<template>
    <Head title="Dashboard" />
  
    <AuthenticatedLayout>
      <div class="py-8 px-4 sm:px-6 lg:px-8">
        <!-- Tarjeta con bordes negros -->
        <div class="card mt-4 border border-black rounded-lg overflow-hidden w-64 h-76 transition-opacity transition-transform">
          <div class="card-body flex flex-col justify-between h-full">
            <form action="{{ route('guardar-informacion') }}" method="post">
  
              <!-- Sección para mostrar la imagen de perfil o el mensaje -->
              <div class="mb-3 relative">
                <label for="foto_consultorio" class="form-label">Foto del Consultorio:</label>
                <div v-if="!showPlaceholder" class="mb-3 relative">
                  <img :src="imageSrc" alt="Foto de perfil" class="rounded-full max-w-full h-32 object-cover cursor-pointer" @click="openFileInput" />
                </div>
                <div v-else class="mb-3 skeleton" @click="openFileInput">
                  <div class="overlay-message bg-opacity-50 text-white rounded p-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Selecciona foto de perfil</div>
                </div>
                <!-- Hidden file input -->
                <input type="file" id="foto_consultorio" class="form-control rounded-full hidden" name="foto_consultorio" accept="image/*" required @change="handleImageChange">
              </div>
  
              <div class="mb-3">
                <label for="nombre" class="form-label">Nombre del Doctor:</label>
                <input type="text" class="form-control rounded-full" name="nombre" required @input="(event: Event) => (showPlaceholder = (event.target as HTMLInputElement).value === '')">
              </div>
  
              <div class="mb-3">
                <label for="cedula_profesional" class="form-label">Cedula Profesional:</label>
                <input type="text" class="form-control rounded-full" name="cedula_profesional" required @input="(event: Event) => (showPlaceholder = (event.target as HTMLInputElement).value === '')">
              </div>
  
              <div class="mb-3">
                <label for="tipo_consultorio" class="form-label">Tipo de Consultorio:</label>
                <select class="form-select rounded-full" name="tipo_consultorio" required @input="(event: Event) => (showPlaceholder = (event.target as HTMLSelectElement).value === '')">
                  <option value="medicogeneral">Médico General</option>
                  <option value="Dentistas">Dentista</option>
                  <option value="Nutriologos">Nutriólogo</option>
                  <option value="Psicologos">Psicólogo</option>
                  <option value="Quiropracticos">Quiropráctico</option>
                </select>
              </div>
            </form>
  
            <button type="submit" class="btn bg-red-500 border border-red-600 text-white rounded-full py-2 px-4 hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800">Guardar información</button>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  </template>
  
  <style>
  .overlay-message {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(5, 2, 2);
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    padding: 10px;
    border-radius: 8px;
  }
  
  .skeleton {
    border-radius: 8px;
    height: 160px; 
    width: 100%;
    background-color: #ccc; 
    cursor: pointer;
    position: relative;
  }
  
  .rounded-full img {
    border-radius: 8px;
  }
  </style>
  
  <script setup lang="ts">
  import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
  import { Head } from '@inertiajs/vue3';
  import { onMounted, ref } from 'vue';
  
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
    
    const fileInput = document.getElementById('foto_consultorio') as HTMLInputElement;
    fileInput.click();
  };
  </script>
  
<style>
.card {
  border: 2px solid #db4d34; 
  border-radius: 10px; 
  overflow: hidden;
  transition: opacity 0.3s, transform 0.3s;
  box-shadow: 0 4px 6px rgba(14, 1, 1, 0.1); 
}

.card:hover {
  border-color: #010d14; 
}

.card:focus {
  outline: none;
  border-color: #041520; 
}
</style>
  