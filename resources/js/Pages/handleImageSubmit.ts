export const handleImageSubmit = async () => {
const formData = new FormData();
const fileInput = document.getElementById('foto_consultorio') as HTMLInputElement;

if (fileInput.files && fileInput.files.length > 0) {
formData.append('foto_consultorio', fileInput.files[0]);
}

try {
await Inertia.post(route('actualizar-imagen-perfil'), formData);
// Puedes agregar lógica adicional o redireccionar si es necesario
} catch (error) {
console.error('Error al actualizar la imagen de perfil', error);
}
};
