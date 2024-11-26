import axios from 'axios';
import { config } from '../config/environment';
import { senegalRegions } from '../data/senegalRegions';

export interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

const mockWeatherIcons: Record<string, string> = {
  'Ensoleillé': '01d',
  'Partiellement nuageux': '02d',
  'Nuageux': '03d',
  'Orageux': '11d',
  'Clair': '01d',
  'Venteux': '50d',
  'Très chaud': '01d'
};

export async function getWeatherByCity(city: string): Promise<WeatherData> {
  // If no API key is configured, use mock data
  if (!config.weatherApi.key) {
    const mockData = senegalRegions.find(region => region.capital === city);
    if (!mockData) {
      throw new Error('City not found');
    }

    return {
      temperature: mockData.temperature,
      condition: mockData.condition,
      humidity: mockData.humidity,
      windSpeed: mockData.windSpeed,
      icon: mockWeatherIcons[mockData.condition] || '01d'
    };
  }

  try {
    const response = await axios.get(`${config.weatherApi.baseUrl}/weather`, {
      params: {
        q: `${city},SN`,
        appid: config.weatherApi.key,
        units: 'metric',
        lang: 'fr'
      }
    });

    return {
      temperature: Math.round(response.data.main.temp),
      condition: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windSpeed: Math.round(response.data.wind.speed * 3.6), // Convert m/s to km/h
      icon: response.data.weather[0].icon
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}