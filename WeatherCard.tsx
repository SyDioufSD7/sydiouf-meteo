import React from 'react';
import { Cloud, Droplets, Wind } from 'lucide-react';
import { useWeather } from '../../hooks/useWeather';

interface WeatherCardProps {
  city: string;
}

export function WeatherCard({ city }: WeatherCardProps) {
  const { weather, loading, error } = useWeather(city);

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 animate-pulse">
        <div className="h-20 bg-gray-200 rounded"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{city}</h3>
          <p className="text-gray-500">{weather.condition}</p>
        </div>
        <div className="flex items-center">
          <img 
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt={weather.condition}
            className="w-16 h-16"
          />
          <span className="text-3xl font-bold text-blue-600">{weather.temperature}°C</span>
        </div>
      </div>
      
      <div className="mt-4 flex justify-between text-gray-600">
        <div className="flex items-center">
          <Droplets className="h-5 w-5 mr-2 text-blue-500" />
          <span>{weather.humidity}%</span>
        </div>
        <div className="flex items-center">
          <Wind className="h-5 w-5 mr-2 text-blue-500" />
          <span>{weather.windSpeed} km/h</span>
        </div>
      </div>
    </div>
  );
}