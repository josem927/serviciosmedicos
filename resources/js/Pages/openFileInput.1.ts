export const openFileInput = () => {
const fileInput = (this as any).$refs.fileInput as HTMLInputElement | undefined;
fileInput?.value = '';
fileInput?.click();
};
