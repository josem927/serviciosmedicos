<template>
  <Head title="Dashboard" />
  <AuthenticatedLayout>
    <div class="py-8 px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
      <div class="flex justify-center items-center">
=======
      <div class="flex justify-center items-center h-screen">
>>>>>>> de4d524e8dcb0d985a274b0dd097a92e5c79d609
        <div class="card mt-4 border border-black rounded-lg overflow-hidden mx-auto max-w-screen-md">
          <div class="card-body flex flex-col justify-between h-full">
            <form @submit.prevent="submit" enctype="multipart/form-data" >
              @csrf
              <div class="mb-5 relative text-center">
                <label for="profile_images" class="form-label text-center font-bold text-lg">Consultorio</label>
                <div class="skeleton" :class="{ 'with-image': !showPlaceholder }">
                  <div class="loading-circle"></div>
                  <input
                    type="file"
                    id="profile_images"
                    class="form-control rounded-full opacity-0 absolute inset-0 cursor-pointer"
                    name="profile_images"
                    accept="image/*"
                    required
                    @change="handleImageChange"
                  />
                  <div v-if="!showPlaceholder && imageSrc" class="relative mt-1 flex items-center justify-center h-44">
                    <img
                      :src="imageSrc"
                      alt="Foto de perfil"
                      class="rounded max-w-full h-full object-cover cursor-pointer"
                      @click="openFileInput"
                    />
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-center">
<<<<<<< HEAD
                <button type="submit" class="btn mb-3 bg-black text-white rounded-full py-2 px-4 hover:bg-black-600 focus:outline-none focus:shadow-outline-black active:bg-black-800 mt-8">
=======
                <button type="submit" class="btn mb-3 bg-black text-white rounded-full py-2 px-4 hover:bg-black-600 focus:outline-none focus:shadow-outline-black active:bg-black-800">
>>>>>>> de4d524e8dcb0d985a274b0dd097a92e5c79d609
                  Guardar información
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup lang="ts">
import axios from 'axios';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/inertia-vue3';
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

import { Inertia } from '@inertiajs/inertia';

const showPlaceholder = ref(true);
const imageSrc = ref('');

const handleImageChange = (event: Event) => {
  const inputElement = event.target as HTMLInputElement;
  showPlaceholder.value = !inputElement.files || inputElement.files.length === 0;

  if (inputElement.files && inputElement.files[0]) {
    const reader = new FileReader();
    reader.onload = () => {
      imageSrc.value = reader.result as string;
    };
    reader.readAsDataURL(inputElement.files[0]);
  }
};

const openFileInput = () => {
  const fileInput = document.getElementById('profile_images') as HTMLInputElement;
  fileInput.click();
};

const submit = async () => {
  try {
    const formElement = document.querySelector('form') as HTMLFormElement;
    const formData = new FormData(formElement);


    await Inertia.post('/guardar-informacion', formData);
    console.log('Información guardada exitosamente');
    
  } catch (error) {
    console.error('Error al guardar la información', error);
  }
};
</script>

<style>
body {
  background-image: url('ruta_de_tu_imagen.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat; 
  border-radius: 20px;
  height: 820px;
  overflow-y: hidden;
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
  width: 69%;
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
  transform: translate(-40%, -40%);
  border: 4px solid transparent;
  border-top-color: #f8f3f2;
  border-radius: 70%;
  width: 5px;
  height: 20px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}

.skeleton.with-image .loading-circle {
  display: none;
}

.rounded-full img {
  border-radius: 8px;
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.card {
  border: 4px solid #e2e0e0;
  border-radius: 60px; 
  overflow: hidden;
  transition: opacity 0.3s, transform 0.3s;
  box-shadow: 0 8px 12px rgba(5, 12, 11, 0.2);
  width: 500px;
  height: 400px;
}

.card:hover {
  border-color: #73e0d2; 
}

.card:focus {
  outline: none;
  border-color: #041520; 
}
.form-label {
    font-size: 14px; 
    font-weight: bold;
    margin-bottom: 4px;
    text-align: left; 
  }
.form-control {
    width: 260px; 
    font-size: 14px; 
    max-width: 260px; 
    margin-bottom: 5px; 
    padding: 8px; 
  }
</style>
