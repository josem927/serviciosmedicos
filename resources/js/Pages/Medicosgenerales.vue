  <template>
    <Head title="Medico General" />
   <div class="background-image">
    <img src="/images/general.jpg" class="max-w-full h-full object-cover" />
  </div>
    <div class="flex flex-col items-center">
      <div class="container">
        <div v-if="medicoData.length > 0" class="mt-8 flex flex-wrap -mx-4">
          <div v-for="medico in medicogral" :key="medico.id" class="card mx-4 mb-4">
            <div class="md:flex h-full">
              <div class="md:flex-shrink-0">
              </div>
              <div class="p-8 flex flex-col justify-between items-center w-full h-full">
                <div class="flex flex-col mt-60">
                  <div class="uppercase tracking-wide text-sm text-black font-semibold">
                    <h1>Tipo de médico: {{ medico.userType }}</h1>
                  </div>
                  
                  <h2 class="block mt-2 text-lg leading-tight font-medium text-black">
                    <h1>Nombre del consultorio: {{ medico.name }}</h1>
                  </h2>
                  <p class="mt-2 text-black"><h1>Correo: </h1>{{ medico.email }}</p>
                  <p class="mt-2 text-black"><h1>Cédula Profesional: </h1>{{ medico.professional_id }}</p>
                  <p class="mt-2 text-black"><h1>Nombre del doctor: </h1>{{ medico.name_doctor }}</p>
                  <p class="mt-2 text-black"><h1>Teléfono: </h1><a :href="'whatsapp://' + medico.phone">{{ medico.phone }}</a></p>
                  <p class="mt-2 text-black"><h1>Ubicación: </h1>{{ medico.ubicacion }}</p>
                </div>
              </div>
            </div>
            <hr class="border-t-2 border-gray-300 my-6">
          </div>
        </div>
        <p v-else>No hay datos de médicos generales.</p>
      </div>
    </div>
  </template>

<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { defineProps } from 'vue';

const props = defineProps(['medicogral']);

if (!props.medicogral || props.medicogral.length === 0) {
  console.warn('No hay datos de médicos generales.');
}

const medicoData = props.medicogral;
</script>

<style>
.text-super-black {
  color: #000; 
}

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
  height: 15cm;
  margin: 10px;
  background: rgba(128, 128, 128, 0.5);
  border-radius: 20px;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  transition: transform 0.3s, box-shadow 0s;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3);
}

.card:not(:last-child) {
  margin-right: 10px;
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
