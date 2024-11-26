export const config = {
  weatherApi: {
    key: import.meta.env.VITE_OPENWEATHER_API_KEY || '',
    baseUrl: 'https://api.openweathermap.org/data/2.5'
  }
};