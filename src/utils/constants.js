export const getAssetUrl = (filename) => {
  // Log the raw environment variable
  console.log('Raw env var:', import.meta.env.VITE_R2_BUCKET_URL);
  
  const baseUrl = import.meta.env.VITE_R2_BUCKET_URL || '';
  // Remove any trailing slashes from base URL
  const cleanBaseUrl = baseUrl.replace(/\/+$/, '');
  // Remove any leading slashes from filename
  const cleanFilename = filename.replace(/^\/+/, '');
  
  // Prepend 'public' to the path to match R2 bucket structure
  const url = `${cleanBaseUrl}/public/${cleanFilename}`;
  console.log('Generated URL:', url);
  return url;
};
