import React from 'react';
import { WeatherCard } from '../components/weather/WeatherCard';
import { senegalRegions } from '../data/senegalRegions';

export function Regions() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Régions du Sénégal</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {senegalRegions.map((region) => (
          <WeatherCard
            key={region.name}
            city={region.capital}
            temperature={region.temperature}
            condition={region.condition}
            humidity={region.humidity}
            windSpeed={region.windSpeed}
          />
        ))}
      </div>
    </div>
  );
}