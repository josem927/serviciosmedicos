export const openFileInput = () => {
const fileInput = this.$refs.fileInput as HTMLInputElement | undefined;
if (fileInput) {
fileInput.value = '';
fileInput.click();
} else {
console.error("File input is undefined.");
}
};
