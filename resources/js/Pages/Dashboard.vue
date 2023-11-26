<script setup lang="ts">
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';

onMounted(() => {
  // Añadir una pequeña demora para que la animación sea más visible
  setTimeout(() => {
    const cardElement = document.querySelector('.card') as HTMLElement | null;
    if (cardElement) {
      cardElement.style.opacity = '1';
      cardElement.style.transform = 'translateY(0)';
    }
  }, 100);
});

const showPlaceholder = ref(true);
</script>

<template>
  <Head title="Dashboard" />

  <AuthenticatedLayout>
    <div class="py-8 px-4 sm:px-6 lg:px-8">
      <!-- Tarjeta con bordes negros -->
      <div class="card mt-4 border border-black rounded-lg overflow-hidden w-55 transition-opacity transition-transform">
        <div class="card-body">
          <form action="{{ route('guardar-informacion') }}" method="post">

            <div class="mb-3">
              <label for="nombre" class="form-label">Nombre del Doctor:</label>
              <input type="text" class="form-control rounded-full" name="nombre" required @input="(event: Event) => (showPlaceholder = (event.target as HTMLInputElement).value === '')">
            </div>

            <div class="mb-3">
              <label for="cedula_profesional" class="form-label">Cedula Profesional:</label>
              <input type="text" class="form-control rounded-full" name="cedula_profesional" required @input="(event: Event) => (showPlaceholder = (event.target as HTMLInputElement).value === '')">
            </div>

            <div class="mb-3">
              <label for="foto_consultorio" class="form-label">Foto del Consultorio:</label>
              <input type="file" class="form-control rounded-full" name="foto_consultorio" accept="image/*" required @input="(event: Event) => (showPlaceholder = (event.target as HTMLInputElement).value === '')">
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

            <button type="submit" class="btn bg-red-500 border border-red-600 text-white rounded-full py-2 px-4 hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800">Guardar informacion</button>
          </form>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>
