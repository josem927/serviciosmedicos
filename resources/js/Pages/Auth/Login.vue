<script setup lang="ts">
import Checkbox from '@/Components/Checkbox.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

defineProps<{
    canResetPassword?: boolean;
    status?: string;
}>();

const form = useForm({
    email: '',
    password: '',
    remember: false,
    cedulaProfesional: '',
    userType: '' as string,
    recaptcha: '' as string,
});

const submit = async () => {
    const cedulaProfesionalRegex = /^[0-9]{8}$/;

    if (!form.cedulaProfesional.match(cedulaProfesionalRegex)) {
        form.errors.cedulaProfesional = 'Formato de cédula profesional no válido';
        return;
    }

    await form.post(route('login'), {
        onFinish: () => {
            form.reset('password');
        },
    });
};
</script>


<template>
    <GuestLayout>
        <Head title="Iniciar sesión" />

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="email" value="Correo Electronico" />

                <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
                    autofocus
                    autocomplete="username"
                />

                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Contraseña" />

                <TextInput
                    id="password"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    required
                    autocomplete="current-password"
                />

                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="mt-4">
                <InputLabel for="cedulaProfesional" value="Cédula Profesional" />

                <TextInput
                    id="cedulaProfesional"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.cedulaProfesional"
                    required
                    autocomplete="off"
                />

                <InputError class="mt-2" :message="form.errors.cedulaProfesional" />
            </div>
            <div class="mt-4 relative">
                <InputLabel for="userType" value="Tipo de Usuario" />
                <div class="relative">
                    <select
                    id="userType"
                    class="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    v-model="form.userType"
                    required
                    >
                    <option value="" disabled>Elige tu consultorio</option>
                    <option value="medicogral">Médico General</option>
                    <option value="odontologia">Odontología</option>
                    <option value="nutriologia">Nutriología</option>
                    <option value="psicologia">Psicología</option>
                    <option value="quiropractico">Quiroprácticos</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    >
                    <path d="M10 12l-6 6v-2H3a1 1 0 1 1 0-2h1V8.414A1 1 0 0 1 5.414 7L10 11.586 14.586 7A1 1 0 0 1 16 8.414V16h1a1 1 0 1 1 0 2h-1v2l-6-6z" />
                </svg>
            </div>
        </div>
        <InputError class="mt-2" :message="form.errors.userType" />
    </div>
            <div class="block mt-4">
                <label class="flex items-center">
                    <Checkbox name="remember" v-model:checked="form.remember" />
                    <span class="ml-2 text-sm text-gray-600">Recuerdame</span>
                </label>
            </div>

            <div class="flex items-center justify-end mt-4">
                <Link
                    v-if="canResetPassword"
                    :href="route('password.request')"
                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    ¿Olvidaste tu Contraseña?
                </Link>

                <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Iniciar Sesión
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template>