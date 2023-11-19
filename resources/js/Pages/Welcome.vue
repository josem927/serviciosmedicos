<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';

import HomeNavbar from '@/Partials/HomeNavbar.vue';
import HomeSidebar from '@/Partials/HomeSidebar.vue';
defineProps<{
  canLogin?: boolean;
  canRegister?: boolean;
  laravelVersion: string;
  phpVersion: string;
}>();
</script>

<template>
  <div>
    <Head title="medical serv" />

    <div class="flex flex-col md:flex-row h-screen bg-gray-100 dark:bg-gray-900">

      <!-- Barra lateral  estilos-->
      <div class="w-full md:w-64 bg-sidebar p-6 rounded-r-lg">
        <div class="mb-8 text-center"></div>

        <!-- Enlaces de la barra lateral aquí -->
        <div>
          <h1 class="text-2xl font-bold mb-4">MediConnect</h1>

          <template v-if="!$page.props.auth.user">
            <Link
              :href="route('login')"
              class="block py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:text-white hover:bg-indigo-500 rounded text-white transition-all duration-300"
            >Iniciar sesión</Link>

            <Link
              v-if="canRegister"
              :href="route('register')"
              class="block py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:text-white hover:bg-indigo-500 rounded text-white transition-all duration-300"
            >Registrarse</Link>
          </template>

          <Link
            v-if="$page.props.auth.user"
            :href="route('dashboard')"
            class="block py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >Dashboard</Link>
        </div>
      </div>

      <!-- Contenido principal aquí -->
      <div class="flex-1 p-6">
        <div class="flex items-center justify-center flex-col mb-8">
          <div class="max-w-full md:max-w-2xl w-full">
            <img src="/images/informativo.jpg" class="max-w-full mx-auto mb-4" />
            <h1 class="text-4xl font-bold text-center mb-4">Salud digital en tu región</h1>
            <p class="text-center">QUE OFRECEMOS</p>
          </div>
        </div>

        <!-- Tarjetas informativas -->
        <div class="flex flex-wrap justify-center">
          <!-- ... -->
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.bg-gray-100 {
  background-color: #b7c8da;
}

.dark\:bg-gray-900 {
  background-color: rgb(255, 255, 255);
}

.bg-sidebar {
  background-color: rgb(1, 145, 145);
}
</style>
