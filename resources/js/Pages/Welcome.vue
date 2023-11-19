<template>
  <div>
    <Head title="medical serv" />

    <!-- Navbar -->
    <nav class="bg-gray-800 p-6 text-white fixed top-0 left-0 right-0 z-10">
      <div class="container mx-auto flex justify-between items-center w-full">
    

        <div class="flex items-center">
          <Link
            v-if="$page.props.auth.user"
            :href="route('navbar')"
            class="ml-4 hover:text-gray-300"
          >Dashboard</Link>
        </div>
        <div>
          <template v-if="!$page.props.auth.user">
            <div class="flex">
              <Link
                :href="route('login')"
                class="inline-block py-2 px-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:text-white rounded text-white transition-all duration-300 hover-rectangle mb-2 text-center cursor-pointer"
              >Iniciar sesión</Link>

              <Link
                v-if="canRegister"
                :href="route('register')"
                class="inline-block py-2 px-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:text-white rounded text-white transition-all duration-300 hover-rectangle mb-2 text-center cursor-pointer ml-2"
              >Registra tu consultorio</Link>
            </div>
          </template>
        </div>
      </div>
    </nav>

    
    <div class="flex flex-col md:flex-row h-screen bg-gray-100 dark:bg-gray-900">
      <!-- aqui puedes agregar caleth mas cosas dentro del sidebar -->
      <div class="w-full md:w-64 bg-sidebar p-6 fixed top-[-145px]  left-0 z-10 flex flex-col justify-center">
        <div class="mb-8 text-center">
         
          <img class="w-34 h-auto ml-4 " src="images/mediconectB.png " alt="MediConnect Image" />
          <p class="text-white text-xl  mt-3">¡Bienvenido a MediConnect!</p> <br>
          <h1 class="text-white">¿Que buscaba?</h1>
          <a href="/medicogeneral" class="btn">Médicos Generales</a>
          <a href="/Dentistas" class="btn">Dentistas</a>
          <a href="/Nutriologos" class="btn">Nutriologos</a>
          <a href="/Psicologos" class="btn">Psicologos</a>
          <a href="/Quiropracticos" class="btn">Quiropracticos</a>
        </div>
        <div>
          <Link
            v-if="$page.props.auth.user"
            :href="route('dashboard')"
            class="block py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >Dashboard</Link>
        </div>
      </div>

      <!-- Contenido principal -->
      <div class="flex-1 p-6 ml-64 mt-16">
        <div class="flex items-center justify-center flex-col mb-8">
          <div class="max-w-full md:max-w-2xl w-full">
            <img src="/images/informativo.jpg" class="max-w-full mx-auto mb-4" />
            <h1 class="text-4xl font-bold text-center mb-4">Salud digital en tu región</h1>
            <p class="text-center">QUE OFRECEMOS</p>
          </div>
        </div>

        <div class="flex flex-wrap justify-center">
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

<style scoped>
.bg-gray-100 {
  background-color: #b7c8da;
}

.dark\:bg-gray-900 {
  background-color: rgb(255, 255, 255);
}

.bg-sidebar {
  background-color: rgb(20, 102, 102);
  height: 1000px;
  z-index: 1; 
}

.bg-gray-800 {
  z-index: 2;
  background-color: rgb(20, 102, 102);
}

.btn {
  display: block;
  background-color: #3b99aa2d;
  color: #fff;
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: rgb(90, 146, 184);
}

.btn-fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 64px; /* Ajusta según sea necesario */
  background-color: #3498db31;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s;
}

.btn-fixed:hover {
  background-color: #fd9f87;
}
</style>
