import { useState, useEffect } from 'react';
import { getWeatherByCity, WeatherData } from '../services/weatherApi';

export function useWeather(city: string) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        setLoading(true);
        const data = await getWeatherByCity(city);
        setWeather(data);
        setError(null);
      } catch (err) {
        setError('Erreur lors de la récupération des données météo');
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [city]);

  return { weather, loading, error };
}