<script setup lang="ts">
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

const form = useForm({
    name: '',
    phone:'',
    email: '',
    password: '',
    password_confirmation: '',
    professional_id:'',
    userType: '',
    
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => {
        alert("No estas registrado")
            /* form.reset('password', 'password_confirmation'); */
        },
    });
};


</script>

<template>
    <GuestLayout>
      <Head title="Registro tu consultorio" />
      <div class="background-gradient" style="background: linear-gradient(to bottom right, #c0cad1, #136965); position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; opacity: 0.8;"></div>
  
      <div class="flex flex-wrap max-w-3xl mx-auto">
        <!-- Nombre del consultorio -->
        <div class="w-full md:w-1/2 px-3 mt-4 flex flex-col">
          <InputLabel for="name" value="Nombre del consultorio" />
  
          <div class="flex">
            <TextInput
              id="name"
              type="text"
              class="mt-1 block w-full"
              v-model="form.name"
              required
              autofocus
              autocomplete="name"
            />
  
            <InputError class="mt-2 ml-2" :message="form.errors.name" />
          </div>
        </div>
  
        <!-- Tipo de Usuario -->
        <div class="w-full md:w-1/2 px-3 mt-4 flex flex-col">
          <InputLabel for="userType" value="Tipo de Usuario" />
  
          <div class="flex">
            <select
              id="userType"
              class="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              v-model="form.userType"
              required
            >
              <option value="" disabled>Elige tu consultorio</option>
              <option value="medicogral">Médico General</option>
              <option value="Dentistas">Dentistas</option>
              <option value="Nutriologos">Nutriologos</option>
              <option value="Quiropracticos">Quiropracticos</option>
              <option value="Psicologos">Psicologos</option>
            </select>
  
            <InputError class="mt-2 ml-2" :message="form.errors.userType" />
          </div>
        </div>
  
        <!-- Cédula Profesional -->
        <div class="w-full md:w-1/2 px-3 mt-4 flex flex-col">
          <InputLabel for="professional_id" value="Cédula Profesional" />
  
          <div class="flex">
            <TextInput
              id="professional_id"
              type="text"
              class="mt-1 block w-full"
              v-model="form.professional_id"
              required
              autofocus
            />
  
            <InputError class="mt-2 ml-2" :message="form.errors.professional_id" />
          </div>
        </div>
  
        <!-- Teléfono -->
        <div class="w-full md:w-1/2 px-3 mt-4 flex flex-col">
          <InputLabel for="phone" value="Teléfono" />
  
          <div class="flex">
            <TextInput
              id="phone"
              type="text"
              class="mt-1 block w-full"
              v-model="form.phone"
              required
              autofocus
              autocomplete="phone"
            />
  
            <InputError class="mt-2 ml-2" :message="form.errors.phone" />
          </div>
        </div>
  
        <!-- Correo Electrónico -->
        <div class="w-full md:w-1/2 px-3 mt-4 flex flex-col">
          <InputLabel for="email" value="Correo Electronico" />
  
          <div class="flex">
            <TextInput
              id="email"
              type="email"
              class="mt-1 block w-full"
              v-model="form.email"
              required
              autocomplete="username"
            />
  
            <InputError class="mt-2 ml-2" :message="form.errors.email" />
          </div>
        </div>
  
        <!-- Contraseña -->
        <div class="w-full md:w-1/2 px-3 mt-4 flex flex-col">
          <InputLabel for="password" value="Contraseña" />
  
          <div class="flex">
            <TextInput
              id="password"
              type="password"
              class="mt-1 block w-full"
              v-model="form.password"
              required
              autocomplete="new-password"
            />
  
            <InputError class="mt-2 ml-2" :message="form.errors.password" />
          </div>
        </div>
      </div>
  
      <!-- Confirmar contraseña -->
      <div class="w-full md:w-1/2 px-3 mt-4 flex flex-col">
        <InputLabel for="password_confirmation" value="Confirmar contraseña" />
  
        <div class="flex">
          <TextInput
            id="password_confirmation"
            type="password"
            class="mt-1 block w-full"
            v-model="form.password_confirmation"
            required
            autocomplete="new-password"
          />
  
          <InputError class="mt-2 ml-2" :message="form.errors.password_confirmation" />
        </div>
      </div>
  
      <!-- Botón de registro -->
      <div class="w-full mt-4">
        <div class="flex items-center justify-end">
          <Link
            :href="route('login')"
            class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            ¿Ya estás registrado?
          </Link>
  
          <PrimaryButton @click="submit" class="ml-4 bg-red-500 text-white" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
            Registrarse
          </PrimaryButton>
        </div>
      </div>
    </GuestLayout>
  </template>
  