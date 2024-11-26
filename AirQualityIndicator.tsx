import React from 'react';
import { Wind } from 'lucide-react';

interface AirQualityIndicatorProps {
  aqi: number;
  pollutant: string;
}

export function AirQualityIndicator({ aqi, pollutant }: AirQualityIndicatorProps) {
  const getQualityLevel = () => {
    if (aqi <= 50) return { text: 'Bon', color: 'text-green-600', bg: 'bg-green-100' };
    if (aqi <= 100) return { text: 'Modéré', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    return { text: 'Mauvais', color: 'text-red-600', bg: 'bg-red-100' };
  };

  const quality = getQualityLevel();

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Qualité de l'air</h3>
        <Wind className="h-6 w-6 text-blue-500" />
      </div>
      <div className={`${quality.bg} ${quality.color} rounded-lg p-3 text-center`}>
        <p className="text-2xl font-bold">{aqi}</p>
        <p className="text-sm font-medium">{quality.text}</p>
      </div>
      <p className="text-sm text-gray-600 mt-2">
        Principal polluant: {pollutant}
      </p>
    </div>
  );
}