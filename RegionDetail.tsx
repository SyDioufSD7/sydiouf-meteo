import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Thermometer, Droplets, Wind } from 'lucide-react';
import { senegalRegions } from '../data/senegalRegions';

export function RegionDetail() {
  const { regionName } = useParams();
  const navigate = useNavigate();
  
  const region = senegalRegions.find(
    r => r.name.toLowerCase() === regionName?.toLowerCase()
  );

  if (!region) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Région non trouvée</p>
        <button
          onClick={() => navigate('/map')}
          className="mt-4 text-blue-600 hover:text-blue-800"
        >
          Retour à la carte
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={() => navigate('/map')}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Retour à la carte
      </button>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">Région de {region.name}</h1>
          <p className="opacity-90">Capitale: {region.capital}</p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-4 flex items-center">
              <Thermometer className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm text-blue-600">Température</p>
                <p className="text-2xl font-bold">{region.temperature}°C</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 flex items-center">
              <Droplets className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm text-blue-600">Humidité</p>
                <p className="text-2xl font-bold">{region.humidity}%</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 flex items-center">
              <Wind className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm text-blue-600">Vent</p>
                <p className="text-2xl font-bold">{region.windSpeed} km/h</p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold mb-4">Conditions météorologiques</h2>
            <p className="text-gray-600">
              Les conditions actuelles dans la région de {region.name} sont {region.condition.toLowerCase()}.
              La température est de {region.temperature}°C avec une humidité relative de {region.humidity}%.
              Le vent souffle à {region.windSpeed} km/h.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}