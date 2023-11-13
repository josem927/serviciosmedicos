<template>
    <div>
      <Head title="medical serv" />
  
      <div class="flex flex-col md:flex-row h-screen bg-gray-100 dark:bg-gray-900">
  
        <!-- Barra lateral  estilos-->
        <div class="w-full md:w-64 bg-sidebar p-6 rounded-r-lg">
          <div class="mb-8 text-center"></div>
  
          <!-- Enlaces de la barra lateral aqui veremos que mas le anexamos -->
          <div>
            <h1 class="text-2xl font-bold mb-4">MediConnect</h1>
  
            <Link
              v-if="$page.props.auth.user"
              :href="route('dashboard')"
              class="block py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >Dashboard</Link>
  
            <template v-else>
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
          </div>
        </div>
  
        <!-- Contenido principal aqui puedes agregar todo lo que que quieras caleth hasta donde termine el div que esta abajo de este coemntario-->
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
            <Card
              title="Médicos Generales"
              content="Los médicos generales son entrenados para diagnosticar una amplia variedad de enfermedades y afecciones médicas."
            />
            <Card
              title="Dentistas"
              content="Son profesionales de la salud especializados en el diagnóstico, tratamiento y prevención de enfermedades y condiciones relacionadas con la cavidad oral y la maxilofacial."
            />
            <Card
              title="Psicólogos"
              content="Los psicólogos son profesionales de la salud mental que se especializan en comprender el comportamiento humano, los procesos mentales y las emociones."
            />
            <Card
              title="Nutriólogos"
              content="Los nutriólogos, también conocidos como dietistas o nutricionistas, son profesionales de la salud especializados en la alimentación, la nutrición y el asesoramiento dietético."
            />
            <Card
              title="Quiroprácticos"
              content="Los quiroprácticos son profesionales de la salud que se especializan en el tratamiento de trastornos del sistema musculoesquelético y del sistema nervioso, con un enfoque particular en la columna vertebral."
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { Head, Link } from '@inertiajs/vue3';
  import Card from '@/components/Card.vue';
  defineProps<{
    canLogin?: boolean;
    canRegister?: boolean;
    laravelVersion: string;
    phpVersion: string;
  }>();
  </script>
  
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
  