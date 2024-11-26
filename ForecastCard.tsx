import React from 'react';
import { Sun, Cloud, CloudRain, Wind } from 'lucide-react';

interface ForecastCardProps {
  day: string;
  temperature: number;
  condition: string;
}

export function ForecastCard({ day, temperature, condition }: ForecastCardProps) {
  const getIcon = () => {
    switch (condition.toLowerCase()) {
      case 'ensoleillé':
        return <Sun className="h-8 w-8 text-yellow-500" />;
      case 'nuageux':
        return <Cloud className="h-8 w-8 text-gray-500" />;
      case 'pluvieux':
        return <CloudRain className="h-8 w-8 text-blue-500" />;
      default:
        return <Wind className="h-8 w-8 text-gray-400" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 text-center">
      <p className="text-gray-600 font-medium mb-2">{day}</p>
      {getIcon()}
      <p className="text-2xl font-bold mt-2">{temperature}°C</p>
      <p className="text-sm text-gray-500">{condition}</p>
    </div>
  );
}