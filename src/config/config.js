const config = {
    env: import.meta.env.VITE_APP_ENV,
    appName: import.meta.env.VITE_APP_NAME,
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
    enableDebug: import.meta.env.VITE_ENABLE_DEBUG === "true",
    version: import.meta.env.VITE_APP_VERSION,
    port: import.meta.env.VITE_PORT,
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    emailJs: {
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      userId: import.meta.env.VITE_EMAILJS_USER_ID,
    },
  };
  
  export default config;
  