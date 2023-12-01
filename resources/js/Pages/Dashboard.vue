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
  const fileInput = document.getElementById('foto_consultorio') as HTMLInputElement;
  fileInput.click();
};

const handleSelectChange = (event: Event) => {
  const selectElement = event.target as HTMLSelectElement;
  showPlaceholder.value = !selectElement.value;
};
</script>

<template>
  <Head title="Dashboard" />
  <AuthenticatedLayout>
    <div class="py-8 px-4 sm:px-6 lg:px-8">
      <div class="flex justify-center items-center h-screen">
        <div class="card mt-4 border border-black rounded-lg overflow-hidden mx-auto max-w-screen-md">
          <div class="card-body flex flex-col justify-between h-full">
            <form action="{{ route('guardar-informacion') }}" method="post">
              <div class="mb-5 relative text-center">
                <label for="foto_consultorio" class="form-label text-center font-bold text-lg">Consultorio</label>
                <div class="skeleton" :class="{ 'with-image': !showPlaceholder }">
                  <div class="loading-circle"></div>
                  <input
                    type="file"
                    id="foto_consultorio"
                    class="form-control rounded-full opacity-0 absolute inset-0 cursor-pointer"
                    name="foto_consultorio"
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

              <div class="mb-3 flex flex-col items-center">
                <label for="nombre" class="form-label">Nombre del Doctor:</label>
                <input type="text" class="form-control rounded-full w-80" name="nombre" required @input="(event) => (showPlaceholder = (event.target as HTMLInputElement).value === '')">
              </div>

              <div class="mb-3 flex flex-col items-center">
                <label for="cedula_profesional" class="form-label">Cédula Profesional:</label>
                <input type="text" class="form-control rounded-full w-80" name="cedula_profesional" required @input="(event) => (showPlaceholder = (event.target as HTMLInputElement).value === '')">
              </div>

              <div class="mb-3 flex flex-col items-center">
                <label for="horarios" class="form-label">Horarios de Atención:</label>
                <input type="text" id="horarios" name="horarios" class="form-control rounded-full" placeholder="Ej. De Lun-Viern De 8:am a 7:pm" required>
              </div>

              <div class="mb-3 flex flex-col items-center">
                <label for="direccion" class="form-label">Dirección:</label>
                <input type="text" class="form-control rounded-full w-80" name="direccion" required @input="(event) => (showPlaceholder = (event.target as HTMLInputElement).value === '')">
              </div>

              <div class="mb-3 flex flex-col items-center">
                <label for="tipo_consultorio" class="form-label">Tipo de Consultorio:</label>
                <select class="form-select rounded-full" name="tipo_consultorio" required @input="handleSelectChange">
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
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat; 
  border-radius: 20px;
  height: 820px;
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
  height: 700px;
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